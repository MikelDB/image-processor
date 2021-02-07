import styled from 'styled-components';

type ImageContainerProps = {
  showBackground: boolean;
  draggingBorder: boolean;
};

export const Container = styled.div`
  width: 400px;
`;

export const ImageContainer = styled.div<ImageContainerProps>`
  background-color: #393939;
  background-image: linear-gradient(#313131 2px, transparent 2px),
    linear-gradient(90deg, #313131 2px, transparent 2px);
  background-size: 20px 20px, 20px 20px;
  background-position: -2px -2px, -2px -2px;
  border-radius: 4px;
  height: ${({ showBackground }) => (!showBackground ? '100%' : '368px')};
  width: 100%;
  display: flex;
  align-items: center;
  border: ${({ draggingBorder }) =>
    draggingBorder ? '4px dashed #313131' : 'none'};
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
