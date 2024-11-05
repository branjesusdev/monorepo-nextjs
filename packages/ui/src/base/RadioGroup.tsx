import Style, {type StyledComponent, type CSSObject } from "@emotion/styled";
import { FormControlLabel } from "@mui/material";
import RadioGroup, { type RadioGroupProps } from "@mui/material/RadioGroup";
import { RadioUI } from "./Radio";
import { forwardRef } from "react";

export interface RadioGroupPropsUI extends RadioGroupProps {
  options: { label: string; value: string; disabled?: boolean }[];
}

const baseStyles: CSSObject = {};

export const Wrapper: StyledComponent<RadioGroupPropsUI> = Style(RadioGroup)<RadioGroupPropsUI>`
    ${baseStyles}

    .MuiFormControlLabel-label {
      color: var(--radio-text-group);
      transition: color 0.2s;
      font-size: 20px;
    }

    .Mui-checked + .MuiFormControlLabel-label {
      color: var(--radio-text-checked-group);
      fontWeight: bold;
    }
`;

export const RadioGroupUI = forwardRef<HTMLDivElement, RadioGroupPropsUI>(
  ({ options, value, onChange, ...props }, ref) => {
    return (
      <Wrapper ref={ref} value={value} onChange={onChange} {...props} options={options}>
        {options.map((option) => (
          <FormControlLabel
            key={option.value}
            value={option.value}
            control={<RadioUI />}
            label={option.label}
            disabled={option.disabled}
          />
        ))}
      </Wrapper>
    );
  }
);

export default RadioGroupUI;
