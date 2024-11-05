import { Meta, StoryObj } from "@storybook/react";
import AlertUI from "./Alert";


const meta: Meta = {
    title: "Feedback/Alert",
    component: AlertUI,
    tags: ["autodocs"],
    argTypes: {
        children: {
            control: {
                type: "text",
            },
        },
        severity: {
            control: {
                type: "select",
                options: ["error", "info", "success", "warning"],
            },
        },
    },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof AlertUI>;


export const Info: Story = {
    args: {
        children: "This is an alert",
        severity: "info",
    },
};

export const Danger: Story = {
    args: {
        children: "This is an alert",
        severity: "error",
    },
};

export const Success: Story = {
    args: {
        children: "This is an alert",
        severity: "success",
    },
};

export const Warning: Story = {
    args: {
        children: "This is an alert",
        severity: "warning",
    },
};

export const Custom: Story = {
    args: {
        children: "This is an alert",
        severity: "info",
    },
    parameters: {
        backgrounds: {
            default: "dark",
        },
    },
};