import React from 'react';
import ReactDOM from 'react-dom';
import ModeratorDisplay from './ModeratorDisplay';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ModeratorDisplay />, div);
  ReactDOM.unmountComponentAtNode(div);
});