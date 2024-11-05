import { Meta, StoryObj } from "@storybook/react";
import Printer from "./Printer";
import type { IconProps } from "./handlers/icon-props";


const meta: Meta = {
    title: "Icons/Printer",
    component: Printer,
    argTypes: {
        width: {
            control: "number",
        },
        height: {
            control: "number",
        },
        strokeWidth: {
            control: "number",
        },
        fillColor: {
            control: { type : "select" },
            options: ["white" , "black" , "currentColor" , "none" , "primary" , "secondary" ],
        },
        fillColorPath: {
            control: { type : "select" },
            options: ["white" , "black" , "currentColor" , "none" , "primary" , "secondary" ],
        }
    } 
} satisfies Meta<IconProps>;

export default meta;

type Story = StoryObj<typeof Printer>;

export const Default: Story = {
    args: {
        width: 24,
        height: 24,
        strokeWidth: 2,
    },
};

export const Large: Story = {
    args: {
        width: 48,
        height: 48,
        strokeWidth: 4,
    },
};

export const Small: Story = {
    args: {
        width: 12,
        height: 12,
        strokeWidth: 1,
    },
};

export const Custom: Story = {
    args: {
        width: 36,
        height: 36,
        strokeWidth: 3,
    },
};