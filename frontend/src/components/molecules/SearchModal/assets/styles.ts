import styled from 'styled-components';

type ContainerProps = {
  show: boolean;
};

export const Container = styled.div<ContainerProps>`
  position: fixed;
  top: 0;
  right: ${({ show }): string => (show ? '0' : '-400px')};
  display: flex;
  flex-direction: row;
  height: 100vh;
  transition: right 1s;
  box-shadow: -2px 0 2;
`;

export const ActionsContainer = styled.div`
  padding: 32px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const AddButton = styled.button`
  border: 0;
  padding: 0;
  background-color: transparent;
  fill: white;
`;

export const ContentContainer = styled.div`
  width: 400px;
  background-color: rgba(93, 93, 93, 1);
  align-self: stretch;
`;
