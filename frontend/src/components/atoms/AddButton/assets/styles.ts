import styled from 'styled-components';

type StyledButtonProps = {
  active: boolean;
};

export const StyledButton = styled.button<StyledButtonProps>`
  position: fixed;
  bottom: 40px;
  right: 40px;
  border: 0;
  padding: 0;
  background-color: #40454f;
  height: 60px;
  width: 60px;
  border-radius: 30px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.6);
  fill: white;
  cursor: pointer;
  transition: transform 2s;
  transform: ${({ active }): string => (active ? 'rotate(405deg)' : '')};
  &:hover {
    height: 66px;
    width: 66px;
    border-radius: 33px;
    bottom: 37px;
    right: 37px;
  }
`;
