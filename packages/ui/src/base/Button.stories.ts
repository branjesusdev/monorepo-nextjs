import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import "@repo/theme/standard.css";

import { ButtonUI, ButtonUIProps } from './Button';

const meta: Meta<ButtonUIProps> = {
  title: 'Base/Button',
  component: ButtonUI,
  tags: ['autodocs'],
  argTypes: {
    state: {
      control: {
        type: 'select',
      },
      options: ['normal', 'disabled', 'loading'],
    },
    variant: {
      control: {
        type: 'select',
      },
      options: ['contained', 'outlined', 'text'],
    },
    rounded: {
      control: {
        type: 'radio',
      },
      options: ['none', 'small', 'medium', 'large'],
    },
    size: {
      control: {
        type: 'radio',
      },
      options: ['small', 'medium', 'large'],
    }
  },
  args: { 
    onClick: fn(() => console.log('Button clicked')),
    children: 'Button',
  },
} satisfies Meta<ButtonUIProps>;

export default meta;
type Story = StoryObj<typeof ButtonUI>;

export const Contained: Story = {
  args: {
    variant: 'contained',
    state: 'normal',
  },
};

export const Outlined: Story = {
  args: {
    variant: 'outlined',
    state: 'normal',
  },
};

export const Text: Story = {
  args: {
    variant: 'text',
    state: 'normal',
  },
};

export const Disabled: Story = {
  args: {
    variant: 'contained',
    state: 'disabled',
  },
};

export const Loading: Story = {
  args: {
    variant: 'contained',
    state: 'loading',
  },
};
