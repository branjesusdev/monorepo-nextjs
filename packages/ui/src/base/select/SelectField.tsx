import styled from "@emotion/styled";
import React, { forwardRef } from "react";
import LabelUI from "../Label";
import { SelectUI } from "./Select";
import OptionUI from "./Option";
import { HelperTextUI } from "../HelperText";

export interface SelectFieldPropsUI
  extends React.ComponentProps<typeof SelectUI> {
  label?: string;
  message?: string;
  isError?: boolean;
  options: { label: string; value: string; disabled?: boolean }[];
}

const SelectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  .select-container {
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
  }
`;

export const SelectUIWrapper = forwardRef<
  HTMLButtonElement,
  SelectFieldPropsUI
>(({ label, message, isError, ...props }, ref) => {
  return (
    <SelectWrapper>
      {label && <LabelUI>{label}</LabelUI>}
      <div className="select-container">
        <SelectUI  {...props} ref={ref}>
          {props.options.map((option) => (
            <OptionUI key={option.value} value={option.value}>
              {option.label}
            </OptionUI>
          ))}
        </SelectUI>
      </div>

      {((message && props.variant === "error") || isError) && (
        <HelperTextUI variant="error" message={message ?? ""} />
      )}
      {message && props.variant !== "error" && !isError && (
        <HelperTextUI message={message} />
      )}
    </SelectWrapper>
  );
});

export default SelectUIWrapper;
