import React, { createContext, useState } from 'react';
import { Filter } from '../../types';

export const ImagesContext = createContext({
  imageToProcess: '',
  processedImage: '',
  pushImage: (file: File, filters: Filter[]) =>
    console.log('initialize undefined'),
  storeAndProcessImage: (file: File, filters: Filter[]) =>
    console.log('initialize undefined'),
  storeImageToProcess: (file: File) => console.log('initialize undefined'),
});

type GiftListContexProps = {
  children: React.ReactElement;
};

export const ImagesContextProvider: React.FC<GiftListContexProps> = ({
  children,
}) => {
  const [imageToProcess, setImageToProcess] = useState('');
  const [imageToProcessFile, setImageToProcessFile] = useState(
    new File([''], 'filename')
  );
  const [processedImage, setProcessedImage] = useState('');

  const pushImage = (file: File, filters: Filter[]) => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('json', JSON.stringify(filters));
    fetch('//0.0.0.0:5000/image/process', {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.blob())
      .then((image) => URL.createObjectURL(image))
      .then((url) => setProcessedImage(url));
  };

  const storeImageToProcess = (file: File) => {
    setImageToProcessFile(file);
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      setImageToProcess(String(this.result));
    };
  };

  const storeAndProcessImage = (file: File, filters: Filter[]) => {
    storeImageToProcess(file);
    pushImage(file, filters);
  };

  const context = {
    imageToProcess,
    storeImageToProcess,
    processedImage,
    pushImage,
    storeAndProcessImage,
  };

  return (
    <ImagesContext.Provider value={context}>{children}</ImagesContext.Provider>
  );
};
