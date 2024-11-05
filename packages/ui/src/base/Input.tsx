import Style, { type CSSObject } from "@emotion/styled";
import { forwardRef } from "react";
import InputMask from "react-input-mask";

export interface InputPropsUI
  extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: "primary" | "error";
  state?: "normal" | "disabled";
  mask?: string;
}

const baseStyles: CSSObject = {
  fontSize: "18px",
  fontWeight: 400,
  padding: "8px 12px",
  borderRadius: "8px",
  border: "2px solid var(--input-default)",
  outline: "none",
  boxShadow: "0px 2px 4px rgba(0,0,0, 0.05)",
  width: "100%",
  transition: "border-color 0.2s, background-color 0.2s",
  backgroundColor: "var(--input-bg)",
  color: "var(--input-text)",
  minHeight: "48px",
  lineHeight: "28px",
  textShadow: "none",
  ":-webkit-autofill": {
    color: "var(--input-text)",
    backgroundColor: "var(--input-bg)",
  },
  "&:hover": {
    borderColor: "var(--input-hover)",
  },
};

const variants = (state: string): CSSObject => {
  return {
    primary: {
      borderColor:
        state === "disabled"
          ? "var(--input-disabled-border)"
          : "var(--input-default)",
      "&:focus": {
        boxShadow: "0px 0px 2px var(--input-shadow-success)",
        outline: "none",
        borderColor: "var(--input-focus)",
      },
      "&:disabled": {
        backgroundColor: "var(--input-disabled-bg)",
        borderColor: "var(--input-disabled-borde)",
        color: "var(--input-disabled-color)",
      },
    },
    error: {
      borderColor: "var(--input-error)",
      "&:focus": {
        boxShadow: "0px 0px 2px var(--input-shadow-error)",
        outline: "none",
        borderColor: "var(--input-error)",
      },
    },
  };
};

const InputWrapper = Style.input<InputPropsUI>`
  ${baseStyles}
  ${(props) => variants(props.state || "normal")[props.variant || "primary"]}
`;

export const InputUI = forwardRef<HTMLInputElement, InputPropsUI>(
  ({ mask, ...props }, ref) => {
    return mask ? (
      <InputMask mask={mask} {...props} maskChar={null} inputRef={ref} />
    ) : (
      <InputWrapper ref={ref} {...props} />
    ); 
  }
);

export default InputUI;
