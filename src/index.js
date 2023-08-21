import React from 'react';
import ReactDOM from 'react-dom/client';
import Nav from "./Nav.js"
import MainContent from './MainContent.js';

//Using create root method to render components in webpage
const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(
  <div>
    <Nav />
    <MainContent />
  </div>
)