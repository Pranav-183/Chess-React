import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import BoardContextProvider from './BoardContext';
import MovesContextProvider from './MovesContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BoardContextProvider>
      <MovesContextProvider>
        <App />
      </MovesContextProvider>
    </BoardContextProvider>
  </React.StrictMode>
)