import styled from "@emotion/styled";
import type { StyledComponent } from '@emotion/styled';
import type { CSSObject } from "@emotion/styled";

import Table from '@mui/material/Table';
import type { TableProps } from '@mui/material/Table';


export interface TableUIProps  extends TableProps {}

const baseStyles: CSSObject = {
}

const Wrapper = styled(Table)<TableUIProps>`
  ${baseStyles}
`

export const TableUI: StyledComponent<TableUIProps> = styled(Wrapper)<TableUIProps>(baseStyles);
export default TableUI;