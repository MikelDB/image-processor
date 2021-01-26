import React from 'react';
import { ReactComponent as UploadIcon } from './assets/upload.svg';
import { Container, ImageContainer } from './assets/styles';

const UploadYourFile: React.FC = () => {
  return (
    <Container>
        <ImageContainer>
            <UploadIcon />
        </ImageContainer>
        <span>Drag & Drop files here or click to upload</span>
    </Container>
  );
};

export default UploadYourFile;
