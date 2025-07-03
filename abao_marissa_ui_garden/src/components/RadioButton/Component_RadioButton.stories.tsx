import type { Meta, StoryFn } from '@storybook/react-webpack5';
import RadioButton from './Component_RadioButton';

const meta: Meta<typeof RadioButton> = {
  title: 'ReactComponentLibrary/RadioButton',
  component: RadioButton,
  argTypes: {
    onChange: { action: 'changed' },
  },
};
export default meta;

const Template: StoryFn<typeof RadioButton> = (args) => <RadioButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Option A',
  testIdPrefix: 'radio',
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Option A',
  disabled: true,
  testIdPrefix: 'radio',
};
