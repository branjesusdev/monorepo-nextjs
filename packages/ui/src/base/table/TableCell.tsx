
import styled from "@emotion/styled";
import type { StyledComponent } from '@emotion/styled';
import type { CSSObject } from "@emotion/styled";

import TableCell from '@mui/material/TableCell';
import type { TableCellProps } from '@mui/material/TableCell';


export interface TableCellUIProps  extends TableCellProps {}

const baseStyles: CSSObject = {
  color: "var(--table-cell-text-color)",
  fontSize: "var(--table-cell-text-size)"
}

const Wrapper = styled(TableCell)<TableCellUIProps>`
  ${baseStyles}
`

export const TableCellUI: StyledComponent<TableCellUIProps> = styled(Wrapper)<TableCellUIProps>(baseStyles);
export default TableCellUI;