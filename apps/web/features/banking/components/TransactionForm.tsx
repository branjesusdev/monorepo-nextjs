"use client";

import { Controller } from "react-hook-form";
import {
  ButtonUI,
  FormControlUI,
  InputUIWrapper,
  RadioGroupFieldUI,
  SelectUIWrapper,
} from "@repo/ui";

import { useDynamicForm } from "@/features/banking/hooks/useDynamicForm";
import type { BankId, TransactionType } from "@/features/banking/models/types/banking";
import MESSAGES from "@/entry-point/config/messages.json";
import { IconChevronLeftUI } from "@repo/ui/icon";
import { useSchemaBanking } from "@/features/banking/hooks/useSchemaBanking";


type TransactionFormBankingProps = {
  productId: BankId;
  transactionType: TransactionType;
  defaultValues: any;
  onSubmit?: (dataMeta: any, formData: any) => void;
  onBack?: () => void;
};



export const TransactionFormBanking = ({
  productId,
  transactionType,
  defaultValues,
  onSubmit,
  onBack,
}: TransactionFormBankingProps) => {

  const { schemaBanking } = useSchemaBanking({bankId: productId, transactionType})

  if (!schemaBanking) {
    return null;
  }

  const {
    errors,
    handleSubmit,
    register,
    schemaFields,
    unwrapSchema,
    isValid,
    control,
    extractMetaData,
  } = useDynamicForm({ schema: schemaBanking, defaultValues });

  const prepareSubmit = async (data: any) => {
    const test = extractMetaData({ formData: data, schemaFields });
    onSubmit?.(test, data);
  };

  return (
    <>
      <FormControlUI
        onSubmit={handleSubmit(prepareSubmit)}
        state="normal"
        variant="md"
        className="mx-auto w-full h-full flex flex-col gap-4"
      >
        <div className="flex flex-col gap-6 w-[50%] mx-auto">
          {schemaFields.map((field) => {
            const { type, meta } = unwrapSchema(field);
            const messageError = errors[field]?.message?.toString() ?? "";
            const { label, options, isCurrency } = meta;

            console.log({errors});
            

            if (type === "string") {
              return (
                <InputUIWrapper
                  type="text"
                  key={field}
                  label={label ?? ""}
                  message={messageError}
                  isError={!!messageError}
                  {...register(field)}
                />
              );
            }

            if (type === "select") {
              const optionsSelect =
                options?.map((option) => ({
                  label: option.label,
                  value: option.value,
                  disabled: option?.disabled ?? false,
                })) ?? [];

              return (
                <Controller
                  key={field}
                  name={field}
                  control={control}
                  render={({ field }) => (

                    <SelectUIWrapper
                      className="w-full"
                      label={label ?? ""}
                      message={messageError}
                      options={optionsSelect}
                      isError={!!messageError}
                      value={field.value ?? ""}
                      variant={messageError ? "error" : "primary"}
                      onChange={(_, newValue) => field.onChange(newValue)}
                    />
                  )}
                />
              );

            }

            if (type === "radio") {
              const optionsGroup =
                options?.map((option) => ({
                  label: option.label,
                  value: option.value,
                  disabled: option?.disabled ?? false,
                })) ?? [];

              return (
                <Controller
                  key={field}
                  name={field}
                  control={control}
                  render={({ field }) => (
                    <RadioGroupFieldUI
                      label={label ?? ""}
                      message={messageError}
                      row
                      options={optionsGroup}
                      value={field.value ?? ""}
                      onChange={(event) => field.onChange(event.target.value)}
                    />
                  )}
                />
              );
            }

            if (type === "number") {
              return (
                <InputUIWrapper
                  type="number"
                  startAdornment={isCurrency ? "$" : undefined}
                  key={field}
                  label={label ?? ""}
                  message={messageError}
                  isError={!!messageError}
                  {...register(field, { valueAsNumber: true })}
                />
              );
            }
          })}

        </div>

        <div className="flex justify-between mt-auto mb-16">
          <ButtonUI
            onClick={onBack}
            variant="outlined"
            color="inherit"
            className="!min-w-60"
          >
            <div className="flex justify-between items-center w-full">
              <IconChevronLeftUI fillColorPath="primary" />
              <span className="flex-1">{MESSAGES.generics.button.uppercase.back}</span>
            </div>
          </ButtonUI>

          <ButtonUI
            state={!isValid ? "disabled" : "normal"}
            disabled={!isValid}
            type="submit"
            className="!min-w-60"
          >
            {MESSAGES.generics.button.uppercase.next}
          </ButtonUI>
        </div>
      </FormControlUI>
    </>
  );
};
