
import styled from "@emotion/styled";
import type { StyledComponent } from '@emotion/styled';
import type { CSSObject } from "@emotion/styled";

import TableBody from '@mui/material/TableBody';
import type { TableBodyProps } from '@mui/material/TableBody';


export interface TableBodyUIProps  extends TableBodyProps {}

const baseStyles: CSSObject = {
}

const Wrapper = styled(TableBody)<TableBodyUIProps>`
  ${baseStyles}
`

export const TableBodyUI: StyledComponent<TableBodyUIProps> = styled(Wrapper)<TableBodyUIProps>(baseStyles);
export default TableBodyUI;