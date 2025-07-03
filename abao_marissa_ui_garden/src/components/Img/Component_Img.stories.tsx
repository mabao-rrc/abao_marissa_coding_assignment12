import type { Meta, StoryFn } from '@storybook/react-webpack5';
import Img from './Component_Img';

const meta: Meta<typeof Img> = {
  title: 'ReactComponentLibrary/Img',
  component: Img,
  argTypes: {
    width: { control: 'text' },
    height: { control: 'text' },
    disabled: { control: 'boolean' }
  }
};
export default meta;

const Template: StoryFn<typeof Img> = (args) => <Img {...args} />;

export const Default = Template.bind({});
Default.args = {
  src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/480px-No_image_available.svg.png',
  alt: 'Placeholder Image',
  width: '300px',
  height: '200px',
  disabled: false,
  testIdPrefix: 'img'
};

export const Disabled = Template.bind({});
Disabled.args = {
  src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/480px-No_image_available.svg.png',
  alt: 'Placeholder Image',
  width: '300px',
  height: '200px',
  disabled: true,
  testIdPrefix: 'img'
};
