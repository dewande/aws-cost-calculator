import React from 'react';
import ReactDOM from 'react-dom';
import Offers from './Offers';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Offers />, div);
  ReactDOM.unmountComponentAtNode(div);
});
