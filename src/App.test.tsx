import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import ChildComponent from './ChildComponent';

/*test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});*/

test('renders parent component with child component', () => {

  render(<App />);
  const parentElement = screen.getByText(/Isuru Kottahachchi/i);
  expect(parentElement).toBeInTheDocument();

});
