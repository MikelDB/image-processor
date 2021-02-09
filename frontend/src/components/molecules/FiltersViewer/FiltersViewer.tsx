import React from 'react';
import { FilterCard, Card } from 'components';
import { Filter, Property } from 'types';
import { Container } from './assets/styles';

export type Props = {
  filters: Filter[];
  updateFilter: (filter: Filter, property: Property) => void;
  removeFilter: (filter: Filter) => void;
};

const FiltersViewer: React.FC<Props> = ({
  filters,
  updateFilter,
  removeFilter,
}) => {
  return (
    <Card title="Actions to carry" isListElement>
      <Container>
        {filters?.map(
          (filter: Filter, index): React.ReactElement => (
            <FilterCard
              filter={filter}
              key={`${filter.name}-${index}`}
              updateFilter={updateFilter}
              isListElement
              removeFilter={() => removeFilter(filter)}
            />
          )
        )}
      </Container>
    </Card>
  );
};

export default FiltersViewer;
