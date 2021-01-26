import styled from 'styled-components';

type ImageContainerProps = {
    showBackground: boolean;
}

type ContainerProps = {
    draggingBorder: boolean;
}

export const Container = styled.div<ContainerProps>`
    height: 400px;
    width: 400px;
    border: ${({draggingBorder}) => draggingBorder ? '8px dashed #61dafb' : '8px solid #ffffff'};
    border-radius: 16px;
    padding: 8px;
`;

export const ImageContainer = styled.div<ImageContainerProps>`
    background-color: ${({showBackground}) => showBackground ? '#40454f' : 'transparent'};
    border-radius: 4px;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
`;