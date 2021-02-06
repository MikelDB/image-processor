import React, { useContext } from 'react';
import { Container, PropertyContainer, PropertyStyledInput, PropertyStyledLabel } from './assets/styles';
import { Filter } from 'types';
import { FiltersContext } from 'store';

export type Props = {
    filter: Filter;
};

const FilterCard: React.FC<Props> = ({filter}) => {
  const { updateFilter } = useContext(FiltersContext);

  return (
    <Container>
        <h3>{filter.name}</h3>
        {
            filter.properties.map((property) => (
              <PropertyContainer key={property.name}>
                  <PropertyStyledLabel htmlFor="Name">{property.name}</PropertyStyledLabel>
                  <PropertyStyledInput type="number" id="Name" name="Name" value={property.value} onChange={(event) => updateFilter(filter, {name: property.name, value: property.value})}/>
              </PropertyContainer>
            ))
        }
    </Container>
  );
};

export default FilterCard;
