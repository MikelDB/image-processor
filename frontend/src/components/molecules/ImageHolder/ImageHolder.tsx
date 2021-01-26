import React, { useState } from 'react';
import { Container, ImageContainer } from './assets/styles';
import { UploadYourFile } from '../../atoms';

type Props = {
  image: string
  onFileDrop: (file: File, url: string) => void;
}

const ImageHolder: React.FC<Props> = ({image = '', onFileDrop}) => {

  const [dragging, setDragging] = useState(false);

  const dragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setDragging(true);
  }

  const dragEnter = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setDragging(true);
  }

  const dragLeave = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setDragging(false);
  }

  const fileDrop = (event: React.DragEvent<HTMLDivElement>) => {
      event.preventDefault();
      const files = event.dataTransfer.files;
      const reader = new FileReader () // FileReader interface to read the file
      reader.readAsDataURL (files[0])
      reader.onload = function() {
        onFileDrop(files[0], String(this.result))
      }
      setDragging(false);
  }

  return (
    <Container
      onDragOver={dragOver}
      onDragEnter={dragEnter}
      onDragLeave={dragLeave}
      onDrop={fileDrop}
      draggingBorder={dragging}
    >
      <ImageContainer showBackground={!image} >
        {image && <img width="100%" src={image} alt="alt"/>}
        {!image && <UploadYourFile />}
      </ImageContainer>
    </Container>
  );
};

export default ImageHolder;
