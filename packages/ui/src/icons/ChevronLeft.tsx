import { getColorIcon } from "./handlers/handler";
import type { IconProps } from "./handlers/icon-props";


export const IconChevronLeftUI = ({
  width = 13,
  height = 21,
  strokeWidth = 2,
  fillColor = "none",
  fillColorPath = "white",
}: IconProps) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 13 21"
    fill={getColorIcon(fillColor)}
    strokeWidth={strokeWidth}
  >
    <path
      d="M13 2.62865L4.96491 10.5913L13 18.554L10.5263 21L0 10.5913L10.5263 0.18261L13 2.62865Z"
      fill={getColorIcon(fillColorPath)}
    />
  </svg>
);

export default IconChevronLeftUI;
