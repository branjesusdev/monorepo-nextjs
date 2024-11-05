import {
  Select as BaseSelect, selectClasses
} from "@mui/base/Select";
import type {
  SelectListboxSlotProps,
  SelectProps,
  SelectRootSlotProps,
} from "@mui/base/Select";
import { CssTransition } from "@mui/base/Transitions";
import { PopupContext } from "@mui/base/Unstable_Popup";
import styled, { type CSSObject } from "@emotion/styled";
import { IconChevronUpUI } from "../../icons/ChevronUp";
import IconChevronDownUI from "../../icons/ChevronDown";
import { forwardRef, useContext } from "react";

export type SelectPropsUI<TValue extends {}, Multiple extends boolean> = Omit<
  SelectProps<TValue, Multiple>,
  "getSerializedValue"
> & {
  variant?: "primary" | "error";
  state?: "normal" | "disabled";
};

export const SelectUI = forwardRef(function CustomSelect<
  TValue extends {},
  Multiple extends boolean,
>(
  props: SelectPropsUI<TValue, Multiple>,
  ref: React.ForwardedRef<HTMLButtonElement>
) {
  const { ...otherProps } = props;

  const slots = {
    root: StyledButton,
    listbox: AnimatedListbox,
    popup: Popup,
    ...props.slots,
  };

  return <BaseSelect {...otherProps} ref={ref} slots={slots} />;
});

const Button = forwardRef(function Button<
  TValue extends {},
  Multiple extends boolean,
>(
  props: SelectRootSlotProps<TValue, Multiple>,
  ref: React.ForwardedRef<HTMLButtonElement>
) {
  const { ownerState, ...other } = props;
  return (
    <button type="button" {...other} ref={ref}>
      {other.children}
      {ownerState.open ? (
        <IconChevronUpUI width={24} height={24} strokeColor="secondary" />
      ) : (
        <IconChevronDownUI width={24} height={24} strokeColor="secondary" />
      )}
    </button>
  );
});

const variants = (state: string): CSSObject => {
  return {
    primary: {
      borderColor:
        state === "disabled"
          ? "var(--select-disabled-border)"
          : "var(--select-default)",
      "&:focus": {
        boxShadow: "0px 0px 2px var(--select-shadow-success)",
        outline: "none",
        borderColor: "var(--select-focus)",
      },
      "&:disabled": {
        backgroundColor: "var(--select-disabled-bg)",
        borderColor: "var(--select-disabled-border)",
        color: "var(--select-disabled-color)",
      },
    },
    error: {
      borderColor: "var(--select-error)",
      "&:focus": {
        boxShadow: "0px 0px 2px var(--select-shadow-error)",
        outline: "none",
        borderColor: "var(--select-error)",
      },
    },
  };
};

const StyledButton = styled(Button, {
  shouldForwardProp: (prop) => prop !== "variant",
})<{ variant?: "primary" | "error"; state?: "normal" | "disabled" }>`
  font-family: var(--font-family);
  font-size: 18px;
  box-sizing: border-box;
  padding: 8px 12px;
  border-radius: 8px;
  text-align: left;
  line-height: 1.5;
  background: var(--select-bg);
  border: 2px solid var(--select-default);
  color: var(--select-text);
  position: relative;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 120ms;

  &:hover {
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  }

  &.${selectClasses.focusVisible} {
    outline: 0;
    border-color: var(--select-focus);
    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.5);
  }

  & > svg {
    font-size: 1rem;
    position: absolute;
    height: 100%;
    top: 0;
    right: 10px;
  }

  ${(props) => variants(props.state || "normal")[props.variant || "primary"]}
`;

const Listbox = styled("ul")(
  ({ theme }) => `
    font-family: var(--font-family);
    font-size: 1rem;
    box-sizing: border-box;
    padding: 8px;
    margin: 12px 0;
    min-width: 320px;
    border-radius: 12px;
    overflow: auto;
    outline: 0;
    background: var(--select-listbox-bg);
    border: 1px solid var(--select-listbox-border);
    color: var(--select-listbox-text);
    box-shadow: 0px 4px 20px rgba(0,0,0, 0.12);
    
    .closed & {
      opacity: 0;
      transform: scale(0.95, 0.8);
      transition: opacity 200ms ease-in, transform 200ms ease-in;
    }
    
    .open & {
      opacity: 1;
      transform: scale(1, 1);
      transition: opacity 100ms ease-out, transform 100ms cubic-bezier(0.43, 0.29, 0.37, 1.48);
    }
  
    .placement-top & {
      transform-origin: bottom;
    }
  
    .placement-bottom & {
      transform-origin: top;
    }
    `
);

const AnimatedListbox = forwardRef(function AnimatedListbox<
  Value extends {},
  Multiple extends boolean,
>(
  props: SelectListboxSlotProps<Value, Multiple>,
  ref: React.ForwardedRef<HTMLUListElement>
) {
  const { ownerState, ...other } = props;
  const popupContext = useContext(PopupContext);

  if (popupContext == null) {
    throw new Error(
      "The `AnimatedListbox` component cannot be rendered outside a `Popup` component"
    );
  }

  const verticalPlacement = popupContext.placement.split("-")[0];

  return (
    <CssTransition
      className={`placement-${verticalPlacement}`}
      enterClassName="open"
      exitClassName="closed"
    >
      <Listbox {...other} ref={ref} />
    </CssTransition>
  );
});

const Popup = styled("div")`
  z-index: 1;
`;
