import { getColorIcon } from "./handlers/handler";
import type { IconProps } from "./handlers/icon-props";

export const IconPrinterUI = ({
  width = 13,
  height = 21,
  strokeWidth = 2,
  fillColor = "none",
  fillColorPath = "white",
}: IconProps) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill={getColorIcon(fillColor)}
    strokeWidth={strokeWidth}
  >
    <g>
      <path
        id="Shape"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 3H18V7H6V3ZM5 8H19C20.66 8 22 9.34 22 11V17H18V21H6V17H2V11C2 9.34 3.34 8 5 8ZM8 19H16V14H8V19ZM19 12C18.45 12 18 11.55 18 11C18 10.45 18.45 10 19 10C19.55 10 20 10.45 20 11C20 11.55 19.55 12 19 12Z"
        fill={getColorIcon(fillColorPath)}
      />
    </g>
  </svg>
);

export default IconPrinterUI;
