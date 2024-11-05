import type { BankId } from "@/features/banking/models/types/banking";
import type { TransactionType } from "@/features/banking/models/types/banking";
import {
  ButtonUI,
  CardUI,
  FormControlUI,
  TableBodyUI,
  TableCellUI,
  TableContainerUI,
  TableRowUI,
  TableUI,
  TypographyUI,
} from "@repo/ui";
import { AlertUI } from "@repo/ui/feedback";
import MESSAGES from "@/entry-point/config/messages.json";
import { IconChevronLeftUI } from "@repo/ui/icon";

type TransactionConfirmBankingProps = {
  productId: BankId;
  transactionType: TransactionType;
  messageAlert?: string;
  onSubmit?: (data: any) => void;
  onBack?: () => void;
  dataConfirm: {
    label: string;
    value: string;
  }[];
  disabled?: boolean;
};

export const TransactionConfirmBanking = ({
  dataConfirm,
  onSubmit,
  onBack,
  disabled,
  messageAlert,
}: TransactionConfirmBankingProps) => {
  if (!dataConfirm) {
    return null;
  }

  return (
    <FormControlUI
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit?.(dataConfirm);
      }}
      state="normal"
      variant="md"
      className="mx-auto w-full h-full flex flex-col gap-4"
    >
      <CardUI className="w-2/3 mx-auto">
        <div className="px-5 py-10">

          { dataConfirm.length === 0 && <div className="text-center text-xl font-bold">
            <TypographyUI
              color="textPrimary"
              variant="h6"
              component="h1"
              className="!mx-auto !font-bold text-center" 
            >
              {MESSAGES.generics.messages.loading.cargando}
            </TypographyUI>
          </div> }

          <TableContainerUI>
            <TableUI sx={{ minWidth: 350 }} aria-label="Transaction details">
              <TableBodyUI>
                {dataConfirm.map((row) => (
                  <TableRowUI
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    key={row.label}
                  >
                    <TableCellUI component="th" scope="row">
                      {row.label}
                    </TableCellUI>
                    <TableCellUI align="right" sx={{ fontWeight: "bold" }}>
                      {row.value}
                    </TableCellUI>
                  </TableRowUI>
                ))}
              </TableBodyUI>
            </TableUI>
          </TableContainerUI>
        </div>
      </CardUI>

      <footer className="flex flex-col gap-4 mt-auto mb-16">
        {messageAlert && <AlertUI severity="warning">{messageAlert}</AlertUI>}
        <div className="flex  justify-between">
          <ButtonUI
            variant="outlined"
            color="inherit"
            className="!min-w-60"
            onClick={onBack}
          >
            <div className="flex justify-between items-center w-full">
              <IconChevronLeftUI fillColorPath="primary" />
              <span className="flex-1">
                {MESSAGES.generics.button.uppercase.back}
              </span>
            </div>
          </ButtonUI>

          <ButtonUI type="submit" className="!min-w-60" disabled={disabled}>
            {MESSAGES.generics.button.uppercase.next}
          </ButtonUI>
        </div>
      </footer>
    </FormControlUI>
  );
};
