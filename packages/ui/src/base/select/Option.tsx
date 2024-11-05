import { Option as BaseOption, optionClasses, type OptionProps } from "@mui/base/Option";
import styled, { type  StyledComponent } from "@emotion/styled";

interface OptionUIProps  extends OptionProps<unknown> {}

const blue = {
  100: "#DAECFF",
  200: "#99CCF3",
  400: "#3399FF",
  500: "#007FFF",
  600: "#0072E5",
  700: "#0059B2",
  900: "#003A75",
};

const grey = {
  50: "#F3F6F9",
  100: "#E5EAF2",
  200: "#DAE2ED",
  300: "#C7D0DD",
  400: "#B0B8C4",
  500: "#9DA8B7",
  600: "#6B7A90",
  700: "#434D5B",
  800: "#303740",
  900: "#1C2025",
};

const Wrapper = styled(BaseOption)<OptionUIProps>`
  list-style: none;
  padding: 8px;
  border-radius: 8px;
  cursor: default;

  &:last-of-type {
    border-bottom: none;
  }

  &.${optionClasses.selected} {
    background-color: ${blue[100]};
    color: ${blue[900]};
  }

  &.${optionClasses.highlighted} {
    background-color: ${grey[100]};
    color: ${grey[900]};
  }

  &:focus-visible {
    outline: 3px solid ${blue[200]};
  }

  &.${optionClasses.highlighted}.${optionClasses.selected} {
    background-color: ${blue[100]};
    color: ${blue[900]};
  }

  &.${optionClasses.disabled} {
    color: ${grey[400]};
  }

  &:hover:not(.${optionClasses.disabled}) {
    background-color: ${grey[100]};
    color: ${grey[900]};
  }
`;

export const OptionUI: StyledComponent<OptionUIProps> = styled(Wrapper)<OptionUIProps>();
export default OptionUI;
