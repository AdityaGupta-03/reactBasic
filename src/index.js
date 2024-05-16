import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//  This File uses index.css for styling the index.html
// Entry point in the index.html file
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // Uses Strict Mode : Used to catch the unsafe coding mistakes and throws the error
  <React.StrictMode>
    {/* Calling the App Component i.e App.jsx */}
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function to log results (for example: reportWebVitals(console.log))
reportWebVitals();
