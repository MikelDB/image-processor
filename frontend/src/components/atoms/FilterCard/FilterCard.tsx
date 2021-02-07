import React, { useContext } from 'react';
import {
  Card,
  PropertyContainer,
  PropertyStyledInput,
  PropertyStyledLabel,
  TitleContainer,
  ContentContainer,
  AddButton,
} from './assets/styles';
import { Filter } from 'types';
import { FiltersContext } from 'store';
import { ReactComponent as AddSVG } from './assets/iconmonstr-plus-2.svg';

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
    <Card isListElement={isListElement}>
      <TitleContainer>
        <h4>{filter.name}</h4>
        {addFilter && (
          <AddButton onClick={() => addFilter(filter)}>
            <AddSVG />
          </AddButton>
        )}
      </TitleContainer>
      <ContentContainer>
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
      </ContentContainer>
    </Card>
  );
};

export default FilterCard;
