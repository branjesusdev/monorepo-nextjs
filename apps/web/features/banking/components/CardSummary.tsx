'use client';

import {
  CardUI,
  TableBodyUI,
  TableCellUI,
  TableContainerUI,
  TableRowUI,
  TableUI,
} from "@repo/ui";

interface CardSummaryProps {
  data: {
    label: string;
    value: string;
  }[];
}

export const CardSummary = ({ data }: CardSummaryProps) => {
  return (
    <CardUI>
      <div className="px-5 py-10">
        <TableContainerUI>
          <TableUI sx={{ minWidth: 650 }} aria-label="Transaction details">
            <TableBodyUI>
              {data.map((row) => (
                <TableRowUI
                  sx={{
                    "&:last-child td, &:last-child th": { border: 0 },
                  }}
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
      </div>
    </CardUI>
  );
};
