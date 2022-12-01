import React from 'react';
import ReactDom from 'react-dom/client';
import './index.css';
import App from './App';
import Heading from './Heading';

const root = ReactDom.createRoot(document.getElementById('root'));

root.render(
 <React.StrictMode>
  <Heading/>
  <App/>
 </React.StrictMode>
)