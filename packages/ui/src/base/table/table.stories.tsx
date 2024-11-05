import { Meta, StoryObj } from "@storybook/react";
import TableUI from "./Table";
import type { TableUIProps } from "./Table";
import TableContainerUI from "./TableContainer";
import TableBodyUI from "./TableBody";
import TableRowUI from "./TableRow";
import TableCellUI from "./TableCell";

const dataConfirm = [
  { label: "Name", value: "John Doe" },
  { label: "Amount", value: "$100.00" },
  { label: "Description", value: "Payment for services rendered" },
];

const meta: Meta = {
  title: "Base/Table",
  component: TableUI,
  tags: ["autodocs"],
  argTypes: {},
  render: (args) => {
    return (
      <TableContainerUI>
        <TableUI sx={{ minWidth: 350 }} {...args}>
          <TableBodyUI>
            {dataConfirm.map((row) => (
              <TableRowUI
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                key={row.label}
              >
                <TableCellUI component="th" scope="row">
                  {row.label}
                </TableCellUI>
                <TableCellUI align="right" sx={{ fontWeight: "bold" }}>
                  {row.value}
                </TableCellUI>
              </TableRowUI>
            ))}
          </TableBodyUI>
        </TableUI>
      </TableContainerUI>
    );
  },
} satisfies Meta<TableUIProps>;

export default meta;

type Story = StoryObj<typeof TableUI>;

export const Contained: Story = {
  args: {},
};
