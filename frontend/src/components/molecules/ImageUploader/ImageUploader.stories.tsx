import React from 'react';
import ImageUploader, { Props } from './ImageUploader';
import { Story, Meta } from '@storybook/react/types-6-0';

const Template: Story<Props> = (args) => <ImageUploader {...args} />;

export const Playground = Template.bind({});

Playground.args = {};

export const DefaultStory = () => (
  <ImageUploader image="" onFileDrop={() => console.log('test')} />
);

DefaultStory.storyName = 'Default';

export default {
  title: 'Molecules/ImageUploader',
  component: DefaultStory,
} as Meta;
