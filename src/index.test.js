import React from 'react';
import ReactDOM from 'react-dom/client';  // Correct import for React 18+
import App from './App';

test('renders without crashing', () => {
  const div = document.createElement('div');
  const root = ReactDOM.createRoot(div);
  root.render(<App />);
  root.unmount();
});
