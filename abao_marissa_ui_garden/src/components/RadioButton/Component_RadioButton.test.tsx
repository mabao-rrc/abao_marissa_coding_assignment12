import React from 'react';
import { render, screen } from '@testing-library/react';
import RadioButton from './Component_RadioButton';

describe('RadioButton component', () => {
  it('renders and is visible', () => {
    render(<RadioButton label="Test Radio" testIdPrefix="radio" />);
    const radio = screen.getByTestId('radio');
    expect(radio).toBeVisible();
  });

  it('shows disabled styles when disabled', () => {
    render(<RadioButton label="Test Radio" disabled testIdPrefix="radio" />);
    const radio = screen.getByTestId('radio');
    expect(radio).toHaveStyle('opacity: 0.6');
    expect(radio).toHaveStyle('cursor: not-allowed');
  });
});
