import { getColorIcon } from "./handlers/handler";
import type { IconProps } from "./handlers/icon-props";


export const IconWarningCircleUI = ({
  width = 15,
  height = 15,
  strokeWidth = 2,
  fillColor = "none",
  fillColorPath = "white",
}: IconProps) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 73 72"
    fill={getColorIcon(fillColor)}
    strokeWidth={strokeWidth}
  >
    <path
      d="M36.5 63C51.4117 63 63.5 50.9117 63.5 36C63.5 21.0883 51.4117 9 36.5 9C21.5883 9 9.5 21.0883 9.5 36C9.5 50.9117 21.5883 63 36.5 63Z"
      stroke={getColorIcon(fillColorPath)}
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M36.5 22.5V38.25"
      stroke={getColorIcon(fillColorPath)}
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M36.5 51C37.8807 51 39 49.8807 39 48.5C39 47.1193 37.8807 46 36.5 46C35.1193 46 34 47.1193 34 48.5C34 49.8807 35.1193 51 36.5 51Z"
      fill={getColorIcon(fillColorPath)}
    />
  </svg>
);

export default IconWarningCircleUI;
