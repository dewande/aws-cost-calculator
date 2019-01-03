import React from 'react';
import ReactDOM from 'react-dom';
import DownloadButton from './DownloadButton';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<DownloadButton />, div);
  ReactDOM.unmountComponentAtNode(div);
});
