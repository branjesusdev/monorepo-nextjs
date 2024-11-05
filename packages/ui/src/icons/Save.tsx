import { getColorIcon } from "./handlers/handler";
import type { IconProps } from "./handlers/icon-props";


export const IconSaveUI = ({
  width = 13,
  height = 21,
  strokeWidth = 2,
  fillColor = "none",
  fillColorPath = "white",
}: IconProps) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 18 18"
    fill={getColorIcon(fillColor)}
    strokeWidth={strokeWidth}
  >
    <g>
      <path
        id="Shape"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14 0H2C0.89 0 0 0.9 0 2V16C0 17.1 0.89 18 2 18H16C17.1 18 18 17.1 18 16V4L14 0ZM9 16C7.34 16 6 14.66 6 13C6 11.34 7.34 10 9 10C10.66 10 12 11.34 12 13C12 14.66 10.66 16 9 16ZM2 6H12V2H2V6Z"
        fill={getColorIcon(fillColorPath)}
      />
    </g>
  </svg>
);

export default IconSaveUI;
