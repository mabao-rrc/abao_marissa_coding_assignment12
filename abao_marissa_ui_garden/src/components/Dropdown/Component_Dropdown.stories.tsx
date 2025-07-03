import type { Meta, StoryFn } from '@storybook/react-webpack5';
import Dropdown from './Component_Dropdown';

const meta: Meta<typeof Dropdown> = {
  title: 'ReactComponentLibrary/Dropdown',
  component: Dropdown,
  argTypes: {
    onChange: { action: 'changed' },
  },
};
export default meta;

const Template: StoryFn<typeof Dropdown> = (args) => <Dropdown {...args} />;

export const Default = Template.bind({});
Default.args = {
  options: [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
  ],
  testIdPrefix: 'dropdown',
};

export const Disabled = Template.bind({});
Disabled.args = {
  options: [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
  ],
  disabled: true,
  testIdPrefix: 'dropdown',
};
