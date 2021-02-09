import React from 'react';
import FilterCard, { Props, CardActionProps } from './Card';
import { Story, Meta } from '@storybook/react/types-6-0';
import { SmallSizeDecorator } from 'utilities';
import { action } from '@storybook/addon-actions';
import { ReactComponent as AddSVG } from './assets/iconmonstr-plus-2.svg';

const Template: Story<Props> = (args) => <FilterCard {...args} />;

export const Playground = Template.bind({});
Playground.args = {
  title: 'canny',
  isListElement: false,
  action: {
    onClick: action('action-click'),
    ActionIcon: AddSVG,
  },
};

export const Default = Template.bind({});
Default.args = {
  title: 'canny',
  isListElement: false,
  action: {
    onClick: action('action-click'),
    ActionIcon: AddSVG,
  },
};

export const ForList = Template.bind({});
ForList.args = {
  title: 'canny',
  isListElement: true,
  action: {
    onClick: action('action-click'),
    ActionIcon: AddSVG,
  },
};

export default {
  title: 'Atoms/Card',
  component: Default,
  decorators: [SmallSizeDecorator],
} as Meta;
