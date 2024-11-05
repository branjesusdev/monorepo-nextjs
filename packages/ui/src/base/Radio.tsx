import Style, { type StyledComponent, type CSSObject } from "@emotion/styled";
import Radio, { type RadioProps } from '@mui/material/Radio';


interface RadioPropsUI extends RadioProps {

}

const baseStyles: CSSObject = {
    color: "var(--radio-color-unchecked)",
    "&.Mui-checked": {
        color: "var(--radio-color-checked)",
    },
    
}

export const RadioUI: StyledComponent<RadioPropsUI> = Style(Radio)<RadioPropsUI>(baseStyles);
export default RadioUI;