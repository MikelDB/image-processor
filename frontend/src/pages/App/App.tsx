import React, { useContext, useState } from 'react';
import {
  ImageHolder,
  ImageUploader,
  FiltersViewer,
  ModulesSearcher,
  AddButton,
} from 'components';
import { AppContainer, MainContainer } from './assets/styles';
import { ImagesContext, FiltersContext } from 'store';

const App: React.FC = () => {
  const { imageToProcess, storeAndProcessImage, processedImage } = useContext(
    ImagesContext
  );
  const { filters, addFilter, updateFilter, removeFilter } = useContext(
    FiltersContext
  );
  const [showSearcher, setShowSearcher] = useState<boolean>(false);

  const saveImageAndPush = (file: File) => {
    storeAndProcessImage(file, filters);
  };

  return (
    <AppContainer>
      <MainContainer>
        <ImageUploader image={imageToProcess} onFileDrop={saveImageAndPush} />
        <FiltersViewer
          filters={filters}
          updateFilter={updateFilter}
          removeFilter={removeFilter}
        />
        <ImageHolder image={processedImage} />
        <ModulesSearcher show={showSearcher} addFilter={addFilter} />
        <AddButton
          active={showSearcher}
          onClick={() => setShowSearcher(!showSearcher)}
        />
      </MainContainer>
    </AppContainer>
  );
};

export default App;
