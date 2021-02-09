import React from 'react';
import {
  PropertyContainer,
  PropertyStyledInput,
  PropertyStyledLabel,
} from './assets/styles';
import { Filter, Property } from 'types';
import { Card, CardActionProps } from 'components';
import { ReactComponent as AddSVG } from './assets/iconmonstr-plus-2.svg';
import { ReactComponent as RemoveSVG } from './assets/minus.svg';

export type Props = {
  filter: Filter;
  addFilter?: (filter: Filter) => void;
  removeFilter?: (filter: Filter) => void;
  updateFilter?: (filter: Filter, property: Property) => void;
  isListElement?: boolean;
};

const FilterCard: React.FC<Props> = ({
  filter,
  addFilter,
  removeFilter,
  updateFilter,
  isListElement = false,
}) => {
  const selectFilterAction = () => {
    if (addFilter) {
      return () => addFilter(filter);
    }

    if (removeFilter) {
      return () => removeFilter(filter);
    }

    return () => {};
  };

  const selectActionIcon = () => {
    if (addFilter) {
      return AddSVG;
    }

    if (removeFilter) {
      return RemoveSVG;
    }

    return AddSVG;
  };

  const getCardAction = (): CardActionProps | undefined => {
    if (!removeFilter && !addFilter) {
      return undefined;
    }

    return {
      onClick: selectFilterAction(),
      ActionIcon: selectActionIcon(),
    };
  };

  return (
    <Card
      title={filter.name}
      action={getCardAction()}
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
