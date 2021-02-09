import React from 'react';
import { Container, ImageContainer } from './assets/styles';
import { Card, CardActionProps } from 'components';
import { ReactComponent as SaveIconSVG } from './assets/floppy-disk.svg';

type Props = {
  image: string;
};

const ImageHolder: React.FC<Props> = ({ image = '' }) => {
  const downloadImage = () => {
    const link = document.createElement('a');

    link.href = image;
    link.download = 'processed_image.png';

    document.body.appendChild(link);

    link.dispatchEvent(
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
        view: window,
      })
    );

    document.body.removeChild(link);
  };

  const cardAction: CardActionProps = {
    onClick: downloadImage,
    ActionIcon: SaveIconSVG,
  };

  return (
    <Container>
      <Card title="Processed Image" isListElement action={cardAction}>
        <ImageContainer showBackground={!image}>
          {image && <img width="100%" src={image} alt="alt" />}
        </ImageContainer>
      </Card>
    </Container>
  );
};

export default ImageHolder;
