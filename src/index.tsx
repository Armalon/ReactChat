import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import observableChatMessages from './storage'

ReactDOM.render(
  // <React.StrictMode>
    <App chatMessages={observableChatMessages}/>
  // </React.StrictMode>
  ,
  document.getElementById('root') as HTMLElement
);
