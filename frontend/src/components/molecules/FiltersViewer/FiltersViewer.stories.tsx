import React from 'react';
import FiltersViewer, { Props } from './FiltersViewer';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Filter, Property } from 'types';
import { SmallSizeDecorator } from 'utilities';

const filters = [
  {
    name: 'canny',
    properties: [
      {
        name: 'threshold1',
        value: 100,
      },
      {
        name: 'threshold2',
        value: 180,
      },
    ],
  },
  {
    name: 'canny',
    properties: [
      {
        name: 'threshold1',
        value: 100,
      },
      {
        name: 'threshold2',
        value: 180,
      },
    ],
  },
  {
    name: 'canny',
    properties: [
      {
        name: 'threshold1',
        value: 100,
      },
      {
        name: 'threshold2',
        value: 180,
      },
    ],
  },
];

const Template: Story<Props> = (args) => <FiltersViewer {...args} />;

export const Playground = Template.bind({});

Playground.args = {
  filters: filters,
  updateFilter: (filter: Filter, property: Property) => console.log('asdasd'),
};

export const DefaultStory = () => (
  <FiltersViewer
    filters={filters}
    updateFilter={(filter: Filter, property: Property) => console.log('asdasd')}
  />
);

DefaultStory.storyName = 'Default';

export default {
  title: 'Molecules/FiltersViewer',
  component: DefaultStory,
  decorators: [SmallSizeDecorator],
} as Meta;
