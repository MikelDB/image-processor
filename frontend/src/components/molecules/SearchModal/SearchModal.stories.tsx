import React from 'react';
import SearchModal, { Props } from './SearchModal';
import { Story, Meta } from '@storybook/react/types-6-0';
import { SmallSizeDecorator } from 'utilities';
import { action } from '@storybook/addon-actions';

const Template: Story<Props> = (args) => <SearchModal {...args} />;

export const Playground = Template.bind({});

Playground.args = {
  addFilter: action('add-filter'),
};

export const DefaultStory = () => (
  <SearchModal addFilter={action('add-filter')} />
);

DefaultStory.storyName = 'Default';

export default {
  title: 'Molecules/SearchModal',
  component: DefaultStory,
  decorators: [SmallSizeDecorator],
} as Meta;
