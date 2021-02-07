import React from 'react';
import ModulesSearcher, { Props } from './ModulesSearcher';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Filter } from 'types';

const Template: Story<Props> = (args) => <ModulesSearcher {...args} />;

export const Playground = Template.bind({});

Playground.args = {};

export const DefaultStory = () => (
  <ModulesSearcher show addFilter={(filter: Filter) => console.log(filter)} />
);

DefaultStory.storyName = 'Default';

export default {
  title: 'Molecules/ModulesSearcher',
  component: DefaultStory,
} as Meta;
