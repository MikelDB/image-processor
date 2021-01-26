import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './pages/App';
import reportWebVitals from './reportWebVitals';
import { ImagesContextProvider } from './store';
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <ImagesContextProvider>
      <>
        <GlobalStyle />
        <App />
      </>
    </ImagesContextProvider>  
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
