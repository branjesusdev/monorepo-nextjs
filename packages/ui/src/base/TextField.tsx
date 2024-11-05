import styled from "@emotion/styled";
import type { InputPropsUI } from "./Input";
import { InputUI } from "./Input";
import { forwardRef } from "react";
import { LabelUI } from "./Label";
import { HelperTextUI } from "./HelperText";

export interface InputWrapperProps extends InputPropsUI {
  label?: string;
  message?: string;
  startAdornment?: React.ReactNode; // Para el símbolo o ícono
  isError?: boolean;
}

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  .input-container {
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;

    &.input-container-adornment {
      input {
        padding-left: 2em !important;
      }
    }
  }

  .adornment {
    position: absolute;
    left: 12px;
    color: var(---input-adornment-color);
    font-size: 18px;
  }

`;

export const InputUIWrapper = forwardRef<HTMLInputElement, InputWrapperProps>(
  ({ label, message, startAdornment, ...props }, ref) => {
    return (

      <InputWrapper>
        {label && <LabelUI>{label}</LabelUI>}
        <div className={"input-container " + (startAdornment ? " input-container-adornment " : "")}>
          {startAdornment && (
            <span className="adornment">{startAdornment}</span>
          )}

          {/* Validar si es number */}

          {
            props.type === "number" ? (
              <InputUI
                {...props}
                ref={ref}
                variant={
                  props.variant === "error" || props.isError ? "error" : "primary"
                }
                style={{ paddingLeft: startAdornment ? "32px" : "12px" }}
                onChange={(e) => {
                  const { value } = e.target;
                  if (/^\d*\.?\d*$/.test(value)) {
                    props.onChange?.(e);
                  }
                }}
              />
            ) : (
              <InputUI
                {...props}
                ref={ref}
                variant={
                  props.variant === "error" || props.isError ? "error" : "primary"
                }
                style={{ paddingLeft: startAdornment ? "32px" : "12px" }}
              />
            )
          }
        </div>

        {((message && props.variant === "error") || props.isError) && (
          <HelperTextUI variant="error" message={message ?? ""} />
        )}
        {message && props.variant !== "error" && !props.isError && (
          <HelperTextUI message={message} />
        )}
      </InputWrapper>
    );
  }
);
