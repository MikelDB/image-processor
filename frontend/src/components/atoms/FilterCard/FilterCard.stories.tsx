import React from 'react';
import FilterCard, { Props } from './FilterCard';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Filter, Property } from 'types';
import { SmallSizeDecorator } from 'utilities';

const mockFilter = {
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
};

const Template: Story<Props> = (args) => <FilterCard {...args} />;

export const Playground = Template.bind({});

Playground.args = {
  filter: {
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
  addFilter: (filter: Filter) => console.log(filter),
  updateFilter: (filter: Filter, property: Property) =>
    console.log('update filter not implemented', filter, property),
};

export const DefaultStory = () => (
  <FilterCard
    filter={mockFilter}
    addFilter={(filter: Filter) => console.log(filter)}
    updateFilter={(filter: Filter, property: Property) =>
      console.log('update filter not implemented', filter, property)
    }
  />
);

export const ForList = () => (
  <FilterCard
    filter={mockFilter}
    addFilter={(filter: Filter) => console.log(filter)}
    updateFilter={(filter: Filter, property: Property) =>
      console.log('update filter not implemented', filter, property)
    }
    isListElement
  />
);

DefaultStory.storyName = 'Default';

export default {
  title: 'Atoms/FilterCard',
  component: DefaultStory,
  decorators: [SmallSizeDecorator],
} as Meta;
