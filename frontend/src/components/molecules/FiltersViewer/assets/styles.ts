import styled from 'styled-components';

export const Container = styled.div`
  min-width: 200px;
  max-height: 300px;
  padding: 4px;
  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;
