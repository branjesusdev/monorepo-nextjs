import { Meta, StoryObj } from "@storybook/react";
import { SelectUI } from "./Select";
import { OptionUI } from "./Option";
import "@repo/theme/standard.css";

const meta: Meta = {
  title: "Base/Select",
  component: SelectUI,
  tags: ["autodocs"],
  render: (args) => {
    return (
      <SelectUI defaultValue={10} {...args} style={{ width: 500 }}>
        <OptionUI value={10}>Ten</OptionUI>
        <OptionUI value={20}>Twenty</OptionUI>
        <OptionUI value={30}>Thirty</OptionUI>
      </SelectUI>
    );
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof SelectUI>;

export const Default: Story = {};
