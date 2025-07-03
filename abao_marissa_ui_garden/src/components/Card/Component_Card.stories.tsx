/**
 * Name: Marissa Abao
 * Submission Date: June 30, 2025
 * Class: WEBD-3012
 * Coding Assignment 12: Web Component Library
 * Filename: Component_Card.stories.tsx
 * Description: This file defines Storybook stories for the Card component.
 */

import type { Meta, StoryFn } from '@storybook/react-webpack5';
import Card from './Component_Card';

export default {
  title: 'ReactComponentLibrary/Card',
  component: Card,
  argTypes: {
    backgroundColor: { control: 'color' },
    title: { control: 'text' },
    content: { control: 'text' },
    disabled: { control: 'boolean' },
  },
} as Meta<typeof Card>;

const Template: StoryFn<typeof Card> = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Card Title',
  content: 'This is a sample card content.',
  backgroundColor: '#f5f5f5',
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  title: 'Disabled Card',
  content: 'This card is disabled.',
  disabled: true,
};
