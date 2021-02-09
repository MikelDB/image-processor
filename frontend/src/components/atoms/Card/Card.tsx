import React from 'react';
import {
  Container,
  TitleContainer,
  ContentContainer,
  AddButton,
} from './assets/styles';

export type CardActionProps = {
  onClick: () => void;
  ActionIcon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  isBig?: boolean;
};

export type Props = {
  title: string;
  action?: CardActionProps;
  children?: React.ReactElement;
  isListElement: boolean;
};

const Card: React.FC<Props> = ({ title, action, children, isListElement }) => {
  return (
    <Container isListElement={isListElement}>
      <TitleContainer>
        <h4>{title}</h4>
        {action && (
          <AddButton onClick={() => action.onClick()}>
            <action.ActionIcon />
          </AddButton>
        )}
      </TitleContainer>
      <ContentContainer>{children}</ContentContainer>
    </Container>
  );
};

export default Card;
