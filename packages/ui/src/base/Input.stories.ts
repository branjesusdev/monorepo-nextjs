import type { Meta, StoryObj } from '@storybook/react';
import "@repo/theme/standard.css";
import { InputUI, InputPropsUI } from './Input';

const meta: Meta<InputPropsUI> = {
  title: 'Base/Input',
  component: InputUI,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: ['primary', 'error'],
      control: { type: 'radio' },
    },
    state: {
      options: ['normal', 'disabled'],
      control: { type: 'radio' },
    },
  },
  
} satisfies Meta<InputPropsUI>;

export default meta;
type Story = StoryObj<typeof InputUI>;

export const Error: Story = {
  args: {
    placeholder: 'Error',
    variant: 'error',
    state: 'normal',
  },
};

export const Primary: Story = {
  args: {
    placeholder: 'Primary',
    variant: 'primary',
    state: 'normal',
  },
};

