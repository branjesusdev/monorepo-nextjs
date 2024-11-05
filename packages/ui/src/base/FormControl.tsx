import Style, { type CSSObject } from "@emotion/styled";
import { forwardRef } from "react";

export interface FormControlPropsUI
  extends React.InputHTMLAttributes<HTMLFormElement> {
  variant?: "lg" | "md" | "sm" | "xs" | "full";
  state?: "normal" | "disabled";
}

const baseStyles: CSSObject = {};

const variants = (): CSSObject => {
  return {
    full: {
        width: "100%",
    },
    lg: {
        maxWidth: "80rem",
    },
    md: {
        maxWidth: "60rem",
    },
    sm: {
        maxWidth : "24rem",
    },
    xs: {
        maxWidth: "20rem",
    },
  };
};

const FormControlWrapper = Style.form<FormControlPropsUI>`
    ${baseStyles}
    ${(props) => variants()[props.variant || "full"]}
`;

export const FormControlUI = forwardRef<HTMLFormElement, FormControlPropsUI>(
  ({ ...props }, ref) => {
    return <FormControlWrapper ref={ref} {...props} />;
  }
);

export default FormControlUI;
