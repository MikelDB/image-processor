import React, { createContext, useState } from 'react';


export const ImagesContext = createContext({
    imageToProcess: '',
    processedImage: '',
    pushImage: (file: File) => console.log('initialize undefined'),
    storeImageToProcess: (fileURL: string) => console.log('initialize undefined'),
});

type GiftListContexProps = {
    children: React.ReactElement;
}

export const ImagesContextProvider: React.FC<GiftListContexProps> = ({children}) => {  
    const [ imageToProcess, setImageToProcess ] = useState('');
    const [ processedImage, setProcessedImage ] = useState('');

    const pushImage = (file: File) => {
        console.log('push', file);
        const formData = new FormData()
        formData.append('file', file)
        fetch('//0.0.0.0:5000/image/', {
            method: 'POST',
            body: formData
            }).then(response=>response.blob()).then(image => URL.createObjectURL(image)).then(url => setProcessedImage(url))
    }

    const storeImageToProcess = (fileURL: string) => {
        setImageToProcess(fileURL);
    }

    const context = { imageToProcess, storeImageToProcess, processedImage, pushImage };


    return (    
        <ImagesContext.Provider value={context}>      
            {children}    
        </ImagesContext.Provider>
    )
};