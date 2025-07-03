import type { Meta, StoryFn } from '@storybook/react-webpack5';
import HeroImage from './Component_HeroImage';

const meta: Meta<typeof HeroImage> = {
  title: 'ReactComponentLibrary/HeroImage',
  component: HeroImage,
};
export default meta;

const Template: StoryFn<typeof HeroImage> = (args) => <HeroImage {...args} />;

export const Default = Template.bind({});
Default.args = {
  src: 'https://upload.wikimedia.org/wikipedia/commons/6/63/Wikipedia-logo.png',
  alt: 'Placeholder Hero',
  overlayText: 'Welcome to Our Site',
};

export const CustomHeight = Template.bind({});
CustomHeight.args = {
  src: 'https://upload.wikimedia.org/wikipedia/commons/6/63/Wikipedia-logo.png',
  alt: 'Placeholder Hero',
  overlayText: 'Custom Height Example',
  height: '600px',
};
