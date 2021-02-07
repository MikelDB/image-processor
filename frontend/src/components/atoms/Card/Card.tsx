import React from 'react';
import {
  Container,
  TitleContainer,
  ContentContainer,
  AddButton,
} from './assets/styles';
import { ReactComponent as AddSVG } from './assets/iconmonstr-plus-2.svg';

export type Props = {
  title: string;
  action?: () => void;
  children?: React.ReactElement;
  isListElement: boolean;
};

const Card: React.FC<Props> = ({ title, action, children, isListElement }) => {
  return (
    <Container isListElement={isListElement}>
      <TitleContainer>
        <h4>{title}</h4>
        {action && (
          <AddButton onClick={() => action()}>
            <AddSVG />
          </AddButton>
        )}
      </TitleContainer>
      <ContentContainer>{children}</ContentContainer>
    </Container>
  );
};

export default Card;
