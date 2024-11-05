import Style from "@emotion/styled";
import { Alert, type AlertProps } from "@mui/material";
import { forwardRef } from "react";

interface AlertUIProps extends AlertProps {}

const Wapper = Style(Alert)``;

export const AlertUI = forwardRef<HTMLDivElement, AlertUIProps>(
  ({ ...props }, ref) => {
    return <Wapper {...props} ref={ref} />;
  }
);

export default AlertUI;