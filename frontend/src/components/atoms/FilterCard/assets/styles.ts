import styled from 'styled-components';

type CardProps = {
  isListElement: boolean;
};

export const Card = styled.div<CardProps>`
  display: flex;
  flex-direction: column;
  border: 1px solid #505050;
  border-radius: ${({ isListElement }): string =>
    isListElement ? '0px' : '8px'};
  background-color: #5a5a5a;
  overflow: hidden;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.6);
`;

export const PropertyContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  min-width: 150px;
  align-items: center;
  margin: 2px 0;
  font-size: 14px;
`;

export const PropertyStyledInput = styled.input`
  max-width: 36px;
  max-height: 1.5em;
  background-color: #282c34;
  color: white;
  border: 1px solid black;
  border-radius: 16px;
  text-align: center;
`;

export const PropertyStyledLabel = styled.label`
  text-transform: capitalize;
`;
