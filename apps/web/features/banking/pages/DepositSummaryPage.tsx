"use client";

import MESSAGES from "@/entry-point/config/messages.json";
import { useBankingStore } from "@/features/banking/store/bankingStore";
import { notFound } from "next/navigation";
import { usePreviewLabel } from "@/features/banking/hooks/usePreviewLabel";

import { TransactionSummary } from "../components/TransactionSummary";

export const DepositSummaryPage = () => {
  const { transactionType, selectedProduct, infoTransaction } =
    useBankingStore();

  const productId = selectedProduct?.id;

  if (!transactionType || !productId) {
    notFound();
  }

  // Prepare Data

  const { dataRender } = usePreviewLabel({
    dataMeta: infoTransaction.dataMeta,
    productId,
    transactionType,
  });

  const handlePrint = () => {};

  const handleDownload = () => {};

  return (
    <TransactionSummary
      title={MESSAGES.dashboard.banking.alert.successDeposit}
      subtitle={MESSAGES.dashboard.banking.stepper.deposit.summary}
      dataRender={dataRender}
      handlePrint={handlePrint}
      handleDownload={handleDownload}
      actionTextFirst={MESSAGES.dashboard.banking.stepper.deposit.newDeposit}
    />
  );
};
