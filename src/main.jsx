import { Buffer } from 'buffer';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

window.Buffer = Buffer;

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
