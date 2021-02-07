import React from 'react';
import { FilterCard } from 'components/atoms';
import { Container } from './assets/styles';
import * as filters from 'actions';
import { Filter } from 'types';

export type Props = {
  show: boolean;
  addFilter: (filter: Filter) => void;
};

const ModulesSearcher: React.FC<Props> = ({ show, addFilter }) => {
  const formattedFilters = Object.entries(filters).map((element) => {
    return element[1];
  });

  return (
    <Container show={show}>
      {formattedFilters.map((filter) => (
        <FilterCard
          filter={filter}
          key={filter.name}
          addFilter={addFilter}
          isListElement
        />
      ))}
    </Container>
  );
};

export default ModulesSearcher;
