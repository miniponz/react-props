import React from 'react';
import { render } from 'react-dom';
import App from './components/App';

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];
render(
  <App colors={colors}/>,
  document.getElementById('root')
);
