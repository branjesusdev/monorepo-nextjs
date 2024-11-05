import styled from "@emotion/styled";
import { TypographyUI } from '../base/Typography';


export interface StepperProps {
  steps: Array<{ label: string; path: string }>;
  pathname: string;
}

const StyleStepper = styled.div`
  .wrapper-stepper {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  }

  .stepper {
    display: flex;
    overflow: hidden;
    counter-reset: flag;
    padding-left: 3.5rem;
    font-family: var(--font-family);
    h6 {
      font-family: var(--font-family);
    }
  }

  .stepper__step {
    text-decoration: none;
    outline: none;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    flex: 1;
    align-items: center;
    float: left;
    font-size: 20px;
    line-height: 60px;
    padding: 0 10px 0 60px;
    position: relative;
    background: var(--stepper-inactive);
    color: var(--stepper-color);
    transition: background 0.5s;
    width: 384px;
    height: 60px;
    padding-left: 66px;
    border-radius: 50px;
    text-align: left;
    margin-left: 10px;
    font-weight: 700;
    transition: all 0.5s;

    &:first-of-type::before {
      left: 5px;
    }

    &:last-child::after {
      content: none;
    }

    &::before {
      content: counter(flag);
      counter-increment: flag !important;
      border-radius: 100%;
      width: 50px;
      height: 50px;
      line-height: 50px;
      margin: 5px 0;
      position: absolute;
      top: 0;
      left: 30px;
      font-weight: 500;
      background: white;
      font-size: 20px;
      text-align: center;
    }

    &.stepper__left {
      margin-left: -50px !important;
      background-color: var(--stepper-inactive);

      &::before {
        left: 5px !important;
      }
    }

    /* ------------------------- CHECK ------------------------- */

    &.stepper__step--active {
      color: white;
      background: var(--stepper-active);

      &::before {
        color: var(--stepper-color);
      }
    }

    &.stepper__step--check {
      color: white;
      background: var(--stepper-check);

      &::before {
        color: var(--stepper-color);
      }
    }

    .icon_success {
      position: absolute;
      right: 52px;
      font-size: 40px !important;
      width: 32px;
      svg {
        fill: transparent !important;
      }
    }
  }
`;

export const StepperRouteUI = ({ steps, pathname }: StepperProps) => {
  const currentIndex = steps.findIndex((step) => step.path === pathname);

  return (
    <StyleStepper className="wrapper-stepper ">
      <div className="stepper">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`stepper__step stepper__left
              ${index === currentIndex ? "stepper__step--active" : ""}
              ${index < currentIndex ? "stepper__step--check" : ""}
            `}
          >
            <h6>
              {step.label}
            </h6>
            
            {index < currentIndex && 
              <div className="icon_success">
                <svg  width="32"  height="32"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round" ><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 12l5 5l10 -10" /></svg>
              </div>}
          </div>
        ))}
      </div>
    </StyleStepper>
  );
};

export default StepperRouteUI;