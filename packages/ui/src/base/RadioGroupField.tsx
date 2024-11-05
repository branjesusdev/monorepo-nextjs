import styled from "@emotion/styled";
import { RadioGroupUI, type RadioGroupPropsUI } from "./RadioGroup";
import { forwardRef } from "react";
import { LabelUI } from "./Label";
import { HelperTextUI } from "./HelperText";

interface InputWrapperProps extends RadioGroupPropsUI {
  label?: string;
  message?: string;
}

const Wrapper = styled.div`
  .message-input-wrapper {
    font-size: 12px;
    color: var(--input-message-color);
    margin-top: 3px;
    font-weight: 400;
  }

  .message-input-wrapper.error {
    color: var(--input-message-error);
  }
`;

export const RadioGroupFieldUI = forwardRef<
  HTMLInputElement,
  InputWrapperProps
>(({ label, message, ...props }, ref) => {
  return (
    <Wrapper>
      <LabelUI>{label}</LabelUI>
      <RadioGroupUI {...props} ref={ref} />
      {message && <HelperTextUI message={message ?? ""} variant="error" />}
    </Wrapper>
  );
});

export default RadioGroupFieldUI;
