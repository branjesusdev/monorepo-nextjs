import styled from "@emotion/styled";
import { forwardRef } from "react";

interface HelperTextProps {
  message: string;
  variant?: "error" | "primary";
}

const Wrapper = styled.span`
  .message-input-wrapper {
    font-size: 12px;
    color: var(--input-message-color);
    margin-top: 3px;
    font-weight: 400;
  }

  .message-input-wrapper.error {
    color: var(--input-message-error);
  }
`;

export const HelperTextUI = forwardRef<HTMLSpanElement, HelperTextProps>(
  ({ message, variant, ...props }, ref) => {
    return (
      <Wrapper>
        <span
          className={`message-input-wrapper ${variant}`}
          ref={ref}
          {...props}
        >
          {message}
        </span>
      </Wrapper>
    );
  }
);
