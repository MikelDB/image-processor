import styled from 'styled-components';

export const AppContainer = styled.div`
  background-color: #393939;
  background-image: linear-gradient(#313131 2px, transparent 2px),
    linear-gradient(90deg, #313131 2px, transparent 2px);
  background-size: 20px 20px, 20px 20px;
  background-position: -2px -2px, -2px -2px;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const MainContainer = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
