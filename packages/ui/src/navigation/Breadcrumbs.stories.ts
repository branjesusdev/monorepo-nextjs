import type { Meta, StoryObj } from '@storybook/react';
import "@repo/theme/standard.css";
import { BreadcrumbsUIProps , BreadcrumbsUI } from './Breadcrumbs';

const meta: Meta<BreadcrumbsUIProps> = {
  title: 'Navigation/Breadcrumbs',
  component: BreadcrumbsUI,
  tags: ['autodocs'],
  argTypes: {
    links: {
      control: {
        type: 'object',
      },
    },
  },
} satisfies Meta<BreadcrumbsUIProps>;

export default meta;
type Story = StoryObj<typeof BreadcrumbsUI>;

export const BreadcrumbsPrimary: Story = {
  args: {
    key : 0,
    links: [
      { label: 'Home', href: '/' },
      { label: 'Catalog', href: '/catalog' },
      { label: 'Accessories', href: '/catalog/accessories' },
      { label: 'Belts', href: '/catalog/accessories/belts', current: true },
    ],
  },
};
