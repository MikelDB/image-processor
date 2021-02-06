import React from 'react';
import { FilterCard } from 'components/atoms';
import { Container } from './assets/styles';
import * as filters from 'actions';

export type Props = {
  show: boolean;
};

const ModulesSearcher: React.FC<Props> = ({ show }) => {
  const formattedFilters = Object.entries(filters).map((element) => {
    return element[1];
  });

  return (
    <Container show={show}>
      {formattedFilters.map((filter) => (
        <FilterCard filter={filter} key={filter.name} />
      ))}
    </Container>
  );
};

export default ModulesSearcher;
