import styled from 'styled-components';

type ImageContainerProps = {
  showBackground: boolean;
};

export const Container = styled.div`
  width: 400px;

  & > div {
    width: 100%;
  }
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
`;
