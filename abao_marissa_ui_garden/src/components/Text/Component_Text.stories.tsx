/**
 * Name: Marissa Abao
 * Submission Date: June 30, 2025
 * Class: WEBD-3012
 * Coding Assignment 12: Web Component Library
 * Filename: Component_Text.stories.tsx
 * Description: This file defines Storybook stories for the Text component, including controls for customization.
 */

import type { Meta, StoryFn } from '@storybook/react-webpack5';
import Text from './Component_Text';

export default {
  title: 'ReactComponentLibrary/Text',
  component: Text,
  argTypes: {
    content: { control: 'text' },
    fontSize: { control: 'text' },
    color: { control: 'color' },
    disabled: { control: 'boolean' },
  },
} as Meta<typeof Text>;

const Template: StoryFn<typeof Text> = (args) => <Text {...args} />;

export const Default = Template.bind({});
Default.args = {
  content: 'Default Text',
  fontSize: '1rem',
  color: '#000',
  disabled: false,
  testIdPrefix: 'text',
};

export const Disabled = Template.bind({});
Disabled.args = {
  content: 'Disabled Text',
  fontSize: '1rem',
  color: '#000',
  disabled: true,
  testIdPrefix: 'text',
};
