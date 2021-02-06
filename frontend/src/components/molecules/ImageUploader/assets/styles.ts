import styled from 'styled-components';

type ImageContainerProps = {
  showBackground: boolean;
};

type ContainerProps = {
  draggingBorder: boolean;
};

export const Container = styled.div<ContainerProps>`
  width: 400px;
  border: ${({ draggingBorder }) =>
    draggingBorder ? '8px dashed #61dafb' : '8px solid #ffffff'};
  border-radius: 16px;
  padding: 8px;
`;

export const ImageContainer = styled.div<ImageContainerProps>`
  background-color: ${({ showBackground }) =>
    showBackground ? '#40454f' : 'transparent'};
  border-radius: 4px;
  height: ${({ showBackground }) => (!showBackground ? '100%' : '368px')};
  width: 100%;
  display: flex;
  align-items: center;
`;

export const UploadContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
`;

export const UploadImageContainer = styled.div`
  width: 60px;
  margin-bottom: 16px;
`;
