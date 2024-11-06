export class EnvironmentConfig {
    [key: string]: EnvironmentValues
}

export interface EnvironmentValues {
    api_manager_base_url: string
    api_base_url: string
    secret_key_token: string
    password_key_token: string
    password_key_AES: string
    secret_key_AES: string
}

export const initEnvironmentValues: EnvironmentValues = {
    api_base_url: '',
    api_manager_base_url: '',
    secret_key_token: '',
    password_key_token: '',
    password_key_AES: '',
    secret_key_AES: ''
}
