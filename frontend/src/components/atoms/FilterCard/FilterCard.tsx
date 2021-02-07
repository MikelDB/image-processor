import React, { useContext } from 'react';
import {
  PropertyContainer,
  PropertyStyledInput,
  PropertyStyledLabel,
} from './assets/styles';
import { Filter } from 'types';
import { FiltersContext } from 'store';
import { Card } from 'components';

export type Props = {
  filter: Filter;
  addFilter?: (filter: Filter) => void;
  isListElement?: boolean;
};

const FilterCard: React.FC<Props> = ({
  filter,
  addFilter,
  isListElement = false,
}) => {
  const { updateFilter } = useContext(FiltersContext);

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
              onChange={(event) =>
                updateFilter(filter, {
                  name: property.name,
                  value: property.value,
                })
              }
            />
          </PropertyContainer>
        ))}
      </>
    </Card>
  );
};

export default FilterCard;
