import React from 'react';
import { Container, ImageContainer } from './assets/styles';

type Props = {
  image: string
}

const ImageHolder: React.FC<Props> = ({image = ''}) => {
  return (
    <Container>
      <ImageContainer showBackground={!image} >
        {image && <img width="100%" src={image} alt="alt"/>}
      </ImageContainer>
    </Container>
  );
};

export default ImageHolder;
