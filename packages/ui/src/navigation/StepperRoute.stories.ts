import type { Meta, StoryObj } from '@storybook/react';
import "@repo/theme/standard.css";
import { StepperProps, StepperRouteUI } from './StepperRoute';

const meta: Meta<StepperProps> = {
  title: 'Navigation/StepperRoute',
  component: StepperRouteUI,
  tags: ['autodocs'],
  argTypes: {
    pathname: {
      control: {
        type: 'text',
      },
    },
    steps: {
      control: {
        type: 'object',
      },
    }
  },
} satisfies Meta<StepperProps>;

export default meta;
type Story = StoryObj<typeof StepperRouteUI>;

export const SteepCheckOne: Story = {
  args: {
    pathname: '/step1',
    steps: [
      {
        label: 'Step 1',
        path : '/step1',
      },
      {
        label: 'Step 2',
        path : '/step2',
      },
      {
        label: 'Step 3',
        path : '/step3',
      },
    ]
  },
};

export const SteepCheckTwo: Story = {
  args: {
    pathname: '/step2',
    steps: [
      {
        label: 'Step 1',
        path : '/step1',
      },
      {
        label: 'Step 2',
        path : '/step2',
      },
      {
        label: 'Step 3',
        path : '/step3',
      },
    ]
  },
};

export const SteepCheckThree: Story = {
  args: {
    pathname: '/step3',
    steps: [
      {
        label: 'Step 1',
        path : '/step1',
      },
      {
        label: 'Step 2',
        path : '/step2',
      },
      {
        label: 'Step 3',
        path : '/step3',
      },
    ]
  },
};