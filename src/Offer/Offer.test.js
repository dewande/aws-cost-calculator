import React from 'react';
import ReactDOM from 'react-dom';
import Offer from './Offer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Offer />, div);
  ReactDOM.unmountComponentAtNode(div);
});
