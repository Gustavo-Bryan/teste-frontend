import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Button from './components/Button';
import Header from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Button />
  </React.StrictMode>,
);
