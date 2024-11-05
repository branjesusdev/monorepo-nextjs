import { object, string, number } from 'yup'

import { DocumentType } from '@/features/banking/models/enum/document-type';
import { TypeAccount } from '@/entry-point/model/enum/type-account';
import type { TransactionType, BankId } from '@/features/banking/models/types/banking';
import type { SchemaTypeField } from '@/entry-point/model/common';
import { ProductType } from '@/entry-point/model/enum/product-type';

type SchemaType = {
    [key in TransactionType]: object;
}


//#region BANK ITAU

const schemaDepositItau = object({
    amount: number()
        .typeError('El monto debe ser un número')
        .min(1000, 'El deposito mínimo es de $1.000 COP')
        .max(500000, 'El deposito máximo es de $500.000 COP')
        .meta({
            label: 'Valor del depósito',
            isCurrency: true
        } as SchemaTypeField)
        .required('El monto es requerido'),
    typeAccount: string()
        .oneOf([TypeAccount.AHORROS, TypeAccount.CREDITO], 'El tipo de cuenta es requerido')
        .required('El tipo de cuenta es requerido')
        .meta({
            label: 'Tipo de cuenta',
            isRadio: true,
            options: [{
                value: TypeAccount.AHORROS,
                label: 'Ahorros',
            }, {
                value: TypeAccount.CREDITO,
                label: 'Crédito',
            }]
        } as SchemaTypeField),
    accountNumber: number()
        .typeError('El número de cuenta debe ser un número')
        .min(100000000, 'Verifica que tenga como mínimo 9 dígitos')
        .meta({
            label: 'Número de cuenta',
        } as SchemaTypeField)
        .required('El número de cuenta es requerido'),
});

const schemaWithdrawItau = object({
    amount: number()
        .typeError('El monto debe ser un número')
        .min(1000, 'El retiro mínimo es de $1.000 COP')
        .max(500000, 'El retiro máximo es de $500.000 COP')
        .required('El monto es requerido')
        .meta({
            label: 'Valor a retirar',
            isCurrency: true
        } as SchemaTypeField),
    accountNumber: number()
        .typeError('El número de documento debe ser un número')
        .min(1000000000, 'Verifica que tenga como mínimo 10 dígitos')
        .meta({
            label: 'Número de documento',
        } as SchemaTypeField)
        .required('El número de cuenta es requerido'),
});

const schemaPaymentItau = object({
    productType: string()
        .typeError('No se ha seleccionado un tipo de producto')
        .meta({
            label: 'Tipo de producto',
            isSelect: true,
            options: [
                {
                    label: 'Seleccione una opción',
                    value: '',
                },
                {
                    label: 'Tarjeta de crédito',
                    value: ProductType.TARJETA_CREDITO,
                },
                {
                    label: 'Crédito rotativo personas',
                    value: ProductType.OTATIVO_PERSONAS,
                },
                {
                    label: 'Crédito rotativo empresas',
                    value: ProductType.ROTATIVO_EMPRESAS,
                },
                {
                    label: 'Crédito ordinario',
                    value: ProductType.CREDITO_ORDINARIO,
                },
                {
                    label: 'Crédito Fomento',
                    value: ProductType.CREDITO_FOMENTO,
                }
            ],
            dependentFields: ['obligationNumber'],
            resetChange: true
        } as SchemaTypeField)
        .required('El tipo de producto es requerido'),


    obligationNumber: number()
        .typeError('El número de obligación debe ser un número')
        .min(10000, 'El número de obligación debe tener al menos 5 dígitos')
        // .when('productType', {
        //     is: ProductType.OTATIVO_PERSONAS ||
        //         ProductType.ROTATIVO_EMPRESAS ||
        //         ProductType.CREDITO_ORDINARIO ||
        //         ProductType.CREDITO_FOMENTO,
        //     then: (schema) => schema.required('El número de obligación es requerido'),
        //     otherwise: (schema) => schema.optional()
        // })
        // .when('productType', ([productType], schema) => {
        //     const validate = productType === ProductType.OTATIVO_PERSONAS ||
        //         productType === ProductType.ROTATIVO_EMPRESAS ||
        //         productType === ProductType.CREDITO_ORDINARIO ||
        //         productType === ProductType.CREDITO_FOMENTO
        //     return validate ? schema.required('El número de obligación es requerido') : schema
        // })
        .meta({
            label: 'Número de obligación',
            dependsOn: 'productType',
            visibleWhen: (productType: string) =>
                productType === ProductType.OTATIVO_PERSONAS ||
                productType === ProductType.ROTATIVO_EMPRESAS ||
                productType === ProductType.CREDITO_ORDINARIO ||
                productType === ProductType.CREDITO_FOMENTO
        } as SchemaTypeField),

    transactionAmount: number()
        .typeError('El monto de la transacción debe ser un número')
        .min(1000, 'El monto mínimo de la transacción es de $1.000 COP')
        .max(500000, 'El monto máximo de la transacción es de $500.000 COP')
        // .when('productType', ([productType], schema) => {
        //     const validate = productType === ProductType.ROTATIVO_EMPRESAS
        //     console.log('transactionAmount',{ validate });
            
        //     return validate ? schema.required('El monto de la transacción es requerido') : schema.notRequired()
        // })
        // .when('productType', {
        //     is: ProductType.ROTATIVO_EMPRESAS,
        //     then: (schema) => schema.required('El monto de la transacción es requerido'),
        //     otherwise: (schema) => schema.optional()
        // })
        .meta({
            label: 'Monto de la transacción',
            isCurrency: true,
            dependsOn: 'productType',
            visibleWhen: (productType: string) => productType === ProductType.TARJETA_CREDITO
        } as SchemaTypeField),

    documentNumber: number()
        .typeError('El número de documento debe ser un número')
        .min(1000000000, 'El número de documento debe tener al menos 10 dígitos')
        // .when('productType', ([productType], schema) => {
        //     const validate = productType === ProductType.TARJETA_CREDITO
        //     console.log('documentNumber',{ validate });
            
        //     return validate ? schema.required('El número de documento es requerido') : schema
        // })
        // .when('productType', {
        //     is: ProductType.TARJETA_CREDITO,
        //     then: (schema) => schema.required('El número de documento es requerido'),
        //     otherwise: (schema) => schema.optional()
        // })
        .meta({
            label: 'Número de documento',
            dependsOn: 'productType',
            visibleWhen: (productType: string) => productType === ProductType.TARJETA_CREDITO
        } as SchemaTypeField),

    firstDigitsCard: number()
        .typeError('Los primeros dígitos de la tarjeta deben ser un número')
        .min(100000, 'Los primeros dígitos de la tarjeta deben tener al menos 6 dígitos')
        .max(999999, 'Los primeros dígitos de la tarjeta deben tener como máximo 6 dígitos')
        // .when('productType', ([productType], schema) => {
        //     const validate = productType === ProductType.TARJETA_CREDITO
        //     return validate ? schema.required('Los primeros dígitos de la tarjeta son requeridos') : schema
        // })
        // .when('productType', {
        //     is: ProductType.TARJETA_CREDITO,
        //     then: (schema) => schema.required('Los primeros dígitos de la tarjeta son requeridos'),
        //     otherwise: (schema) => schema.optional()
        // })
        .meta({
            label: 'Primeros 6 dígitos de la tarjeta',
            dependsOn: 'productType',
            visibleWhen: (productType: string) => productType === ProductType.TARJETA_CREDITO
        } as SchemaTypeField),

    lastDigitsCard: number()
        .typeError('Los últimos dígitos de la tarjeta deben ser un número')
        .min(1000, 'Los últimos dígitos de la tarjeta deben tener al menos 4 dígitos')
        .max(9999, 'Los últimos dígitos de la tarjeta deben tener como máximo 4 dígitos')
        // .when('productType', ([productType], schema) => {
        //     const validate = productType === ProductType.TARJETA_CREDITO
        //     return validate ? schema.required('Los últimos dígitos de la tarjeta son requeridos') : schema
        // })
        // .when('productType', {
        //     is: ProductType.TARJETA_CREDITO,
        //     then: (schema) => schema.required('Los últimos dígitos de la tarjeta son requeridos'),
        //     otherwise: (schema) => schema.optional()
        // })
        .meta({
            label: 'Últimos 4 dígitos de la tarjeta',
            dependsOn: 'productType',
            visibleWhen: (productType: string) => productType === ProductType.TARJETA_CREDITO
        } as SchemaTypeField),

});

// #region BANK FUNDACION_MUJER

const schemaDepositFundacionMujer = object({
    
});

const schemaWithdrawFundacionMujer = object({
    
});

const schemaPaymentFundacionMujer = object({
    queryType: string()
        .typeError('No se ha seleccionado un tipo de consulta')
        .meta({
            label: 'Tipo de consulta',
            isSelect: true,
            options: [
                {
                    label: 'Seleccione una opción',
                    value: '',
                },
                {
                    label: 'Número de documento',
                    value: DocumentType.DOCUMENT_NUMBER
                },
                {
                    label: 'Número de obligación',
                    value: DocumentType.OBLIGATION_NUMBER
                }
            ],
            dependentFields: ['obligationNumber'],
            resetChange: true
        } as SchemaTypeField)
        .required('El tipo de consulta es requerido'),

    documentNumber : number()
        .typeError('El número de documento debe ser un número')
        .min(1000000000, 'El número de documento debe tener al menos 10 dígitos')
        .meta({
            label: 'Número de documento',
            dependsOn: 'queryType',
            visibleWhen: (queryType: string) => queryType === DocumentType.DOCUMENT_NUMBER
        } as SchemaTypeField),

    obligationNumber: number()
        .typeError('El número de obligación debe ser un número')
        .min(10000, 'El número de obligación debe tener al menos 5 dígitos')
        .meta({
            label: 'Número de obligación',
            dependsOn: 'queryType',
            visibleWhen: (queryType: string) => queryType === DocumentType.OBLIGATION_NUMBER
        } as SchemaTypeField),
});

// BANK CAJA_SOCIAL

const schemaDepositCajaSocial = object({
    amount: number().min(1000, 'El deposito mínimo es de $1.000 COP').max(500000, 'El deposito máximo es de $500.000 COP').required('El monto es requerido'),
    typeAccount: string().required('El tipo de cuenta es requerido'),
    accountNumber: number().min(100000000, 'Verifica que tenga como mínimo 9 dígitos').required('El número de cuenta es requerido'),
});

const schemaWithdrawCajaSocial = object({
    amount: number().min(1000, 'El retiro mínimo es de $1.000 COP').max(500000, 'El retiro máximo es de $500.000 COP').required('El monto es requerido'),
    typeAccount: string().required('El tipo de cuenta es requerido'),
    accountNumber: number().min(100000000, 'Verifica que tenga como mínimo 9 dígitos').required('El número de cuenta es requerido'),
});

const schemaPaymentCajaSocial = object({
    amount: number().min(1000, 'El pago mínimo es de $1.000 COP').max(500000, 'El pago máximo es de $500.000 COP').required('El monto es requerido'),
    typeAccount: string().required('El tipo de cuenta es requerido'),
    accountNumber: number().min(100000000, 'Verifica que tenga como mínimo 9 dígitos').required('El número de cuenta es requerido'),
    description: string().min(5, 'La descripción debe tener al menos 5 caracteres').required('La descripción es requerida'),
});

//#region BANK COLPATRIA

const schemaDepositColpatria = object({
    amount: number().min(1000, 'El deposito mínimo es de $1.000 COP').max(500000, 'El deposito máximo es de $500.000 COP').required('El monto es requerido'),
    typeAccount: string().required('El tipo de cuenta es requerido'),
    accountNumber: number().min(100000000, 'Verifica que tenga como mínimo 9 dígitos').required('El número de cuenta es requerido'),
});

const schemaWithdrawColpatria = object({
    amount: number().min(1000, 'El retiro mínimo es de $1.000 COP').max(500000, 'El retiro máximo es de $500.000 COP').required('El monto es requerido'),
    typeAccount: string().required('El tipo de cuenta es requerido'),
    accountNumber: number().min(100000000, 'Verifica que tenga como mínimo 9 dígitos').required('El número de cuenta es requerido'),
});

const schemaPaymentColpatria = object({
    amount: number().min(1000, 'El pago mínimo es de $1.000 COP').max(500000, 'El pago máximo es de $500.000 COP').required('El monto es requerido'),
    typeAccount: string().required('El tipo de cuenta es requerido'),
    accountNumber: number().min(100000000, 'Verifica que tenga como mínimo 9 dígitos').required('El número de cuenta es requerido'),
    description: string().min(5, 'La descripción debe tener al menos 5 caracteres').required('La descripción es requerida'),
});

//#region BANK DAVIVIENDA

const schemaDepositDavivienda = object({
    amount: number().min(1000, 'El deposito mínimo es de $1.000 COP').max(500000, 'El deposito máximo es de $500.000 COP').required('El monto es requerido'),
    typeAccount: string().required('El tipo de cuenta es requerido'),
    accountNumber: number().min(100000000, 'Verifica que tenga como mínimo 9 dígitos').required('El número de cuenta es requerido'),
});

const schemaWithdrawDavivienda = object({
    amount: number().min(1000, 'El retiro mínimo es de $1.000 COP').max(500000, 'El retiro máximo es de $500.000 COP').required('El monto es requerido'),
    typeAccount: string().required('El tipo de cuenta es requerido'),
    accountNumber: number().min(100000000, 'Verifica que tenga como mínimo 9 dígitos').required('El número de cuenta es requerido'),
});

const schemaPaymentDavivienda = object({
    amount: number().min(1000, 'El pago mínimo es de $1.000 COP').max(500000, 'El pago máximo es de $500.000 COP').required('El monto es requerido'),
    typeAccount: string().required('El tipo de cuenta es requerido'),
    accountNumber: number().min(100000000, 'Verifica que tenga como mínimo 9 dígitos').required('El número de cuenta es requerido'),
    description: string().min(5, 'La descripción debe tener al menos 5 caracteres').required('La descripción es requerida'),
});

//#region BANK DAVIPLATA

const schemaDepositDaviplata = object({
    amount: number().min(1000, 'El deposito mínimo es de $1.000 COP').max(500000, 'El deposito máximo es de $500.000 COP').required('El monto es requerido'),
    typeAccount: string().required('El tipo de cuenta es requerido'),
    accountNumber: number().min(100000000, 'Verifica que tenga como mínimo 9 dígitos').required('El número de cuenta es requerido'),
});

const schemaWithdrawDaviplata = object({
    amount: number().min(1000, 'El retiro mínimo es de $1.000 COP').max(500000, 'El retiro máximo es de $500.000 COP').required('El monto es requerido'),
    typeAccount: string().required('El tipo de cuenta es requerido'),
    accountNumber: number().min(100000000, 'Verifica que tenga como mínimo 9 dígitos').required('El número de cuenta es requerido'),
});

const schemaPaymentDaviplata = object({
    amount: number().min(1000, 'El pago mínimo es de $1.000 COP').max(500000, 'El pago máximo es de $500.000 COP').required('El monto es requerido'),
    typeAccount: string().required('El tipo de cuenta es requerido'),
    accountNumber: number().min(100000000, 'Verifica que tenga como mínimo 9 dígitos').required('El número de cuenta es requerido'),
    description: string().min(5, 'La descripción debe tener al menos 5 caracteres').required('La descripción es requerida'),
});

//#region BANK DALE

const schemaDepositDale = object({
    amount: number().min(1000, 'El deposito mínimo es de $1.000 COP').max(500000, 'El deposito máximo es de $500.000 COP').required('El monto es requerido'),
    typeAccount: string().required('El tipo de cuenta es requerido'),
    accountNumber: number().min(100000000, 'Verifica que tenga como mínimo 9 dígitos').required('El número de cuenta es requerido'),
});

const schemaWithdrawDale = object({
    amount: number().min(1000, 'El retiro mínimo es de $1.000 COP').max(500000, 'El retiro máximo es de $500.000 COP').required('El monto es requerido'),
    typeAccount: string().required('El tipo de cuenta es requerido'),
    accountNumber: number().min(100000000, 'Verifica que tenga como mínimo 9 dígitos').required('El número de cuenta es requerido'),
});

const schemaPaymentDale = object({
    amount: number().min(1000, 'El pago mínimo es de $1.000 COP').max(500000, 'El pago máximo es de $500.000 COP').required('El monto es requerido'),
    typeAccount: string().required('El tipo de cuenta es requerido'),
    accountNumber: number().min(100000000, 'Verifica que tenga como mínimo 9 dígitos').required('El número de cuenta es requerido'),
    description: string().min(5, 'La descripción debe tener al menos 5 caracteres').required('La descripción es requerida'),
});

//#region CODE TRANSACTION

const schemaCodeTransaction = object({
    verificationCode: number()
        .typeError('El código debe ser un número')
        .min(10000000, 'El código debe tener al menos 8 dígitos')
        .meta({
            label: '',
        })
        .required('El código es requerido'),
});

//#region BANKING SCHEMAS

const schemas: Record<BankId, SchemaType> = {
    ITAU: {
        deposit: schemaDepositItau,
        withdrawal: schemaWithdrawItau,
        payment: schemaPaymentItau,
        codeTransaction: schemaCodeTransaction,
    },
    FUNDACION_MUJER: {
        deposit: schemaDepositFundacionMujer,
        withdrawal: schemaWithdrawFundacionMujer,
        payment: schemaPaymentFundacionMujer,
        codeTransaction: schemaCodeTransaction,
    },
    CAJA_SOCIAL: {
        deposit: schemaDepositCajaSocial,
        withdrawal: schemaWithdrawCajaSocial,
        payment: schemaPaymentCajaSocial,
        codeTransaction: schemaCodeTransaction,
    },
    COLPATRIA: {
        deposit: schemaDepositColpatria,
        withdrawal: schemaWithdrawColpatria,
        payment: schemaPaymentColpatria,
        codeTransaction: schemaCodeTransaction,
    },
    DAVIVIENDA: {
        deposit: schemaDepositDavivienda,
        withdrawal: schemaWithdrawDavivienda,
        payment: schemaPaymentDavivienda,
        codeTransaction: schemaCodeTransaction,
    },
    DAVIPLATA: {
        deposit: schemaDepositDaviplata,
        withdrawal: schemaWithdrawDaviplata,
        payment: schemaPaymentDaviplata,
        codeTransaction: schemaCodeTransaction,
    },
    DALE: {
        deposit: schemaDepositDale,
        withdrawal: schemaWithdrawDale,
        payment: schemaPaymentDale,
        codeTransaction: schemaCodeTransaction,
    },
};



export const getSchemaBanking = ({ bankId, transactionType }: { bankId: BankId, transactionType: TransactionType }) => {
    return schemas[bankId]?.[transactionType] ?? null;
}