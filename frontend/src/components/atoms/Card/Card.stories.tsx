import React from 'react';
import FilterCard, { Props } from './Card';
import { Story, Meta } from '@storybook/react/types-6-0';
import { SmallSizeDecorator } from 'utilities';

const Template: Story<Props> = (args) => <FilterCard {...args} />;

export const Playground = Template.bind({});
Playground.args = {
  title: 'canny',
  isListElement: false,
  action: () => console.log('action'),
};

export const Default = Template.bind({});
Default.args = {
  title: 'canny',
  isListElement: false,
  action: () => console.log('action'),
};

export const ForList = Template.bind({});
ForList.args = {
  title: 'canny',
  isListElement: true,
  action: () => console.log('action'),
};

export default {
  title: 'Atoms/Card',
  component: Default,
  decorators: [SmallSizeDecorator],
} as Meta;
