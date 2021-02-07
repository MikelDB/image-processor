import styled from 'styled-components';
import { Story } from '@storybook/react/types-6-0';

const Container = styled.div`
  max-width: 400px;
`;

export const SmallSizeDecorator = (StoryToDecorate: Story) => (
  <Container>
    <StoryToDecorate />
  </Container>
);
