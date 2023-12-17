import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { StyleSheetManager } from 'styled-components';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StyleSheetManager shouldForwardProp={(prop) => !prop.startsWith('active')}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </StyleSheetManager>,
);


reportWebVitals();
