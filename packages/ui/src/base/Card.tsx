import styled from "@emotion/styled";
import type { StyledComponent } from "@emotion/styled";
import type { CSSObject } from "@emotion/styled";
import Card from "@mui/material/Card";
import type { CardProps } from "@mui/material/Card";

type Rounded = "none" | "small" | "medium" | "large";

export interface CardUIProps extends CardProps {
  rounded?: Rounded;
}

const baseStyles: CSSObject = {
  backgroundColor: "white",
  boxShadow: "0px 0px 24px 0px rgba(155, 155, 155, 0.40)",
};

const Wrapper = styled(Card)<CardUIProps>`
  ${baseStyles}
`;

export const CardUI: StyledComponent<CardUIProps> = styled(
  Wrapper
)<CardUIProps>(({ rounded = "medium" }) => {
  const getRounded = (rounded: Rounded) => {
    switch (rounded) {
      case "none":
        return "0";
      case "small":
        return "10px";
      case "medium":
        return "16px";
      case "large":
        return "24px";
    }
  };

  return {
    ...baseStyles,
    borderRadius: getRounded(rounded),
  };
});

export default CardUI;
