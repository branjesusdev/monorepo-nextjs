import { Meta, StoryObj } from "@storybook/react";
import { RadioUI } from "./Radio";

const meta : Meta = {
    title: 'Base/Radio',
    component: RadioUI,
    tags: ['autodocs'],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof RadioUI>;

export const Default: Story = {
    args: {
        color: 'primary',
    },
};
