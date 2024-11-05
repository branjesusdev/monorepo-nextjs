'use server';


import type { KeyLabel } from '@/entry-point/model/entity';
import type { BankId, ExcludeTransactionType, TransactionType } from '@/features/banking/models/types/banking';

type FlowProduct = {
    [key in ExcludeTransactionType]: {
        consultTransaction: {
            isConsulTransaction?: boolean;
            endpoint?: string;
        },
        confirmTransaction: {
            isOTP?: boolean;
            typeOTP?: 'string' | 'number';
            keysVisible?: KeyLabel[]
        }
    }
}

const transactionFlow: Record<BankId, FlowProduct> = {

    //#region ITAU

    ITAU: {
        deposit : {
            consultTransaction: {
                isConsulTransaction: true,
                endpoint: '/banking/itau/deposit/consult',
            },
            confirmTransaction: {
                isOTP: true,
                typeOTP: 'number',
                keysVisible : [
                    { key: 'typeAccount' },
                    { key: 'accountNumber' },
                    { key: 'accountHolderName', labelDefault: 'Nombre del titular' },
                    { key: 'amount' },
                ]
            }
        },
        withdrawal: {
            consultTransaction: {
                isConsulTransaction: true,
                endpoint: '/banking/itau/withdrawal/consult',
            },
            confirmTransaction: {
                isOTP: true,
                typeOTP: 'number',
                keysVisible : [
                    { key: 'accountNumber' },
                    { key: 'accountHolderName', labelDefault: 'Nombre del titular' },
                    { key: 'amount' },
                ]
            }
        },
        payment: {
            consultTransaction: {
                isConsulTransaction: true,
                endpoint: '/banking/itau/payment/consult',
            },
            confirmTransaction: {
                keysVisible : [
                    { key: 'obligationNumber' },
                    { key: 'accountHolderName', labelDefault: 'Nombre del titular' },
                    { key: 'transactionAmount', labelDefault: 'Valor a pagar' },
                ]
            }
        },
    },

    //#region CAJA_SOCIAL

    CAJA_SOCIAL: {
        deposit : {
            consultTransaction: {
                isConsulTransaction: true,
                endpoint: '/banking/caja-social/deposit/consult',
            },
            confirmTransaction: {
                isOTP: true,
                typeOTP: 'number',
            }
        },
        withdrawal: {
            consultTransaction: {},
            confirmTransaction: {}
        },
        payment: {
            consultTransaction: {},
            confirmTransaction: {}
        },
    },

    //#region COLPATRIA

    COLPATRIA: {
        deposit : {
            consultTransaction: {
                isConsulTransaction: true,
                endpoint: '/banking/colpatria/deposit/consult',
            },
            confirmTransaction: {
                isOTP: true,
                typeOTP: 'number',
            }
        },
        withdrawal: {
            consultTransaction: {},
            confirmTransaction: {}
        },
        payment: {
            consultTransaction: {},
            confirmTransaction: {}
        },
    },

    //#region DAVIVIENDA

    DAVIVIENDA: {
        deposit : {
            consultTransaction: {
                isConsulTransaction: true,
                endpoint: '/banking/davivienda/deposit/consult',
            },
            confirmTransaction: {
                isOTP: true,
                typeOTP: 'number',
            }
        },
        withdrawal: {
            consultTransaction: {},
            confirmTransaction: {}
        },
        payment: {
            consultTransaction: {},
            confirmTransaction: {}
        },
    },

    //#region FUNDACION_MUJER

    FUNDACION_MUJER: {
        deposit : {
            consultTransaction: {},
            confirmTransaction: {}
        },
        withdrawal: {
            consultTransaction: {},
            confirmTransaction: {}
        },
        payment: {
            consultTransaction: {},
            confirmTransaction: {
                keysVisible : [
                    { key: 'obligationNumber' },
                    { key: 'documentNumber'},
                    { key: 'transactionAmount', labelDefault: 'Valor a pagar' },
                ]
            }
        },
    },

    //#region DAVIPLATA

    DAVIPLATA: {
        deposit : {
            consultTransaction: {
                isConsulTransaction: true,
                endpoint: '/banking/daviplata/deposit/consult',
            },
            confirmTransaction: {
                isOTP: true,
                typeOTP: 'number',
            }
        },
        withdrawal: {
            consultTransaction: {},
            confirmTransaction: {}
        },
        payment: {
            consultTransaction: {},
            confirmTransaction: {}
        },
    },

    //#region DALE

    DALE: {
        deposit : {
            consultTransaction: {
                isConsulTransaction: true,
                endpoint: '/banking/dale/deposit/consult',
            },
            confirmTransaction: {
                isOTP: true,
                typeOTP: 'number',
            }
        },
        withdrawal: {
            consultTransaction: {},
            confirmTransaction: {}
        },
        payment: {
            consultTransaction: {},
            confirmTransaction: {}
        },
    }
}

export const  getTransactionFlow = async ({ bankId, transactionType }: { bankId: BankId, transactionType: TransactionType }) => {
    return transactionFlow[bankId][transactionType as ExcludeTransactionType] ?? null
}