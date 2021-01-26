import React, { useContext } from 'react';
import { ImageHolder, ImageUploader } from '../../components/molecules';
import { AppContainer, MainContainer } from './assets/styles';
import { ImagesContext } from '../../store';

const App: React.FC = () => {
  const { imageToProcess, storeImageToProcess, processedImage, pushImage } = useContext(ImagesContext);

  const saveImageAndPush = (file: File, url: string) => {
    storeImageToProcess(url);
    pushImage(file);
  }

  return (
    <AppContainer>
      <MainContainer>
        <ImageUploader image={imageToProcess} onFileDrop={saveImageAndPush}/>
        <ImageHolder image={processedImage} onFileDrop={saveImageAndPush}/>
      </MainContainer>
    </AppContainer>
  );
}

export default App;
