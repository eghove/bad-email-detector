import React from 'react';
import ReactDOM from 'react-dom';
import TextForm from './TextForm';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TextForm />, div);
  ReactDOM.unmountComponentAtNode(div);
});