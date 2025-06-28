import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from './Component_Button';

test('renders button and is visible', () => {
  render(<Button label="Test Button" onClick={() => {}} />);
  const button = screen.getByTestId('button');
  expect(button).toBeVisible();
});

test('button has grey background when disabled', () => {
  render(<Button label="Test Button" onClick={() => {}} disabled />);
  const button = screen.getByTestId('button');
  expect(button).toHaveStyle(`background-color: #ccc`);
});
