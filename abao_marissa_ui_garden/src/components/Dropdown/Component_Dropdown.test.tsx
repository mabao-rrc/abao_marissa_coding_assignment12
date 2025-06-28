import React from 'react';
import { render, screen } from '@testing-library/react';
import Dropdown from './Component_Dropdown';

describe('Dropdown component', () => {
  const options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
  ];

  it('renders and is visible', () => {
    render(<Dropdown options={options} testIdPrefix="dropdown" />);
    const dropdown = screen.getByTestId('dropdown');
    expect(dropdown).toBeVisible();
  });

  it('has reduced opacity and no pointer cursor when disabled', () => {
    render(<Dropdown options={options} disabled testIdPrefix="dropdown" />);
    const dropdown = screen.getByTestId('dropdown');
    expect(dropdown).toHaveStyle('opacity: 0.6');
    expect(dropdown).toHaveStyle('cursor: not-allowed');
  });
});
