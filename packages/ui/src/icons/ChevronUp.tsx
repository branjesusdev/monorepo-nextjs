import { getColorIcon } from "./handlers/handler";
import type { IconProps } from "./handlers/icon-props";

export const IconChevronUpUI = ({
  width = 13,
  height = 21,
  strokeWidth = 2,
  fillColor = "none",
  fillColorPath = "white",
  strokeColor = "none",
}: IconProps) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill={getColorIcon(fillColor)}
    stroke={getColorIcon(strokeColor)}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill={getColorIcon(fillColorPath)} />
    <path d="M6 15l6 -6l6 6" />
  </svg>
);

export default IconChevronUpUI;
