import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Tool from './Tool';
import reportWebVitals from './reportWebVitals';

// Import HashRouter and other components from react-router-dom
import { HashRouter, Route, Routes } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/tool" element={<Tool />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
