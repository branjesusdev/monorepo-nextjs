import type { StateFormMeta } from "@/features/banking/models/types/banking";
import { formaterCurrency } from "./utils";
import type { KeyLabel } from "@/entry-point/model/entity";


/**
 * @Description
 *  This function is used to format the data from the state form metadata
 
 */
export const objectStateFormMetaData = (data: StateFormMeta) => {
  return Object.entries(data).map(([, value]) => {
    const { label, valueForm, isCurrency, isRadio, isSelect } = value;
    let valueKey = valueForm;

    if (isCurrency) {
      valueKey = formaterCurrency(Number(valueForm));
    }

    if (isRadio || isSelect) {
      const filterValue = value.options?.find((option: any) => option.value === valueForm) ?? null
      valueKey = filterValue?.label ?? valueForm;
    }

    return {
      label,
      value: valueKey
    }
  }) as { label: string, value: string }[];
}


/**
 * @Description
 * This function is used to get the data from the state form metadata and the keys visible
 *  
 */

export const objectLabelsValue = ({ dataMeta, keysVisible }: { dataMeta: StateFormMeta, keysVisible: KeyLabel[] }) => {
  const flatVisibleKeys = keysVisible.flatMap((key) => key);

  const getDataMeta = Object.entries(flatVisibleKeys).map(([, value]) => {
    return [value.key, dataMeta[value.key] ?? {
      label: value.labelDefault ?? "",
      valueForm: ""
    }];
  });

  return getDataMeta;
}