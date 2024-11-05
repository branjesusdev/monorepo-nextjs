import type { IconProps } from './icon-props'

export const getColorIcon = (
    color: IconProps["fillColor"] | IconProps["fillColorPath"]
) => {
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