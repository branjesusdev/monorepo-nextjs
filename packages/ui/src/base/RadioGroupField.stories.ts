import { Meta, StoryObj } from "@storybook/react";
import RadioGroupFieldUI from "./RadioGroupField";
import "@repo/theme/standard.css";


const meta: Meta = {
    title: 'Base/RadioGroupField',
    component: RadioGroupFieldUI,
    argTypes: {
        label: {
            control: {
                type: 'text',
            }
        },
        message: {
            control: {
                type: 'text',
            }
        },
        options: {
            control: {
                type: 'object',
            }
        }
    },
} satisfies Meta;


export default meta;

type Story = StoryObj<typeof RadioGroupFieldUI>;

export const Default: Story = {
    args: {
        label: 'Radio Group',
        message: 'This is a message',
        options: [
            {
                label: 'Option 1',
                value: 'option1',
            },
            {
                label: 'Option 2',
                value: 'option2',
            },
            {
                label: 'Option 3',
                value: 'option3',
            },
        ],
    },
};
