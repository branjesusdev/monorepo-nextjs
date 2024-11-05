import { Meta, StoryObj } from "@storybook/react";
import { LabelUI } from "./Label";


const meta: Meta = {
    title: 'Base/Label',
    component: LabelUI,
    argTypes: {
        children: {
            control: {
                type: 'text',
            },
        },
    },
} satisfies Meta;


export default meta;

type Story = StoryObj<typeof LabelUI>;

export const Default: Story = {
    args: {
        children: 'Label',
    },
};