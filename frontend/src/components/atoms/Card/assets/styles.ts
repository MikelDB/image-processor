import styled from 'styled-components';

type ContainerProps = {
  isListElement: boolean;
};

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  border: 1px solid #505050;
  border-radius: ${({ isListElement }): string =>
    isListElement ? '0px' : '8px'};
  background-color: #5a5a5a;
  overflow: hidden;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.6);
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #505050;
  text-transform: capitalize;
  padding: 4px 8px;
`;

export const AddButton = styled.button`
  border: 0;
  padding: 0;
  background-color: #282c34;
  height: 1.5em;
  width: 1.5em;
  border-radius: 30px;
  padding: 3px;
  fill: #5a5a5a;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.6);
  & > svg {
    width: 100%;
    height: 100%;
  }

  &:active {
    fill: #9f9f9f;
  }
`;

export const ContentContainer = styled.div`
  padding: 8px;
`;
