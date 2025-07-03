import type { Meta, StoryObj } from '@storybook/react-webpack5';
import Button from './Component_Button';

const meta: Meta<typeof Button> = {
  title: 'ReactComponentLibrary/Button',
  component: Button,
  argTypes: {
    label: { control: 'text' },
    backgroundColor: { control: 'color' },
    disabled: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    label: 'Click Me!',
    backgroundColor: '#007BFF',
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Button',
    backgroundColor: '#007BFF',
    disabled: true,
  },
};
