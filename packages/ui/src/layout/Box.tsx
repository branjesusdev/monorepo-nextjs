
import styled from "@emotion/styled";
import type { StyledComponent } from '@emotion/styled';
import type { CSSObject } from "@emotion/styled";
import Box from "@mui/material/Box";
import type { BoxProps } from "@mui/material/Box";


export interface BoxUIProps  extends BoxProps {}

const baseStyles: CSSObject = {}

const Wrapper = styled(Box)<BoxUIProps>`
  ${baseStyles}
`

export const BoxUI: StyledComponent<BoxUIProps> = styled(Wrapper)<BoxUIProps>(baseStyles);
export default BoxUI;