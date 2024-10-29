// Importing React and ReactDOM
import React from 'react';
import ReactDOM from 'react-dom/client';

// Importing the main App component
import App from './App';

// Creating a root for rendering the app
const root = ReactDOM.createRoot(document.getElementById('root'));

// Rendering the App component into the root
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);