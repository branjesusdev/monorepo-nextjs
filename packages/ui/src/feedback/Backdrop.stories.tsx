import { Meta, StoryObj } from "@storybook/react";
import BackdropUI from "./Backdrop";
import { ButtonUI } from "../base";
import { useState } from "react";

const meta: Meta = {
  title: "Feedback/Backdrop",
  component: BackdropUI,
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: {
        type: "text",
      },
    },
    open: {
      control: {
        type: "boolean",
      },
    },
    loading: {
      control: {
        type: "boolean",
      },
    },
  },
  args: {
    open: false,
    isLoading: false,
  },
  render: (args) => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
      <>
        <ButtonUI onClick={handleOpen}>Show backdrop</ButtonUI>
        <BackdropUI
          open={open}
          onClick={handleClose}
          {...args}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "1rem",
            flexDirection: "column",
          }}
        >
          <h1>Mensaje...</h1>
        </BackdropUI>
      </>
    );
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof BackdropUI>;

export const Loading: Story = {
  args: {
    open: true,
    isLoading: true,
  },
};

export const NotLoading: Story = {
  args: {
    open: true,
    isLoading: false,
  },
};
