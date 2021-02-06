import styled from 'styled-components';

type ImageContainerProps = {
    showBackground: boolean;
}

export const Container = styled.div`
    width: 400px;
    border: 8px solid #ffffff;
    border-radius: 16px;
    padding: 8px;
`;

export const ImageContainer = styled.div<ImageContainerProps>`
    background-color: ${({showBackground}) => showBackground ? '#40454f' : 'transparent'};
    border-radius: 4px;
    height: ${({showBackground}) => !showBackground ? '100%' : '368px'};
    width: 100%;
    display: flex;
    align-items: center;
`;