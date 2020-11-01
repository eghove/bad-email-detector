import React from 'react';
import ReactDOM from 'react-dom';
import BusinessLogic from './BusinessLogic';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BusinessLogic />, div);
  ReactDOM.unmountComponentAtNode(div);
});