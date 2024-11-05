import { Meta, StoryObj } from "@storybook/react";
import FormControlUI from "./FormControl";
import InputUI from "./Input";
import { ButtonUI } from "./Button";

const meta: Meta = {
  title: "Base/FormControl",
  component: FormControlUI,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: {
        type: "select",
        options: ["lg", "md", "sm", "xs", "full"],
      },
    },
    state: {
      control: {
        type: "select",
        options: ["normal", "disabled"],
      },
    },
  },
  render(args) {
    return (
      <FormControlUI
        {...args}
        style={{ backgroundColor: "lightgray", padding: "1rem", display: "flex", flexDirection: "column", gap: "1rem" }}
      >
        <InputUI type="text" placeholder="Enter your name" />
        <ButtonUI type="submit">Submit</ButtonUI>
      </FormControlUI>
    );
  },
};

export default meta;

type Story = StoryObj<typeof FormControlUI>;

export const FormMD: Story = {
  args: {
    variant: "md",
    state: "normal",
  },
};

export const FormLG: Story = {
  args: {
    variant: "lg",
    state: "normal",
  },
};

export const FormSM: Story = {
  args: {
    variant: "sm",
    state: "normal",
  },
};
