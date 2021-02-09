import styled from 'styled-components';

type StyledButtonProps = {
  active: boolean;
};

export const StyledButton = styled.button<StyledButtonProps>`
  border: 0;
  padding: 0;
  background-color: #282c34;
  height: 60px;
  width: 60px;
  border-radius: 30px 0 0 30px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.6);
  fill: #5a5a5a;
  cursor: pointer;
  &:hover {
    height: 60px;
    width: 66px;
    border-radius: 33px 0 0 33px;
    fill: #9f9f9f;
  }

  & > svg {
    transition: transform 1s;
    transform: ${({ active }): string => (active ? 'rotate(405deg)' : '')};
  }
`;
