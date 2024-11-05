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

export const PaymentConfirmPage = () => {
  const router = useRouter();

  const { transactionType, selectedProduct, infoTransaction, setLoaderBackdrop, loadingBackdrop } =
    useBankingStore();

  const productId = selectedProduct?.id;

  if (!transactionType || !productId) {
    notFound();
  }

  const nextStep = dashboardRoutes(productId, transactionType).banking.summmary;
  const previousStep = dashboardRoutes(productId, transactionType).banking.form;

  const serverTransactionFlow = async () => {
    return await getTransactionFlow({ bankId: productId, transactionType });
  };

  console.log({ infoTransaction });
  

  // Prepare Data

  const { dataRender } = usePreviewLabel({
    dataMeta: infoTransaction.dataMeta,
    productId,
    transactionType,
  });

  console.log({ dataRender });
  

  // Event Handlers

  const handleOnSubmit = async (data: any) => {

    setLoaderBackdrop(true, {
      title: MESSAGES.dashboard.banking.stepper.payment.loader.title,
      description: MESSAGES.dashboard.banking.stepper.payment.loader.description,
    });
    

    const {
      consultTransaction: { isConsulTransaction, endpoint },
    } = await serverTransactionFlow();

    console.log({
      data,
      isConsulTransaction,
      endpoint,
      productId,
      transactionType,
    });

    setTimeout(() => {
      setLoaderBackdrop(false);
    }, 2000);
    router.push(nextStep);
    

  };

  return (
    <ContainerUI className="flex flex-col gap-10 h-full">
      <TypographyUI
        color="textPrimary"
        variant="h6"
        component="h1"
        className="!mx-auto !font-bold text-center"
      >
        {MESSAGES.dashboard.banking.stepper.payment.confirm}
      </TypographyUI>

      <TransactionConfirmBanking
        dataConfirm={dataRender}
        productId={productId}
        transactionType={transactionType}
        onSubmit={handleOnSubmit}
        onBack={() => router.push(previousStep)}
        disabled={loadingBackdrop.isLoading}
        messageAlert={MESSAGES.dashboard.banking.alert.warningPayment}
      />
    </ContainerUI>
  );
};
