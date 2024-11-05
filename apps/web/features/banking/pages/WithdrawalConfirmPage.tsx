"use client";

import { useRouter } from "next/navigation";
import { notFound } from "next/navigation";
import { TypographyUI } from "@repo/ui";

import MESSAGES from "@/entry-point/config/messages.json";
import { TransactionConfirmBanking } from "@/features/banking/components/TransactionConfirm";
import { useBankingStore } from "@/features/banking/store/bankingStore";
import { getTransactionFlow } from "@/features/banking/config/transaction-flow";
import { dashboardRoutes } from "@/entry-point/config/routes.config";
import { usePreviewLabel } from "@/features/banking/hooks/usePreviewLabel";
import { ContainerUI } from "@repo/ui/layout";
import { useState } from "react";
import { VerificationCode } from "../components/VerificationCode";
import { formaterCurrency } from "@/entry-point/lib/functions/utils";
import { TransactionType } from '../models/types/banking';

export const WithdrawalConfirmPage = () => {
  const router = useRouter();

  const {
    transactionType,
    selectedProduct,
    infoTransaction,
    setLoaderBackdrop,
    loadingBackdrop,
  } = useBankingStore();

  const productId = selectedProduct?.id;

  if (!transactionType || !productId) {
    notFound();
  }

  const [openDialog, setOpenDialog] = useState(false);
  const nextStep = dashboardRoutes(productId, transactionType).banking.summmary;
  const previousStep = dashboardRoutes(productId, transactionType).banking.form;

  const serverTransactionFlow = async () => {
    return await getTransactionFlow({ bankId: productId, transactionType });
  };

  // Prepare Data

  const { dataRender } = usePreviewLabel({
    dataMeta: infoTransaction.dataMeta,
    productId,
    transactionType,
  });

  // Event Handlers

  const handleOnSubmit = async (data: any) => {
    setLoaderBackdrop(true, {
      title: MESSAGES.dashboard.banking.stepper.withdrawl.loader.title,
      description: MESSAGES.dashboard.banking.stepper.withdrawl.loader.description,
    });

    const {
      confirmTransaction: { isOTP },
    } = await serverTransactionFlow();

    if (isOTP) setOpenDialog(true);
    else router.push(nextStep);

    setTimeout(() => {
      setLoaderBackdrop(false);
    }, 2000);
  };

  const handleVerify = (formData = {}) => {

    console.log('handleVerify', formData);
    
    setLoaderBackdrop(true, {
      title: MESSAGES.dashboard.banking.stepper.withdrawl.loader.title,
      description: MESSAGES.dashboard.banking.stepper.withdrawl.loader.description,
    });
    setOpenDialog(false);
    router.push(nextStep);
  }

  return (
    <ContainerUI className="flex flex-col gap-10 h-full">
      <TypographyUI
        color="textPrimary"
        variant="h6"
        component="h1"
        className="!mx-auto !font-bold text-center"
      >
        {MESSAGES.dashboard.banking.stepper.withdrawl.confirm}
      </TypographyUI>

      <TransactionConfirmBanking
        dataConfirm={dataRender}
        productId={productId}
        transactionType={transactionType}
        onSubmit={handleOnSubmit}
        onBack={() => router.push(previousStep)}
        disabled={loadingBackdrop.isLoading}
        messageAlert={MESSAGES.dashboard.banking.alert.warningWithdrawl}
      />

      <VerificationCode
        isOpen={openDialog}
        onVerify={handleVerify}
        onClose={() => setOpenDialog(false)}
        title={formaterCurrency(infoTransaction.dataForm?.amount ?? '')}
        productId={productId}
        transactionType={TransactionType.CODE_TRANSACTION}
      />
    </ContainerUI>
  );
};
