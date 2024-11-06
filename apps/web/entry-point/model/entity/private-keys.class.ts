export type PrivateKeys = {
  crypto_iv : string
  crypto_key : string
  crypto_iv_256 : string
  crypto_key_256 : string
  jwe_key : string
}

export const initPrivateKeys = (): PrivateKeys => ({
  crypto_iv: '',
  crypto_key: '',
  crypto_iv_256: '',
  crypto_key_256: '',
  jwe_key: ''
})
