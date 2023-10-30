import React from 'react';
import { render, screen } from '@testing-library/react';
import ChildComponent from './ChildComponent';


test('renders name and age', () => {
  

  const age = 24;
  const university = 'Isuru Kottahachchi';


  render(<ChildComponent age={age} university={university} />);


  const ageElement = screen.getByText(`Age: ${age}`);


  expect(ageElement).toBeInTheDocument();
});
