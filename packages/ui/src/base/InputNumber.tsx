import { forwardRef } from 'react';
import InputUI, { type InputPropsUI } from "./Input";

export interface InputNumberProps extends InputPropsUI {
  isCurrency?: boolean;
}

export const InputNumber = forwardRef<HTMLInputElement, InputNumberProps>((props, ref) => {

  const { isCurrency, onChange } = props;

  const handleNumericInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    if (/^\d*\.?\d*$/.test(value)) {

      if (isCurrency) {
        const number = parseFloat(value);
        const currency = new Intl.NumberFormat('es-ES', {
          style: 'currency',
          currency: 'EUR',
        }).format(number);
        event.target.value = currency;
      }

      onChange?.(event);
    }
    


  };

  return (
    <InputUI type="text" ref={ref} {...props} onChange={handleNumericInput} />
  );
});