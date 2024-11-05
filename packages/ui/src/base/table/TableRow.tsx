
import styled from "@emotion/styled";
import type { StyledComponent } from '@emotion/styled';
import type { CSSObject } from "@emotion/styled";

import TableRow from '@mui/material/TableRow';
import type { TableRowProps } from '@mui/material/TableRow';


export interface TableRowUIProps  extends TableRowProps {}

const baseStyles: CSSObject = {
}

const Wrapper = styled(TableRow)<TableRowUIProps>`
  ${baseStyles}
`

export const TableRowUI: StyledComponent<TableRowUIProps> = styled(Wrapper)<TableRowUIProps>(baseStyles);
export default TableRowUI;