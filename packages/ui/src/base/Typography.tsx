import Style, { type CSSObject } from "@emotion/styled";
import Typography from "@mui/material/Typography";
import type { TypographyProps } from "@mui/material/Typography";
import { forwardRef } from "react";

export interface TypographyUIProps extends TypographyProps {
  color?: 'textPrimary' | 'textSecondary' | 'textError' | 'textSuccess' | 'textWarning' | 'textInfo' | 'textDisabled' | 'black' | 'white';
}

const colors = (): CSSObject => {
  return {
    textPrimary: {
      color: "var(--text-primary)",
    },
    textSecondary: {
      color: "var(--text-secondary)",
    },
    textError: {
      color: "var(--text-error)",
    },
    textSuccess: {
      color: "var(--text-success)",
    },
    textWarning: {
      color: "var(--text-warning)",
    },
    textInfo: {
      color: "var(--text-info)",
    },
    textDisabled: {
      color: "var(--text-disabled)",
    },
    black: {
      color: "black",
    },
    white: {
      color: "white",
    },
  }
}

const Wrapper = Style(Typography)<TypographyUIProps>`
  ${(props) => colors()[props.color || 'textPrimary']}
`;

export const TypographyUI = forwardRef<HTMLDivElement, TypographyUIProps>(
  (props, ref) => {
    return <Wrapper {...props} ref={ref} sx={{ fontFamily: 'var(--font-family)' }} />;
  }
);
