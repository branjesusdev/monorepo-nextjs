'use client';

import { useBankingStore } from '@/features/banking/store/bankingStore';
import { redirect } from 'next/navigation';
import { dashboardRoutes } from '@/entry-point/config/routes.config';

export function TransactionFlowPage() {

    const { transactionType, selectedProduct } = useBankingStore();
    const productId = selectedProduct?.id;

    return redirect(dashboardRoutes(productId, transactionType).banking.form)

}