import styled, { type CSSObject, type StyledComponent } from "@emotion/styled";

export interface LabelPropsUI {
    children: React.ReactNode;
}

const Wrapper = styled.label`
    font-size: 16px;
    font-weight: 400;
    color: var(--input-label-color);
    margin-bottom: 5px;
`;

const baseStyles: CSSObject = {
}

export const LabelUI: StyledComponent<LabelPropsUI> = styled(Wrapper)<LabelPropsUI>(baseStyles);
export default LabelUI;

