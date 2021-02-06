import React, { useContext } from 'react';
import { FilterCard } from '../../atoms/FilterCard';
import { Filter } from '../../../types';
import { Container } from './assets/styles';
import { FiltersContext } from '../../../store';

const FiltersViewer: React.FC = () => {
  const { filters } = useContext(FiltersContext);

  return (
    <Container>
      {filters?.map(
        (filter: Filter, index): React.ReactElement => (
          <FilterCard filter={filter} key={`${filter.name}-${index}`} />
        )
      )}
    </Container>
  );
};

export default FiltersViewer;
