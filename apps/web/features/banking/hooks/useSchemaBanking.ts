import { useMemo } from "react";
import { getSchemaBanking } from '@/features/banking/config/transaction-schema';
import type { TransactionType, BankId } from '@/features/banking/models/types/banking';


interface UseSchemaBankingProps {
    bankId: BankId;
    transactionType: TransactionType;
}

export const useSchemaBanking = ({ bankId, transactionType }: UseSchemaBankingProps) => {

    const schemaBanking = useMemo(() => getSchemaBanking({ bankId, transactionType }), [bankId, transactionType]);
    return {
        schemaBanking
    }
}
