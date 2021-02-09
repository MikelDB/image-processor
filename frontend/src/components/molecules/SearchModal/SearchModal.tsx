import React, { useState } from 'react';
import { Container, ContentContainer, ActionsContainer } from './assets/styles';
import { FilterCard, AddButton as AddButtons } from 'components';
import * as filters from 'actions';
import { Filter } from 'types';

export type Props = {
  addFilter: (filter: Filter) => void;
};

const SearchModal: React.FC<Props> = ({ addFilter }) => {
  const [showModal, setShowModal] = useState(false);

  const formattedFilters = Object.entries(filters).map((element) => {
    return element[1];
  });

  return (
    <Container show={showModal}>
      <ActionsContainer>
        <AddButtons
          onClick={() => setShowModal((prevState) => !prevState)}
          active={showModal}
        />
      </ActionsContainer>
      <ContentContainer>
        {formattedFilters.map((filter) => (
          <FilterCard
            filter={filter}
            key={filter.name}
            addFilter={() => addFilter(filter)}
            isListElement
          />
        ))}
      </ContentContainer>
    </Container>
  );
};

export default SearchModal;
