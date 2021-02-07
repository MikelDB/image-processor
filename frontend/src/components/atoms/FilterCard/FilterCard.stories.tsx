import React from 'react';
import FilterCard, { Props } from './FilterCard';
import { Story, Meta } from '@storybook/react/types-6-0';
import { FiltersContext } from 'store';
import { Filter, Property } from 'types';
import { SmallSizeDecorator } from 'utilities';

const context = {
  filters: [
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
  ],
  addFilter: (filter: Filter) => console.log('add filter undefined', filter),
  removeFilter: (filterId: string) =>
    console.log('remove filter undefined', filterId),
  updateFilter: (filter: Filter, property: Property) =>
    console.log('update filter not implemented', filter, property),
};

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

const Template: Story<Props> = (args) => (
  <FiltersContext.Provider value={context}>
    <FilterCard {...args} />
  </FiltersContext.Provider>
);

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
};

export const DefaultStory = () => (
  <FiltersContext.Provider value={context}>
    <FilterCard
      filter={mockFilter}
      addFilter={(filter: Filter) => console.log(filter)}
    />
  </FiltersContext.Provider>
);

export const ForList = () => (
  <FiltersContext.Provider value={context}>
    <FilterCard
      filter={mockFilter}
      addFilter={(filter: Filter) => console.log(filter)}
      isListElement
    />
  </FiltersContext.Provider>
);

DefaultStory.storyName = 'Default';

export default {
  title: 'Atoms/FilterCard',
  component: DefaultStory,
  decorators: [SmallSizeDecorator],
} as Meta;
