import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/index.scss';
import App from './App';
import './assets/fonts/Caveat.ttf'
import { WordsContextComponent } from './context/WordsContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <WordsContextComponent>
    <App />
  </WordsContextComponent>
);

