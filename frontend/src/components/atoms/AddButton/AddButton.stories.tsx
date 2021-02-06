import React from 'react';
import AddButton, { Props } from './AddButton';
import { Story, Meta } from '@storybook/react/types-6-0';

const Template: Story<Props> = (args) => <AddButton {...args} />;

export const Playground = Template.bind({});

Playground.args = {
  onClick: () => console.log('asdasd'),
  active: false,
};

export const DefaultStory = () => (
  <AddButton onClick={() => console.log('hi')} active={false} />
);

DefaultStory.storyName = 'Default';

export default {
  title: 'Atoms/AddButton',
  component: DefaultStory,
} as Meta;
