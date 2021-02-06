import styled from 'styled-components';

type ContainerProps = {
  show: boolean;
};

export const Container = styled.div<ContainerProps>`
  display: ${({ show }): string => (!show ? 'none' : 'block')};
  position: fixed;
  bottom: 110px;
  right: 110px;
  height: 400px;
  width: 250px;
  background-color: #40454f;
  border-radius: 4px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.6);
`;
