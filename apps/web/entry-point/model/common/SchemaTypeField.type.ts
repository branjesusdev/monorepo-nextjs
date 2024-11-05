type OptionType = {
    value: string;
    label: string;
    disabled?: boolean;
}

export type SchemaTypeField = {
    label ?: string;
    isRadio ?: boolean;
    options ?: OptionType[] | any[],
    isSelect ?: boolean;
    isCurrency ?: boolean;
    valueForm ?: string;
    defaultValue ?: string;
    dependsOn ?: string;
    visibleWhen ?: (value: any) => boolean;
    resetChange ?: boolean;
}