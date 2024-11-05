"use client";

import { ButtonUI } from "@repo/ui";
import { DialogUI } from "@repo/ui/feedback";

import { useRouter } from "next/navigation";

// RESOURCES

import { useBankingStore } from "@/features/banking/store/bankingStore";
import type { BankProduct, TransactionType } from "@/features/banking/models/types/banking";
import { bankProducts } from "@/features/banking/banking.config";
import { useEffect, useState } from "react";
import { dashboardRoutes } from "@/entry-point/config/routes.config";

export const ProductSelectorPage = () => {

  const router = useRouter();
  const products = bankProducts;
  const { setTransactionType, setSelectedProduct, resetTransaction } = useBankingStore();

  const [id, setId] = useState<string | null>(null);


  useEffect(() => {
    resetTransaction();
  }, [resetTransaction]);

  const handleSelectProduct = (product: BankProduct) => {
    setId(product.id);
  };

  const handleSelectTransactionType = (
    product: BankProduct,
    transactionType: TransactionType
  ) => {
    setTransactionType(transactionType);
    setSelectedProduct(product);
    router.push(dashboardRoutes(product.id, transactionType).banking.form);
  };

  return (
    <article className="flex flex-col gap-4 max-w-xl mx-auto">
      {products.map((product) => (
        <div key={product.id}>
          <ButtonUI onClick={() => handleSelectProduct(product)}>
            {product.name}
          </ButtonUI>

          <DialogUI 
            open={id === product.id}
            onClose={() => setId(null)}
            >
            <div className="flex flex-col gap-8 p-9 bg-white rounded-lg">
              {product.transactionTypes.map((transactionType) => (
                <ButtonUI
                  key={transactionType}
                  onClick={() =>
                    handleSelectTransactionType(product, transactionType)
                  }
                >
                  {transactionType}
                </ButtonUI>
              ))}

            </div>
          </DialogUI>
        </div>
      ))}
    </article>
  );
};
