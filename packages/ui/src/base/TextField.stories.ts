import type { Meta, StoryObj } from '@storybook/react';
import "@repo/theme/standard.css";
import { InputUIWrapper, InputWrapperProps } from './TextField';

const meta: Meta<InputWrapperProps> = {
  title: 'Base/TexField',
  component: InputUIWrapper,
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
    startAdornment: {
      control: { type: 'boolean' },
    },
    label: {
      control: { type: 'text' },
    }
  },
} satisfies Meta<InputWrapperProps>;

export default meta;
type Story = StoryObj<typeof InputUIWrapper>;

export const Error: Story = {
  args: {
    label: 'Error',
    placeholder: 'message',
    message: 'Error message',
    variant: 'error',
    state: 'normal',
  },
};

export const Primary: Story = {
  args: {
    variant: 'primary',
    state: 'normal',
    label: 'Primary',
    placeholder: 'message',
    message: 'Primary message',
  },
};

