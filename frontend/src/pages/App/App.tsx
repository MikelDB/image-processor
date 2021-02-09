import React, { useContext } from 'react';
import {
  ImageHolder,
  ImageUploader,
  FiltersViewer,
  SearchModal,
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
        <SearchModal addFilter={addFilter} />
      </MainContainer>
    </AppContainer>
  );
};

export default App;
