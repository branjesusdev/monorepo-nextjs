import { ButtonUI, FormControlUI, InputUIWrapper, TypographyUI } from "@repo/ui";
import { DialogUI } from "@repo/ui/feedback";
import { ContainerUI } from "@repo/ui/layout";
import Image from "next/image";
import MESSAGES from "@/entry-point/config/messages.json";
import { useSchemaBanking } from '@/features/banking/hooks/useSchemaBanking';
import type { BankId, TransactionType } from '@/features/banking/models/types/banking';
import { useDynamicForm } from '@/features/banking/hooks/useDynamicForm';

interface VerificationCodeProps {
  productId: BankId;
  transactionType: TransactionType;
  onVerify: (data: any) => void;
  onClose: () => void;
  isOpen: boolean;
  title ?: string;
}

export const VerificationCode = ({
  onVerify,
  onClose,
  isOpen,
  title,
  productId,
  transactionType,
}: VerificationCodeProps) => {


  const { schemaBanking } = useSchemaBanking({bankId: productId, transactionType})

  if (!schemaBanking) {
    return null;
  }

  const {
    errors,
    handleSubmit,
    register,
    isValid
  } = useDynamicForm({ schema: schemaBanking});

  return (
    <DialogUI open={isOpen} onClose={onClose}>
      <Image
        src={"/images/lines/fill-slash.svg"}
        alt="Fill Slash"
        width={100}
        height={54}
      />

    <FormControlUI onSubmit={handleSubmit(onVerify)}>
      <ContainerUI className="flex flex-col gap-5 justify-center items-center text-center px-14 py-10 max-w-[330px] ">

        {title && (
          <TypographyUI variant="h1" color="black" fontWeight={700} fontSize={42}>
            {title}
          </TypographyUI>
        )}

        <TypographyUI
          variant="h6"
          color="black"
          fontSize={20}
          className="text-balance"
        >
          El cliente te dará un &nbsp;
          <strong>código de seguridad</strong> &nbsp; de 8 números. Escríbelo a
          continuación.
        </TypographyUI>

        <InputUIWrapper
          className="max-w-[200px] mx-auto"
          type="number"
          message={errors.verificationCode?.message?.toString() ?? ""}
          isError={!!errors.verificationCode}
          {...register("verificationCode")}
        />

        <ButtonUI
            state={!isValid ? "disabled" : "normal"}
            disabled={!isValid}
            type="submit"
            variant="contained">
          {MESSAGES.dashboard.banking.generic.finalizeWithdrawl}
        </ButtonUI>
      </ContainerUI>
    </FormControlUI>
    </DialogUI>
  );
};
