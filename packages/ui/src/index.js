"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  AlertUI: () => AlertUI,
  BackdropUI: () => BackdropUI,
  BoxUI: () => BoxUI,
  BreadcrumbsUI: () => BreadcrumbsUI,
  ButtonUI: () => ButtonUI,
  CardUI: () => CardUI,
  CodeUI: () => CodeUI,
  ContainerUI: () => ContainerUI,
  DialogUI: () => DialogUI,
  FormControlUI: () => FormControlUI,
  IconChevronLeftUI: () => IconChevronLeftUI,
  IconChevronUpUI: () => IconChevronUpUI,
  IconPrinterUI: () => IconPrinterUI,
  IconSaveUI: () => IconSaveUI,
  IconWarningCircleUI: () => IconWarningCircleUI,
  InputUI: () => InputUI,
  InputUIWrapper: () => InputUIWrapper,
  LabelUI: () => LabelUI,
  OptionUI: () => OptionUI,
  RadioGroupFieldUI: () => RadioGroupFieldUI,
  RadioGroupUI: () => RadioGroupUI,
  RadioUI: () => RadioUI,
  SelectUI: () => SelectUI,
  SelectUIWrapper: () => SelectUIWrapper,
  StepperRouteUI: () => StepperRouteUI,
  TableBodyUI: () => TableBodyUI,
  TableCellUI: () => TableCellUI,
  TableContainerUI: () => TableContainerUI,
  TableHeadUI: () => TableHeadUI,
  TableRowUI: () => TableRowUI,
  TableUI: () => TableUI,
  ThemeProvider: () => ThemeProvider_default,
  TypographyUI: () => TypographyUI,
  theme: () => theme_default
});
module.exports = __toCommonJS(src_exports);

// src/base/Input.tsx
var import_styled = __toESM(require("@emotion/styled"));
var import_react = require("react");
var import_react_input_mask = __toESM(require("react-input-mask"));
var import_jsx_runtime = require("react/jsx-runtime");
var baseStyles = {
  fontSize: "18px",
  fontWeight: 400,
  padding: "8px 12px",
  borderRadius: "8px",
  border: "2px solid var(--input-default)",
  outline: "none",
  boxShadow: "0px 2px 4px rgba(0,0,0, 0.05)",
  width: "100%",
  transition: "border-color 0.2s, background-color 0.2s",
  backgroundColor: "var(--input-bg)",
  color: "var(--input-text)",
  minHeight: "48px",
  lineHeight: "28px",
  textShadow: "none",
  ":-webkit-autofill": {
    color: "var(--input-text)",
    backgroundColor: "var(--input-bg)"
  },
  "&:hover": {
    borderColor: "var(--input-hover)"
  }
};
var variants = (state) => {
  return {
    primary: {
      borderColor: state === "disabled" ? "var(--input-disabled-border)" : "var(--input-default)",
      "&:focus": {
        boxShadow: "0px 0px 2px var(--input-shadow-success)",
        outline: "none",
        borderColor: "var(--input-focus)"
      },
      "&:disabled": {
        backgroundColor: "var(--input-disabled-bg)",
        borderColor: "var(--input-disabled-borde)",
        color: "var(--input-disabled-color)"
      }
    },
    error: {
      borderColor: "var(--input-error)",
      "&:focus": {
        boxShadow: "0px 0px 2px var(--input-shadow-error)",
        outline: "none",
        borderColor: "var(--input-error)"
      }
    }
  };
};
var InputWrapper = import_styled.default.input`
  ${baseStyles}
  ${(props) => variants(props.state || "normal")[props.variant || "primary"]}
`;
var InputUI = (0, import_react.forwardRef)(
  ({ mask, ...props }, ref) => {
    return mask ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react_input_mask.default, { mask, ...props, maskChar: null, inputRef: ref }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InputWrapper, { ref, ...props });
  }
);

// src/base/Button.tsx
var import_styled2 = __toESM(require("@emotion/styled"));
var import_Button = __toESM(require("@mui/material/Button"));
var ButtonUI = (0, import_styled2.default)(import_Button.default)(({
  variant = "contained",
  state = "normal",
  color = "primary",
  rounded = "large",
  size = "medium"
}) => {
  const getColor = (color2) => {
    switch (color2) {
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
  };
  const getRounded = (rounded2) => {
    switch (rounded2) {
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
  };
  const getSize = (size2) => {
    switch (size2) {
      case "small":
        return "var(--button-small)";
      case "medium":
        return "var(--button-medium)";
      case "large":
        return "var(--button-large)";
      default:
        return "var(--button-medium)";
    }
  };
  const baseStyles15 = {
    padding: "12px 16px",
    borderRadius: getRounded(rounded),
    fontWeight: "bold",
    border: "none",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    opacity: state === "disabled" ? 0.5 : 1,
    fontSize: getSize(size)
    // backgroundColor: getColor(color),
  };
  const variants4 = {
    contained: {
      backgroundColor: state === "disabled" ? "var(--button-filled-disabled)" : state === "loading" ? "var(--button-filled-loading)" : "var(--button-filled-bg)",
      color: "var(--button-filled-color)",
      "&:hover": { backgroundColor: "var(--button-filled-hover)" },
      "&:pressed": { backgroundColor: "var(--button-filled-pressed)" }
    },
    outlined: {
      backgroundColor: state === "disabled" ? "var(--button-outlined-disabled-bg)" : "var(--button-outlined-bg)",
      opacity: state === "disabled" ? 0.5 : 1,
      color: state === "disabled" ? "var(--button-outlined-disabled-color)" : "var(--button-outlined-color)",
      border: `1.5px solid ${state === "disabled" ? "var(--button-outlined-disabled-color)" : "var(--button-outlined-color)"}`,
      "&:hover": { backgroundColor: "var(--button-outlined-hover)" },
      "&:pressed": { backgroundColor: "var(--button-outlined-pressed)" },
      "&:disabled": { borderColor: "var(--button-outlined-disabled-bg)", color: "var(--button-outlined-disabled-color)" }
    },
    text: {
      backgroundColor: "var(--button-text-bg)",
      color: state === "disabled" ? "var(--button-text-disabled-color)" : "var(--button-text-color)",
      border: "none",
      textDecoration: "underline",
      "&:hover": { backgroundColor: "var(--button-text-hover)", textDecoration: "underline" },
      "&:pressed": { backgroundColor: "var(--button-text-pressed)" },
      "&:disabled": { color: "var(--button-text-disabled-color)" }
    }
  };
  return { ...baseStyles15, ...variants4[variant] };
});

// src/base/Card.tsx
var import_styled3 = __toESM(require("@emotion/styled"));
var import_Card = __toESM(require("@mui/material/Card"));
var baseStyles2 = {
  backgroundColor: "white",
  boxShadow: "0px 0px 24px 0px rgba(155, 155, 155, 0.40)"
};
var Wrapper = (0, import_styled3.default)(import_Card.default)`
  ${baseStyles2}
`;
var CardUI = (0, import_styled3.default)(
  Wrapper
)(({ rounded = "medium" }) => {
  const getRounded = (rounded2) => {
    switch (rounded2) {
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
    ...baseStyles2,
    borderRadius: getRounded(rounded)
  };
});

// src/base/Code.tsx
var import_jsx_runtime2 = require("react/jsx-runtime");
function CodeUI({
  children,
  className
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("code", { className, children });
}

// src/base/TextField.tsx
var import_styled6 = __toESM(require("@emotion/styled"));
var import_react3 = require("react");

// src/base/Label.tsx
var import_styled4 = __toESM(require("@emotion/styled"));
var Wrapper2 = import_styled4.default.label`
    font-size: 16px;
    font-weight: 400;
    color: var(--input-label-color);
    margin-bottom: 5px;
`;
var baseStyles3 = {};
var LabelUI = (0, import_styled4.default)(Wrapper2)(baseStyles3);
var Label_default = LabelUI;

// src/base/HelperText.tsx
var import_styled5 = __toESM(require("@emotion/styled"));
var import_react2 = require("react");
var import_jsx_runtime3 = require("react/jsx-runtime");
var Wrapper3 = import_styled5.default.span`
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
var HelperTextUI = (0, import_react2.forwardRef)(
  ({ message, variant, ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Wrapper3, { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
      "span",
      {
        className: `message-input-wrapper ${variant}`,
        ref,
        ...props,
        children: message
      }
    ) });
  }
);

// src/base/TextField.tsx
var import_jsx_runtime4 = require("react/jsx-runtime");
var InputWrapper2 = import_styled6.default.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  .input-container {
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;

    &.input-container-adornment {
      input {
        padding-left: 2em !important;
      }
    }
  }

  .adornment {
    position: absolute;
    left: 12px;
    color: var(---input-adornment-color);
    font-size: 18px;
  }

`;
var InputUIWrapper = (0, import_react3.forwardRef)(
  ({ label, message, startAdornment, ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(InputWrapper2, { children: [
      label && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(LabelUI, { children: label }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "input-container " + (startAdornment ? " input-container-adornment " : ""), children: [
        startAdornment && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: "adornment", children: startAdornment }),
        props.type === "number" ? /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
          InputUI,
          {
            ...props,
            ref,
            variant: props.variant === "error" || props.isError ? "error" : "primary",
            style: { paddingLeft: startAdornment ? "32px" : "12px" },
            onChange: (e) => {
              const { value } = e.target;
              if (/^\d*\.?\d*$/.test(value)) {
                props.onChange?.(e);
              }
            }
          }
        ) : /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
          InputUI,
          {
            ...props,
            ref,
            variant: props.variant === "error" || props.isError ? "error" : "primary",
            style: { paddingLeft: startAdornment ? "32px" : "12px" }
          }
        )
      ] }),
      (message && props.variant === "error" || props.isError) && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(HelperTextUI, { variant: "error", message: message ?? "" }),
      message && props.variant !== "error" && !props.isError && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(HelperTextUI, { message })
    ] });
  }
);

// src/base/FormControl.tsx
var import_styled7 = __toESM(require("@emotion/styled"));
var import_react4 = require("react");
var import_jsx_runtime5 = require("react/jsx-runtime");
var baseStyles4 = {};
var variants2 = () => {
  return {
    full: {
      width: "100%"
    },
    lg: {
      maxWidth: "80rem"
    },
    md: {
      maxWidth: "60rem"
    },
    sm: {
      maxWidth: "24rem"
    },
    xs: {
      maxWidth: "20rem"
    }
  };
};
var FormControlWrapper = import_styled7.default.form`
    ${baseStyles4}
    ${(props) => variants2()[props.variant || "full"]}
`;
var FormControlUI = (0, import_react4.forwardRef)(
  ({ ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(FormControlWrapper, { ref, ...props });
  }
);

// src/base/Radio.tsx
var import_styled8 = __toESM(require("@emotion/styled"));
var import_Radio = __toESM(require("@mui/material/Radio"));
var baseStyles5 = {
  color: "var(--radio-color-unchecked)",
  "&.Mui-checked": {
    color: "var(--radio-color-checked)"
  }
};
var RadioUI = (0, import_styled8.default)(import_Radio.default)(baseStyles5);

// src/base/RadioGroup.tsx
var import_styled9 = __toESM(require("@emotion/styled"));
var import_material = require("@mui/material");
var import_RadioGroup = __toESM(require("@mui/material/RadioGroup"));
var import_react5 = require("react");
var import_jsx_runtime6 = require("react/jsx-runtime");
var baseStyles6 = {};
var Wrapper4 = (0, import_styled9.default)(import_RadioGroup.default)`
    ${baseStyles6}

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
var RadioGroupUI = (0, import_react5.forwardRef)(
  ({ options, value, onChange, ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Wrapper4, { ref, value, onChange, ...props, options, children: options.map((option) => /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
      import_material.FormControlLabel,
      {
        value: option.value,
        control: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(RadioUI, {}),
        label: option.label,
        disabled: option.disabled
      },
      option.value
    )) });
  }
);

// src/base/RadioGroupField.tsx
var import_styled10 = __toESM(require("@emotion/styled"));
var import_react6 = require("react");
var import_jsx_runtime7 = require("react/jsx-runtime");
var Wrapper5 = import_styled10.default.div`
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
var RadioGroupFieldUI = (0, import_react6.forwardRef)(({ label, message, ...props }, ref) => {
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(Wrapper5, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(LabelUI, { children: label }),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(RadioGroupUI, { ...props, ref }),
    message && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(HelperTextUI, { message: message ?? "", variant: "error" })
  ] });
});

// src/base/Typography.tsx
var import_styled11 = __toESM(require("@emotion/styled"));
var import_Typography = __toESM(require("@mui/material/Typography"));
var import_react7 = require("react");
var import_jsx_runtime8 = require("react/jsx-runtime");
var colors = () => {
  return {
    textPrimary: {
      color: "var(--text-primary)"
    },
    textSecondary: {
      color: "var(--text-secondary)"
    },
    textError: {
      color: "var(--text-error)"
    },
    textSuccess: {
      color: "var(--text-success)"
    },
    textWarning: {
      color: "var(--text-warning)"
    },
    textInfo: {
      color: "var(--text-info)"
    },
    textDisabled: {
      color: "var(--text-disabled)"
    },
    black: {
      color: "black"
    },
    white: {
      color: "white"
    }
  };
};
var Wrapper6 = (0, import_styled11.default)(import_Typography.default)`
  ${(props) => colors()[props.color || "textPrimary"]}
`;
var TypographyUI = (0, import_react7.forwardRef)(
  (props, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(Wrapper6, { ...props, ref, sx: { fontFamily: "Lato, sans-serif" } });
  }
);

// src/base/table/Table.tsx
var import_styled12 = __toESM(require("@emotion/styled"));
var import_Table = __toESM(require("@mui/material/Table"));
var baseStyles7 = {};
var Wrapper7 = (0, import_styled12.default)(import_Table.default)`
  ${baseStyles7}
`;
var TableUI = (0, import_styled12.default)(Wrapper7)(baseStyles7);

// src/base/table/TableBody.tsx
var import_styled13 = __toESM(require("@emotion/styled"));
var import_TableBody = __toESM(require("@mui/material/TableBody"));
var baseStyles8 = {};
var Wrapper8 = (0, import_styled13.default)(import_TableBody.default)`
  ${baseStyles8}
`;
var TableBodyUI = (0, import_styled13.default)(Wrapper8)(baseStyles8);

// src/base/table/TableCell.tsx
var import_styled14 = __toESM(require("@emotion/styled"));
var import_TableCell = __toESM(require("@mui/material/TableCell"));
var baseStyles9 = {
  color: "var(--table-cell-text-color)",
  fontSize: "var(--table-cell-text-size)"
};
var Wrapper9 = (0, import_styled14.default)(import_TableCell.default)`
  ${baseStyles9}
`;
var TableCellUI = (0, import_styled14.default)(Wrapper9)(baseStyles9);

// src/base/table/TableContainer.tsx
var import_styled15 = __toESM(require("@emotion/styled"));
var import_TableContainer = __toESM(require("@mui/material/TableContainer"));
var baseStyles10 = {};
var Wrapper10 = (0, import_styled15.default)(import_TableContainer.default)`
  ${baseStyles10}
`;
var TableContainerUI = (0, import_styled15.default)(Wrapper10)(baseStyles10);

// src/base/table/TableRow.tsx
var import_styled16 = __toESM(require("@emotion/styled"));
var import_TableRow = __toESM(require("@mui/material/TableRow"));
var baseStyles11 = {};
var Wrapper11 = (0, import_styled16.default)(import_TableRow.default)`
  ${baseStyles11}
`;
var TableRowUI = (0, import_styled16.default)(Wrapper11)(baseStyles11);

// src/base/table/TableHead.tsx
var import_styled17 = __toESM(require("@emotion/styled"));
var import_TableHead = __toESM(require("@mui/material/TableHead"));
var baseStyles12 = {};
var Wrapper12 = (0, import_styled17.default)(import_TableHead.default)`
  ${baseStyles12}
`;
var TableHeadUI = (0, import_styled17.default)(Wrapper12)(baseStyles12);

// src/base/select/Option.tsx
var import_Option = require("@mui/base/Option");
var import_styled18 = __toESM(require("@emotion/styled"));
var blue = {
  100: "#DAECFF",
  200: "#99CCF3",
  400: "#3399FF",
  500: "#007FFF",
  600: "#0072E5",
  700: "#0059B2",
  900: "#003A75"
};
var grey = {
  50: "#F3F6F9",
  100: "#E5EAF2",
  200: "#DAE2ED",
  300: "#C7D0DD",
  400: "#B0B8C4",
  500: "#9DA8B7",
  600: "#6B7A90",
  700: "#434D5B",
  800: "#303740",
  900: "#1C2025"
};
var Wrapper13 = (0, import_styled18.default)(import_Option.Option)`
  list-style: none;
  padding: 8px;
  border-radius: 8px;
  cursor: default;

  &:last-of-type {
    border-bottom: none;
  }

  &.${import_Option.optionClasses.selected} {
    background-color: ${blue[100]};
    color: ${blue[900]};
  }

  &.${import_Option.optionClasses.highlighted} {
    background-color: ${grey[100]};
    color: ${grey[900]};
  }

  &:focus-visible {
    outline: 3px solid ${blue[200]};
  }

  &.${import_Option.optionClasses.highlighted}.${import_Option.optionClasses.selected} {
    background-color: ${blue[100]};
    color: ${blue[900]};
  }

  &.${import_Option.optionClasses.disabled} {
    color: ${grey[400]};
  }

  &:hover:not(.${import_Option.optionClasses.disabled}) {
    background-color: ${grey[100]};
    color: ${grey[900]};
  }
`;
var OptionUI = (0, import_styled18.default)(Wrapper13)();
var Option_default = OptionUI;

// src/base/select/Select.tsx
var import_Select = require("@mui/base/Select");
var import_Transitions = require("@mui/base/Transitions");
var import_Unstable_Popup = require("@mui/base/Unstable_Popup");
var import_styled19 = __toESM(require("@emotion/styled"));

// src/icons/handlers/handler.ts
var getColorIcon = (color) => {
  switch (color) {
    case "white":
      return "#fff";
    case "black":
      return "#000";
    case "currentColor":
      return "currentColor";
    case "none":
      return "none";
    case "primary":
      return "var(--ui-primary)";
    case "secondary":
      return "var(--ui-secondary)";
  }
};

// src/icons/ChevronUp.tsx
var import_jsx_runtime9 = require("react/jsx-runtime");
var IconChevronUpUI = ({
  width = 13,
  height = 21,
  strokeWidth = 2,
  fillColor = "none",
  fillColorPath = "white",
  strokeColor = "none"
}) => /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(
  "svg",
  {
    width,
    height,
    viewBox: "0 0 24 24",
    fill: getColorIcon(fillColor),
    stroke: getColorIcon(strokeColor),
    strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("path", { stroke: "none", d: "M0 0h24v24H0z", fill: getColorIcon(fillColorPath) }),
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("path", { d: "M6 15l6 -6l6 6" })
    ]
  }
);

// src/icons/ChevronDown.tsx
var import_jsx_runtime10 = require("react/jsx-runtime");
var IconChevronDownUI = ({
  width = 13,
  height = 21,
  strokeWidth = 2,
  fillColor = "none",
  fillColorPath = "white",
  strokeColor = "none"
}) => /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(
  "svg",
  {
    width,
    height,
    viewBox: "0 0 24 24",
    fill: getColorIcon(fillColor),
    stroke: getColorIcon(strokeColor),
    strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("path", { stroke: "none", d: "M0 0h24v24H0z", fill: getColorIcon(fillColorPath) }),
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("path", { d: "M6 9l6 6l6 -6" })
    ]
  }
);
var ChevronDown_default = IconChevronDownUI;

// src/base/select/Select.tsx
var import_react8 = require("react");
var import_jsx_runtime11 = require("react/jsx-runtime");
var SelectUI = (0, import_react8.forwardRef)(function CustomSelect(props, ref) {
  const { ...otherProps } = props;
  const slots = {
    root: StyledButton,
    listbox: AnimatedListbox,
    popup: Popup,
    ...props.slots
  };
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_Select.Select, { ...otherProps, ref, slots });
});
var Button2 = (0, import_react8.forwardRef)(function Button3(props, ref) {
  const { ownerState, ...other } = props;
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("button", { type: "button", ...other, ref, children: [
    other.children,
    ownerState.open ? /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(IconChevronUpUI, { width: 24, height: 24, strokeColor: "secondary" }) : /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(ChevronDown_default, { width: 24, height: 24, strokeColor: "secondary" })
  ] });
});
var variants3 = (state) => {
  return {
    primary: {
      borderColor: state === "disabled" ? "var(--select-disabled-border)" : "var(--select-default)",
      "&:focus": {
        boxShadow: "0px 0px 2px var(--select-shadow-success)",
        outline: "none",
        borderColor: "var(--select-focus)"
      },
      "&:disabled": {
        backgroundColor: "var(--select-disabled-bg)",
        borderColor: "var(--select-disabled-border)",
        color: "var(--select-disabled-color)"
      }
    },
    error: {
      borderColor: "var(--select-error)",
      "&:focus": {
        boxShadow: "0px 0px 2px var(--select-shadow-error)",
        outline: "none",
        borderColor: "var(--select-error)"
      }
    }
  };
};
var StyledButton = (0, import_styled19.default)(Button2, {
  shouldForwardProp: (prop) => prop !== "variant"
})`
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

  &.${import_Select.selectClasses.focusVisible} {
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

  ${(props) => variants3(props.state || "normal")[props.variant || "primary"]}
`;
var Listbox = (0, import_styled19.default)("ul")(
  ({ theme: theme2 }) => `
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
var AnimatedListbox = (0, import_react8.forwardRef)(function AnimatedListbox2(props, ref) {
  const { ownerState, ...other } = props;
  const popupContext = (0, import_react8.useContext)(import_Unstable_Popup.PopupContext);
  if (popupContext == null) {
    throw new Error(
      "The `AnimatedListbox` component cannot be rendered outside a `Popup` component"
    );
  }
  const verticalPlacement = popupContext.placement.split("-")[0];
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
    import_Transitions.CssTransition,
    {
      className: `placement-${verticalPlacement}`,
      enterClassName: "open",
      exitClassName: "closed",
      children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(Listbox, { ...other, ref })
    }
  );
});
var Popup = (0, import_styled19.default)("div")`
  z-index: 1;
`;

// src/base/select/SelectField.tsx
var import_styled20 = __toESM(require("@emotion/styled"));
var import_react9 = require("react");
var import_jsx_runtime12 = require("react/jsx-runtime");
var SelectWrapper = import_styled20.default.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  .select-container {
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
  }
`;
var SelectUIWrapper = (0, import_react9.forwardRef)(({ label, message, isError, ...props }, ref) => {
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(SelectWrapper, { children: [
    label && /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(Label_default, { children: label }),
    /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { className: "select-container", children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(SelectUI, { ...props, ref, children: props.options.map((option) => /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(Option_default, { value: option.value, children: option.label }, option.value)) }) }),
    (message && props.variant === "error" || isError) && /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(HelperTextUI, { variant: "error", message: message ?? "" }),
    message && props.variant !== "error" && !isError && /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(HelperTextUI, { message })
  ] });
});

// src/feedback/Dialog.tsx
var import_Dialog = __toESM(require("@mui/material/Dialog"));
var import_styled21 = __toESM(require("@emotion/styled"));
var import_react10 = require("react");
var import_CircularProgress = __toESM(require("@mui/material/CircularProgress"));
var import_jsx_runtime13 = require("react/jsx-runtime");
var baseStyle = {};
var Wapper = (0, import_styled21.default)(import_Dialog.default)`
    ${baseStyle}
`;
var DialogUI = (0, import_react10.forwardRef)(
  ({ ...props }, ref) => {
    const { isLoading, ...otherProps } = props;
    return /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(Wapper, { ref, ...props, children: [
      isLoading && /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_CircularProgress.default, { color: "inherit" }),
      otherProps.children
    ] });
  }
);

// src/feedback/Alert.tsx
var import_styled22 = __toESM(require("@emotion/styled"));
var import_material2 = require("@mui/material");
var import_react11 = require("react");
var import_jsx_runtime14 = require("react/jsx-runtime");
var Wapper2 = (0, import_styled22.default)(import_material2.Alert)``;
var AlertUI = (0, import_react11.forwardRef)(
  ({ ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(Wapper2, { ...props, ref });
  }
);

// src/feedback/Backdrop.tsx
var import_Backdrop = __toESM(require("@mui/material/Backdrop"));
var import_CircularProgress2 = __toESM(require("@mui/material/CircularProgress"));
var import_styled23 = __toESM(require("@emotion/styled"));
var import_react12 = require("react");
var import_jsx_runtime15 = require("react/jsx-runtime");
var baseStyle2 = {
  backgroundColor: "rgba(255, 255, 255, 0.70)",
  backdropFilter: "blur(2px)"
};
var Wapper3 = (0, import_styled23.default)(import_Backdrop.default)`
    ${baseStyle2}
`;
var BackdropUI = (0, import_react12.forwardRef)(
  ({ ...props }, ref) => {
    const { isLoading, children, ...otherProps } = props;
    return /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)(Wapper3, { ref, ...otherProps, children: [
      isLoading && /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(import_CircularProgress2.default, { color: "inherit" }),
      children
    ] });
  }
);

// src/icons/ChevronLeft.tsx
var import_jsx_runtime16 = require("react/jsx-runtime");
var IconChevronLeftUI = ({
  width = 13,
  height = 21,
  strokeWidth = 2,
  fillColor = "none",
  fillColorPath = "white"
}) => /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
  "svg",
  {
    width,
    height,
    viewBox: "0 0 13 21",
    fill: getColorIcon(fillColor),
    strokeWidth,
    children: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
      "path",
      {
        d: "M13 2.62865L4.96491 10.5913L13 18.554L10.5263 21L0 10.5913L10.5263 0.18261L13 2.62865Z",
        fill: getColorIcon(fillColorPath)
      }
    )
  }
);

// src/icons/Printer.tsx
var import_jsx_runtime17 = require("react/jsx-runtime");
var IconPrinterUI = ({
  width = 13,
  height = 21,
  strokeWidth = 2,
  fillColor = "none",
  fillColorPath = "white"
}) => /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
  "svg",
  {
    width,
    height,
    viewBox: "0 0 24 24",
    fill: getColorIcon(fillColor),
    strokeWidth,
    children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("g", { children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
      "path",
      {
        id: "Shape",
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M6 3H18V7H6V3ZM5 8H19C20.66 8 22 9.34 22 11V17H18V21H6V17H2V11C2 9.34 3.34 8 5 8ZM8 19H16V14H8V19ZM19 12C18.45 12 18 11.55 18 11C18 10.45 18.45 10 19 10C19.55 10 20 10.45 20 11C20 11.55 19.55 12 19 12Z",
        fill: getColorIcon(fillColorPath)
      }
    ) })
  }
);

// src/icons/Save.tsx
var import_jsx_runtime18 = require("react/jsx-runtime");
var IconSaveUI = ({
  width = 13,
  height = 21,
  strokeWidth = 2,
  fillColor = "none",
  fillColorPath = "white"
}) => /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
  "svg",
  {
    width,
    height,
    viewBox: "0 0 18 18",
    fill: getColorIcon(fillColor),
    strokeWidth,
    children: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("g", { children: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
      "path",
      {
        id: "Shape",
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M14 0H2C0.89 0 0 0.9 0 2V16C0 17.1 0.89 18 2 18H16C17.1 18 18 17.1 18 16V4L14 0ZM9 16C7.34 16 6 14.66 6 13C6 11.34 7.34 10 9 10C10.66 10 12 11.34 12 13C12 14.66 10.66 16 9 16ZM2 6H12V2H2V6Z",
        fill: getColorIcon(fillColorPath)
      }
    ) })
  }
);

// src/icons/WarningCircle.tsx
var import_jsx_runtime19 = require("react/jsx-runtime");
var IconWarningCircleUI = ({
  width = 15,
  height = 15,
  strokeWidth = 2,
  fillColor = "none",
  fillColorPath = "white"
}) => /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(
  "svg",
  {
    width,
    height,
    viewBox: "0 0 73 72",
    fill: getColorIcon(fillColor),
    strokeWidth,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
        "path",
        {
          d: "M36.5 63C51.4117 63 63.5 50.9117 63.5 36C63.5 21.0883 51.4117 9 36.5 9C21.5883 9 9.5 21.0883 9.5 36C9.5 50.9117 21.5883 63 36.5 63Z",
          stroke: getColorIcon(fillColorPath),
          strokeWidth: "3",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
        "path",
        {
          d: "M36.5 22.5V38.25",
          stroke: getColorIcon(fillColorPath),
          strokeWidth: "3",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
        "path",
        {
          d: "M36.5 51C37.8807 51 39 49.8807 39 48.5C39 47.1193 37.8807 46 36.5 46C35.1193 46 34 47.1193 34 48.5C34 49.8807 35.1193 51 36.5 51Z",
          fill: getColorIcon(fillColorPath)
        }
      )
    ]
  }
);

// src/layout/Box.tsx
var import_styled24 = __toESM(require("@emotion/styled"));
var import_Box = __toESM(require("@mui/material/Box"));
var baseStyles13 = {};
var Wrapper14 = (0, import_styled24.default)(import_Box.default)`
  ${baseStyles13}
`;
var BoxUI = (0, import_styled24.default)(Wrapper14)(baseStyles13);

// src/layout/Container.tsx
var import_styled25 = __toESM(require("@emotion/styled"));
var import_Container = __toESM(require("@mui/material/Container"));
var baseStyles14 = {};
var Wrapper15 = (0, import_styled25.default)(import_Container.default)`
  ${baseStyles14}
`;
var ContainerUI = (0, import_styled25.default)(Wrapper15)(baseStyles14);

// src/navigation/StepperRoute.tsx
var import_styled26 = __toESM(require("@emotion/styled"));
var import_jsx_runtime20 = require("react/jsx-runtime");
var StyleStepper = import_styled26.default.div`
  .wrapper-stepper {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  }

  .stepper {
    display: flex;
    overflow: hidden;
    counter-reset: flag;
    padding-left: 3.5rem;
    font-family: var(--font-family);
    h6 {
      font-family: var(--font-family);
    }
  }

  .stepper__step {
    text-decoration: none;
    outline: none;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    flex: 1;
    align-items: center;
    float: left;
    font-size: 20px;
    line-height: 60px;
    padding: 0 10px 0 60px;
    position: relative;
    background: var(--stepper-inactive);
    color: var(--stepper-color);
    transition: background 0.5s;
    width: 384px;
    height: 60px;
    padding-left: 66px;
    border-radius: 50px;
    text-align: left;
    margin-left: 10px;
    font-weight: 700;
    transition: all 0.5s;

    &:first-of-type::before {
      left: 5px;
    }

    &:last-child::after {
      content: none;
    }

    &::before {
      content: counter(flag);
      counter-increment: flag !important;
      border-radius: 100%;
      width: 50px;
      height: 50px;
      line-height: 50px;
      margin: 5px 0;
      position: absolute;
      top: 0;
      left: 30px;
      font-weight: 500;
      background: white;
      font-size: 20px;
      text-align: center;
    }

    &.stepper__left {
      margin-left: -50px !important;
      background-color: var(--stepper-inactive);

      &::before {
        left: 5px !important;
      }
    }

    /* ------------------------- CHECK ------------------------- */

    &.stepper__step--active {
      color: white;
      background: var(--stepper-active);

      &::before {
        color: var(--stepper-color);
      }
    }

    &.stepper__step--check {
      color: white;
      background: var(--stepper-check);

      &::before {
        color: var(--stepper-color);
      }
    }

    .icon_success {
      position: absolute;
      right: 52px;
      font-size: 40px !important;
      width: 32px;
      svg {
        fill: transparent !important;
      }
    }
  }
`;
var StepperRouteUI = ({ steps, pathname }) => {
  const currentIndex = steps.findIndex((step) => step.path === pathname);
  return /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(StyleStepper, { className: "wrapper-stepper ", children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: "stepper", children: steps.map((step, index) => /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)(
    "div",
    {
      className: `stepper__step stepper__left
              ${index === currentIndex ? "stepper__step--active" : ""}
              ${index < currentIndex ? "stepper__step--check" : ""}
            `,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("h6", { children: step.label }),
        index < currentIndex && /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: "icon_success", children: /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("svg", { width: "32", height: "32", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
          /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
          /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("path", { d: "M5 12l5 5l10 -10" })
        ] }) })
      ]
    },
    index
  )) }) });
};

// src/navigation/Breadcrumbs.tsx
var import_Breadcrumbs = __toESM(require("@mui/material/Breadcrumbs"));
var import_Link = __toESM(require("@mui/material/Link"));
var import_react13 = require("react");
var import_styled27 = __toESM(require("@emotion/styled"));
var import_jsx_runtime21 = require("react/jsx-runtime");
var StyleBreadcrumbs = (0, import_styled27.default)(import_Breadcrumbs.default)`
  font-size: 1.2rem;
  line-height: 1.2;
  position: relative;
  color var(--breadcrumb-color);

  p {
    font-size: 1.2rem;
    line-height: 1.2;
    color: var(--breadcrumb-color-active);
  }

  a {
    text-decoration: none;
    color: var(--breadcrumb-color);
    &:hover {
      text-decoration: none;
    }
  }

  &:before {
    content: "";
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 100%;
    height: 1px;
    border-radius: 15px;
    background-color: var(--divider-color);
    height: 2px;
  }
`;
var BreadcrumbsUI = (0, import_react13.forwardRef)(
  ({ links }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
      StyleBreadcrumbs,
      {
        className: "style-breadcrumbs",
        "aria-label": "breadcrumb",
        ref,
        children: links.map(
          (link, index) => link.current ? /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
            TypographyUI,
            {
              color: "textPrimary",
              "aria-current": "page",
              children: link.label
            },
            index
          ) : /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
            import_Link.default,
            {
              underline: "hover",
              color: "inherit",
              href: link.href,
              sx: { fontFamily: "Lato, sans-serif" },
              children: link.label
            },
            index
          )
        )
      }
    );
  }
);

// src/theme/ThemeProvider.tsx
var import_styles2 = require("@mui/material/styles");

// src/theme/theme.ts
var import_styles = require("@mui/material/styles");
var theme = (0, import_styles.createTheme)({
  palette: {
    primary: {
      main: "#de2887",
      contrastText: "#ffffff",
      light: "#f7d4eb",
      dark: "#a2005c"
    },
    secondary: {
      main: "#1f5278"
    },
    background: {
      default: "#ffffff"
    }
  },
  typography: {
    fontFamily: '"Lato", sans-serif'
  },
  components: {
    MuiCssBaseline: {},
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: "none"
        }
      }
    },
    MuiRadio: {
      styleOverrides: {
        root: {
          color: "var(--ui-primary)",
          // Color personalizado
          "&.Mui-checked": {
            color: "var(--radio-bg)"
            // Color cuando está seleccionado
          },
          "&:hover": {
            backgroundColor: "rgba(0, 0, 0, 0.08)"
            // Color de fondo al hacer hover
          },
          fill: "var(--radio-bg)"
          // Color personalizado
        },
        colorSecondary: {
          "&.Mui-checked": {
            color: "var(--radio-bg)"
            // Color cuando está seleccionado
          }
        }
      }
    }
  }
});
var theme_default = theme;

// src/theme/ThemeProvider.tsx
var import_jsx_runtime22 = require("react/jsx-runtime");
var ThemeProvider = ({ children }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(import_styles2.ThemeProvider, { theme: theme_default, children });
};
var ThemeProvider_default = ThemeProvider;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  AlertUI,
  BackdropUI,
  BoxUI,
  BreadcrumbsUI,
  ButtonUI,
  CardUI,
  CodeUI,
  ContainerUI,
  DialogUI,
  FormControlUI,
  IconChevronLeftUI,
  IconChevronUpUI,
  IconPrinterUI,
  IconSaveUI,
  IconWarningCircleUI,
  InputUI,
  InputUIWrapper,
  LabelUI,
  OptionUI,
  RadioGroupFieldUI,
  RadioGroupUI,
  RadioUI,
  SelectUI,
  SelectUIWrapper,
  StepperRouteUI,
  TableBodyUI,
  TableCellUI,
  TableContainerUI,
  TableHeadUI,
  TableRowUI,
  TableUI,
  ThemeProvider,
  TypographyUI,
  theme
});
