import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import type { BackdropProps } from "@mui/material/Backdrop";
import Style, { type CSSObject } from "@emotion/styled";
import { forwardRef } from "react";

interface BackdropUIProps extends BackdropProps {
  isLoading?: boolean;
  backdropColor?: "primary" | "secondary" | "white";
}

const baseStyle: CSSObject = {
  backgroundColor: "rgba(255, 255, 255, 0.70)",
  backdropFilter: "blur(2px)",
};

const Wapper = Style(Backdrop)`
    ${baseStyle}
`;

export const BackdropUI = forwardRef<HTMLDivElement, BackdropUIProps>(
  ({ ...props }, ref) => {
    const { isLoading, children, ...otherProps } = props;

    return (
      <Wapper ref={ref} {...otherProps}>
        {isLoading && <CircularProgress color="inherit" />}
        {children}
      </Wapper>
    );
  }
);

export default BackdropUI;
