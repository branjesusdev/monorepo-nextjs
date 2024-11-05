import { Meta, StoryObj } from "@storybook/react";
import { RadioGroupUI }  from "./RadioGroup";
import "@repo/theme/standard.css";


const meta: Meta = {
    title: "Base/RadioGroup",
    component: RadioGroupUI,
    tags: ["autodocs"],
    argTypes: {
      options: {
        control: {
          type: "object",
        },
      },
    },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof RadioGroupUI>;

export const Default: Story = {
    args: {
        options: [
            { label: "Option 1", value: "1" },
            { label: "Option 2", value: "2" },
            { label: "Option 3", value: "3" },
        ],
    },
};
