import { TransactionType, type BankProduct } from '@/features/banking/models/types/banking';
import { BankId } from '@/features/banking/models/types/banking';

export const getLabelTransactionType = (transactionType: TransactionType) => {
  switch (transactionType) {
    case 'deposit':
      return 'Deposito';
    case 'withdrawal':
      return 'Retiro';
    case 'payment':
      return 'Pago de productos propios';
    default:
      return '';
  }
}

export const bankProducts: BankProduct[] = [
  {
    id: BankId.ITAU,
    name: 'Banco Itaú',
    type: 'bank',
    logo: '/logos/itau.svg',
    transactionTypes: [TransactionType.DEPOSIT, TransactionType.WITHDRAWAL, TransactionType.PAYMENT]
  },
  {
    id: BankId.FUNDACION_MUJER,
    name: 'Fundación de la Mujer',
    type: 'bank',
    logo: '/logos/fundacion-delamujer.svg',
    transactionTypes: [TransactionType.PAYMENT]
  },
  {
    id: BankId.CAJA_SOCIAL,
    name: 'Banco Caja Social',
    type: 'bank',
    logo: '/logos/caja-social.svg',
    transactionTypes: [TransactionType.DEPOSIT, TransactionType.WITHDRAWAL, TransactionType.PAYMENT]
  },
  {
    id: BankId.COLPATRIA,
    name: 'Scotiabank',
    type: 'bank',
    logo: '/logos/scotiabank.svg',
    transactionTypes: [TransactionType.DEPOSIT, TransactionType.WITHDRAWAL, TransactionType.PAYMENT]
  },

  {
    id: BankId.DAVIVIENDA,
    name: 'Banco Davivienda',
    type: 'wallet',
    logo: '/logos/daviplata.svg',
    transactionTypes: [TransactionType.DEPOSIT, TransactionType.WITHDRAWAL, TransactionType.PAYMENT]
  },

  // Billeteras digitales

  {
    id: BankId.DAVIPLATA,
    name: 'Daviplata',
    type: 'wallet',
    logo: '/logos/daviplata.svg',
    transactionTypes: [TransactionType.DEPOSIT, TransactionType.WITHDRAWAL, TransactionType.PAYMENT]
  },
  {
    id: BankId.DALE,
    name: 'Dale',
    type: 'wallet',
    logo: '/logos/dale.svg',
    transactionTypes: [TransactionType.DEPOSIT, TransactionType.WITHDRAWAL, TransactionType.PAYMENT]
  },
];