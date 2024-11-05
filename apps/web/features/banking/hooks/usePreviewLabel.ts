import { useEffect, useState } from "react";

import { getTransactionFlow } from '@/features/banking/config/transaction-flow';
import { objectLabelsValue, objectStateFormMetaData } from '@/entry-point/lib/functions/helper-form';
import type { BankId, StateFormMeta, TransactionType } from '@/features/banking/models/types/banking';
import type { SchemaTypeField } from "@/entry-point/model/common";


export const usePreviewLabel = (
    { dataMeta, productId, transactionType }:
        { dataMeta: StateFormMeta; productId: BankId; transactionType: TransactionType }
) => {
    const [dataRender, setDataRender] = useState<{ label: string; value: string }[]>([]);

    useEffect(() => {
        const labelsView = async ({ dataMeta }: { dataMeta: StateFormMeta }) => {
            const visibleKeys = (await getTransactionFlow({ bankId: productId, transactionType })).confirmTransaction?.keysVisible ?? [];
            const getDataMeta = objectLabelsValue({ dataMeta, keysVisible: visibleKeys });
            const filteredDataMeta = getDataMeta.filter(([, value]) => {
                const { label } = value as SchemaTypeField;
                return label !== '';
            });
            const data = objectStateFormMetaData(Object.fromEntries(filteredDataMeta));
            setDataRender(data);
        };

        labelsView({ dataMeta });
    }, [dataMeta]);

    return { dataRender };

}