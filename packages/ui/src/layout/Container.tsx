
import styled from "@emotion/styled";
import type { StyledComponent } from '@emotion/styled';
import type { CSSObject } from "@emotion/styled";
import Container from "@mui/material/Container";
import type { ContainerProps } from "@mui/material/Container";


export interface ContainerUIProps  extends ContainerProps {}

const baseStyles: CSSObject = {}

const Wrapper = styled(Container)<ContainerUIProps>`
  ${baseStyles}
`

export const ContainerUI: StyledComponent<ContainerUIProps> = styled(Wrapper)<ContainerUIProps>(baseStyles);
export default ContainerUI;