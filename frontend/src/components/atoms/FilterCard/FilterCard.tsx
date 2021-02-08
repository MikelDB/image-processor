import React from 'react';
import {
  PropertyContainer,
  PropertyStyledInput,
  PropertyStyledLabel,
} from './assets/styles';
import { Filter, Property } from 'types';
import { Card } from 'components';

export type Props = {
  filter: Filter;
  addFilter?: (filter: Filter) => void;
  updateFilter?: (filter: Filter, property: Property) => void;
  isListElement?: boolean;
};

const FilterCard: React.FC<Props> = ({
  filter,
  addFilter,
  updateFilter,
  isListElement = false,
}) => {
  return (
    <Card
      title={filter.name}
      action={addFilter ? () => addFilter(filter) : undefined}
      isListElement={isListElement}
    >
      <>
        {filter.properties.map((property) => (
          <PropertyContainer key={property.name}>
            <PropertyStyledLabel htmlFor="Name">
              {property.name}
            </PropertyStyledLabel>
            <PropertyStyledInput
              type="number"
              id="Name"
              name="Name"
              value={property.value}
              onChange={
                updateFilter
                  ? (event) =>
                      updateFilter(filter, {
                        name: property.name,
                        value: Number(event.target.value),
                      })
                  : undefined
              }
            />
          </PropertyContainer>
        ))}
      </>
    </Card>
  );
};

export default FilterCard;
