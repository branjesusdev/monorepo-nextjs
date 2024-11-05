import { Meta, StoryObj } from "@storybook/react";
import CardUI from "./Card";

const meta: Meta = {
  title: "Base/Card",
  component: CardUI,
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: {
        type: "text",
      },
    },
    rounded: {
      control: {
        type: "select",
        options: ["none", "small", "medium", "large"],
      },
    },
  },
  render(args) {
    return (
      <CardUI
        {...args}
        style={{
          textAlign: "center",
          padding: "1rem",
          fontFamily: "Lato, sans-serif",
          fontSize: "1.5rem",
        }}
      >
        {args.children}
      </CardUI>
    );
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof CardUI>;

export const Default: Story = {
  args: {
    rounded: "medium",
    children: "Card",
  },
};

export const Small: Story = {
  args: {
    rounded: "small",
    children: "Card",
  },
};

export const Large: Story = {
  args: {
    rounded: "large",
    children: "Card",
  },
};

export const None: Story = {
  args: {
    rounded: "none",
    children: "Card",
  },
};
