import {
  ButtonUI,
  CardUI,
  FormControlUI,
  InputUIWrapper,
  RadioGroupFieldUI,
  TableBodyUI,
  TableCellUI,
  TableContainerUI,
  TableRowUI,
  TableUI,
  TypographyUI,
} from "@repo/ui";
import { useState } from "react";
import { IconChevronLeftUI } from "@repo/ui/icon";
import MESSAGES from "@/entry-point/config/messages.json";

interface TypePaymentProps {
  header?: {
    title: string;
    subtitle: string;
  };
  handleSubmit?: (type: string, value: number) => void;
  onBack?: () => void;
}

export const PartialPaymentBanking = ({
  header,
  handleSubmit,
  onBack,
}: TypePaymentProps) => {
  const [type, setType] = useState("total");
  const [value, setValue] = useState(0);

  return (
    <FormControlUI
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit?.(type, value);
      }}
      variant="md"
      className="mx-auto w-full h-full flex flex-col gap-4"
    >
      <CardUI className="mx-auto w-full h-auto flex flex-col gap-4 px-5 py-10">
        <TableContainerUI>
          <TableUI sx={{ minWidth: 650 }} aria-label="Transaction details">
            <TableBodyUI>
              <TableRowUI
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                }}
              >
                <TableCellUI component="th" scope="row">
                  {header?.title}
                </TableCellUI>
                <TableCellUI align="right" sx={{ fontWeight: "bold" }}>
                  {header?.subtitle}
                </TableCellUI>
              </TableRowUI>

              <TableRowUI
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                }}
              >
                <TableCellUI component="th" scope="row">
                  <RadioGroupFieldUI
                    options={[
                      { label: "Pago total", value: "total" },
                      { label: "Pago mínimo", value: "minimum" },
                      { label: "Otro valor", value: "other" },
                    ]}
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                  />
                </TableCellUI>
                <TableCellUI align="right" sx={{ fontWeight: "bold" }}>
                  <div className="flex flex-col gap-2 min-h-8 items-end">
                    <TypographyUI
                      variant="h6"
                      component="h2"
                      color={type === "total" ? "textSecondary" : "textPrimary"}
                    >
                      $40.000
                    </TypographyUI>
                    <TypographyUI
                      variant="h6"
                      component="h2"
                      color={
                        type === "minimum" ? "textSecondary" : "textPrimary"
                      }
                    >
                      $20.000
                    </TypographyUI>

                    <div
                      className={
                        (type === "other" ? "block" : "hidden") + " max-w-32"
                      }
                    >
                      <InputUIWrapper
                        startAdornment="$"
                        value=""
                        onChange={(e) => setValue(Number(e.target.value))}
                        type="text"
                      />
                    </div>
                  </div>
                </TableCellUI>
              </TableRowUI>
            </TableBodyUI>
          </TableUI>
        </TableContainerUI>
      </CardUI>

      <div className="flex justify-between mt-auto mb-16">
        <ButtonUI
          onClick={onBack}
          variant="outlined"
          color="inherit"
          className="!min-w-60"
        >
          <div className="flex justify-between items-center w-full">
            <IconChevronLeftUI fillColorPath="primary" />
            <span className="flex-1">
              {MESSAGES.generics.button.uppercase.back}
            </span>
          </div>
        </ButtonUI>

        <ButtonUI
          type="submit"
          className="!min-w-60"
        >
          {MESSAGES.generics.button.uppercase.next}
        </ButtonUI>
      </div>
    </FormControlUI>
  );
};
