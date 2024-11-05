import styled from "@emotion/styled";
import type { StyledComponent } from '@emotion/styled';
import type { CSSObject } from "@emotion/styled";
import Button from "@mui/material/Button";
import type { ButtonProps } from "@mui/material/Button";


type Rounded = "none" | "small" | "medium" | "large";

export interface ButtonUIProps extends ButtonProps {
  state?: "normal" | "disabled" | "loading";
  rounded?: Rounded;
}

export const ButtonUI: StyledComponent<ButtonUIProps>  = styled(Button)<ButtonUIProps>(({
  variant = "contained",
  state = "normal",
  color = "primary",
  rounded = "large",
  size = "medium",
}) => {

  const getColor = (color: string) => {
    switch (color) {
      case "primary":
        return "var(--button-primary-color)";
      case "secondary":
        return "var(--button-secondary-color)";
      case "error":
        return "var(--button-error-color)";
      case "inherit":
        return "var(--button-inherit-color)";
      default:
        return "var(--button-primary-color)";
    }
  }

  const getRounded = (rounded: Rounded) => {
    switch (rounded) {
      case "none":
        return "0";
      case "small":
        return "4px";
      case "medium":
        return "10px";
      case "large":
        return "24px";
      default:
        return "8px";
    }
  }

  const getSize = (size: Partial<ButtonUIProps["size"]>) => {
    switch (size) {
      case "small":
        return "var(--button-small)";
      case "medium":
        return "var(--button-medium)";
      case "large":
        return "var(--button-large)";
      default:
        return "var(--button-medium)";
    }
  }

  const baseStyles: CSSObject = {
    padding: "12px 16px",
    borderRadius: getRounded(rounded),
    fontWeight: "bold",
    border: "none",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    opacity: state === "disabled" ? 0.5 : 1,
    fontSize: getSize(size),
    fontFamily: "var(--font-family)",
    // backgroundColor: getColor(color),
  };

  const variants: Record<string, CSSObject> = {
    contained: {
      backgroundColor:
        state === "disabled"
          ? "var(--button-filled-disabled)"
          : state === "loading"
            ? "var(--button-filled-loading)"
            : "var(--button-filled-bg)",
      color: "var(--button-filled-color)",
      "&:hover": { backgroundColor: "var(--button-filled-hover)" },
      "&:pressed": { backgroundColor: "var(--button-filled-pressed)" },
    },
    outlined: {
      backgroundColor: state === "disabled" ? "var(--button-outlined-disabled-bg)" : "var(--button-outlined-bg)",
      opacity: state === "disabled" ? 0.5 : 1,
      color: state === "disabled" ? "var(--button-outlined-disabled-color)" : "var(--button-outlined-color)",
      border: `1.5px solid ${state === "disabled" ? "var(--button-outlined-disabled-color)" : "var(--button-outlined-color)"}`,
      "&:hover": { backgroundColor: "var(--button-outlined-hover)" },
      "&:pressed": { backgroundColor: "var(--button-outlined-pressed)" },
      "&:disabled": { borderColor: "var(--button-outlined-disabled-bg)", color: "var(--button-outlined-disabled-color)" },
    },
    text: {
      backgroundColor: "var(--button-text-bg)",
      color: state === "disabled" ? "var(--button-text-disabled-color)" : "var(--button-text-color)",
      border: "none",
      textDecoration: "underline",
      "&:hover": { backgroundColor: "var(--button-text-hover)", textDecoration: "underline" },
      "&:pressed": { backgroundColor: "var(--button-text-pressed)" },
      "&:disabled": { color: "var(--button-text-disabled-color)" },
    },
  };

  return { ...baseStyles, ...variants[variant] };
});
