import React, { useState } from 'react';
import { Container, ImageContainer, UploadContainer, UploadImageContainer } from './assets/styles';
import { ReactComponent as UploadIcon } from './assets/upload.svg';


export type Props = {
  image: string
  onFileDrop: (file: File) => void;
}

const ImageUploader: React.FC<Props> = ({image = '', onFileDrop}) => {

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
      onFileDrop(files[0]);
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
        {!image && (
          <UploadContainer>
            <UploadImageContainer>
              <UploadIcon />
            </UploadImageContainer>
            <span>Drag & Drop files here or click to upload</span>
          </UploadContainer>
        )}
      </ImageContainer>
    </Container>
  );
};

export default ImageUploader;
