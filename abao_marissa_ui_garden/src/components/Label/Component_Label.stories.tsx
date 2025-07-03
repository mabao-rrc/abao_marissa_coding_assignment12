/**
 * Name: Marissa Abao
 * Submission Date: June 30, 2025
 * Class: WEBD-3012
 * Coding Assignment 12: Web Component Library
 * Filename: Component_Label.stories.tsx
 * Description: This file defines Storybook stories for the Label component.
 */

import type { Meta, StoryFn } from '@storybook/react-webpack5';
import Label from './Component_Label';

export default {
  title: 'ReactComponentLibrary/Label',
  component: Label,
  argTypes: {
    backgroundColor: { control: 'color' },
    text: { control: 'text' },
    disabled: { control: 'boolean' },
  },
} as Meta<typeof Label>;

const Template: StoryFn<typeof Label> = (args: React.ComponentProps<typeof Label>) => <Label {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: 'Default Label',
  backgroundColor: '#28a745',
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  text: 'Disabled Label',
  disabled: true,
};
