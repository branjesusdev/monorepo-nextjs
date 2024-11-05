"use client";

import { notFound, useRouter } from "next/navigation";

import { useBankingStore } from "@/features/banking/store/bankingStore";
import { TransactionFormBanking } from "@/features/banking/components/TransactionForm";
import { ContainerUI } from "@repo/ui/layout";
import { TypographyUI } from "@repo/ui";
import MESSAGES from "@/entry-point/config/messages.json";
import { getTransactionFlow } from "@/features/banking/config/transaction-flow";
import { FormStep } from "@/features/banking/models/types/banking";
import { useState } from "react";
import { NotFoundProduct } from "../components/NotFoundProduct";
import { dashboardRoutes } from "@/entry-point/config/routes.config";

export const WithDrawalFormPage = () => {
  const router = useRouter();
  const {
    transactionType,
    selectedProduct,
    setCurrentStep,
    setInfoTransaction,
    infoTransaction,
    setLoaderBackdrop,
  } = useBankingStore();
  const [notFoundProduct, setNotFoundProduct] = useState(false);

  const productId = selectedProduct?.id;

  if (!transactionType || !productId) {
    notFound();
  }

  const serverTransactionFlow = async () => {
    return await getTransactionFlow({ bankId: productId, transactionType });
  };

  const handleOnSubmit = async (dataMeta: any, formData: any) => {
    setLoaderBackdrop(true);

    const {
      consultTransaction: { isConsulTransaction, endpoint },
    } = await serverTransactionFlow();

    setCurrentStep(FormStep.CONFIRM);
    setInfoTransaction({ dataForm: formData, dataMeta });
    router.push(dashboardRoutes(productId, transactionType).banking.confirm);

    setTimeout(() => {
      setLoaderBackdrop(false);
    }, 2000);
  };

  if (notFoundProduct) {
    return <NotFoundProduct retry={() => setNotFoundProduct(false)} />;
  }

  return (
    <ContainerUI className="flex flex-col gap-10 h-full justify-center">
      <TypographyUI
        color="textPrimary"
        variant="h6"
        component="h1"
        className="!mx-auto !font-bold text-center"
      >
        {MESSAGES.dashboard.banking.stepper.withdrawl.form}
      </TypographyUI>

      <TransactionFormBanking
        defaultValues={infoTransaction.dataForm}
        productId={productId}
        transactionType={transactionType}
        onSubmit={handleOnSubmit}
      />
    </ContainerUI>
  );
};
