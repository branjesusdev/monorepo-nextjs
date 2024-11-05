import type { SchemaTypeField } from "@/entry-point/model/common";

export enum TransactionType {
  DEPOSIT = 'deposit',
  WITHDRAWAL = 'withdrawal',
  PAYMENT = 'payment',
  CODE_TRANSACTION = 'codeTransaction',
};

export type ExcludeTransactionType = Exclude<TransactionType, TransactionType.CODE_TRANSACTION>;

export enum BankId {
  ITAU = 'ITAU',
  FUNDACION_MUJER = 'FUNDACION_MUJER',
  CAJA_SOCIAL = 'CAJA_SOCIAL',
  COLPATRIA = 'COLPATRIA',
  DAVIVIENDA = 'DAVIVIENDA',
  DAVIPLATA = 'DAVIPLATA',
  DALE = 'DALE',
}

export type BankProduct = {
  id: BankId;
  name: string;
  type: 'bank' | 'wallet';
  logo: string;
  transactionTypes: TransactionType[];
};

export enum FormStep {
  DETAILS = 'Detalles',
  CONFIRM = 'Confirmar',
  FINISH = 'Finalizar',
}

export interface TransactionDetails {
  amount: number;
  documentType: string;
  documentNumber: string;
  phoneNumber: string;
  email?: string;
  description?: string;
  [key: string]: any;
}

export interface TransactionState {
  selectedProduct: BankProduct | null;
  transactionType: TransactionType | null;
  currentStep: FormStep;
  infoTransaction: {
    dataForm: any;
    dataMeta: StateFormMeta;
  },
  loadingBackdrop: {
    isLoading: boolean;
    message?: {
      title: string;
      description: string;
    }
  };
}

export type StateFormMeta = {
  [key: string]: SchemaTypeField
}