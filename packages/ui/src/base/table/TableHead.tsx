
import styled from "@emotion/styled";
import type { StyledComponent } from '@emotion/styled';
import type { CSSObject } from "@emotion/styled";

import TableHead from '@mui/material/TableHead';
import type { TableHeadProps } from '@mui/material/TableHead';


export interface TableHeadUIProps  extends TableHeadProps {}

const baseStyles: CSSObject = {
}

const Wrapper = styled(TableHead)<TableHeadUIProps>`
  ${baseStyles}
`

export const TableHeadUI: StyledComponent<TableHeadUIProps> = styled(Wrapper)<TableHeadUIProps>(baseStyles);
export default TableHeadUI;