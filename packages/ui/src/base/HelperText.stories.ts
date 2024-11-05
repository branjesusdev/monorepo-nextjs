import { Meta, StoryObj } from "@storybook/react";
import { HelperTextUI } from "./HelperText";


const meta: Meta = {
    title: 'Base/HelperText',
    component: HelperTextUI,
    tags: ["autodocs"],
    argTypes: {
        message: {
            control: {
                type: 'text',
            },
        },
        variant: {
            options: ['primary', 'error'],
            control: { type: 'radio' },
        },
    },
} satisfies Meta;


export default meta;

type Story = StoryObj<typeof HelperTextUI>;

export const Default: Story = {
    args: {
        message: 'HelperText',
        variant: 'primary',
    },
};

export const Error: Story = {
    args: {
        message: 'Error HelperText',
        variant: 'error',
    },
};