
import styled from "@emotion/styled";
import type { StyledComponent } from '@emotion/styled';
import type { CSSObject } from "@emotion/styled";

import TableContainer from '@mui/material/TableContainer';
import type { TableContainerProps } from '@mui/material/TableContainer';


export interface TableContainerUIProps  extends TableContainerProps {}

const baseStyles: CSSObject = {
}

const Wrapper = styled(TableContainer)<TableContainerUIProps>`
  ${baseStyles}
`

export const TableContainerUI: StyledComponent<TableContainerUIProps> = styled(Wrapper)<TableContainerUIProps>(baseStyles);
export default TableContainerUI;