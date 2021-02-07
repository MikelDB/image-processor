import React from 'react';
import { Container, ImageContainer } from './assets/styles';
import { Card } from 'components';

type Props = {
  image: string;
};

const ImageHolder: React.FC<Props> = ({ image = '' }) => {
  return (
    <Container>
      <Card title="Processed Image" isListElement>
        <ImageContainer showBackground={!image}>
          {image && <img width="100%" src={image} alt="alt" />}
        </ImageContainer>
      </Card>
    </Container>
  );
};

export default ImageHolder;
