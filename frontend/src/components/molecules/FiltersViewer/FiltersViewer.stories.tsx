import React from 'react';
import FiltersViewer from './FiltersViewer';
import { Story, Meta } from '@storybook/react/types-6-0';
import { FiltersContext } from 'store';
import { Filter, Property } from 'types';

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

const Template: Story = (args) => (
  <FiltersContext.Provider value={context}>
    <FiltersViewer {...args} />
  </FiltersContext.Provider>
);

export const Playground = Template.bind({});

Playground.args = {};

export const DefaultStory = () => (
  <FiltersContext.Provider value={context}>
    <FiltersViewer />
  </FiltersContext.Provider>
);

DefaultStory.storyName = 'Default';

export default {
  title: 'Molecules/FiltersViewer',
  component: DefaultStory,
} as Meta;
