import React, { useContext, useState } from 'react';
import {
  ImageHolder,
  ImageUploader,
  FiltersViewer,
  ModulesSearcher,
} from '../../components/molecules';
import { AddButton } from '../../components/atoms';
import { AppContainer, MainContainer } from './assets/styles';
import { ImagesContext, FiltersContext } from '../../store';

const App: React.FC = () => {
  const { imageToProcess, storeAndProcessImage, processedImage } = useContext(
    ImagesContext
  );
  const { filters } = useContext(FiltersContext);
  const [showSearcher, setShowSearcher] = useState<boolean>(false);

  const saveImageAndPush = (file: File) => {
    storeAndProcessImage(file, filters);
  };

  return (
    <AppContainer>
      <MainContainer>
        <ImageUploader image={imageToProcess} onFileDrop={saveImageAndPush} />
        <FiltersViewer />
        <ImageHolder image={processedImage} />
        <ModulesSearcher show={showSearcher} />
        <AddButton
          active={showSearcher}
          onClick={() => setShowSearcher(!showSearcher)}
        />
      </MainContainer>
    </AppContainer>
  );
};

export default App;