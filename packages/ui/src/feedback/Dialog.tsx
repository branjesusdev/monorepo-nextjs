import Dialog from "@mui/material/Dialog";
import type { DialogProps } from "@mui/material/Dialog";
import Style, { type CSSObject } from "@emotion/styled";
import { forwardRef } from "react";
import CircularProgress from "@mui/material/CircularProgress";

export interface DialogUIProps extends DialogProps {
  isLoading?: boolean;
  DialogColor?: "primary" | "secondary" | "white";
}

const baseStyle: CSSObject = {};

const Wapper = Style(Dialog)`
    ${baseStyle}
`;

export const DialogUI = forwardRef<HTMLDivElement, DialogUIProps>(
  ({ ...props }, ref) => {
    const { isLoading, ...otherProps } = props;

    return (
      <Wapper ref={ref} {...props}>
        {isLoading && <CircularProgress color="inherit" />}
        {otherProps.children}
      </Wapper>
    );
  }
);

export default DialogUI;
