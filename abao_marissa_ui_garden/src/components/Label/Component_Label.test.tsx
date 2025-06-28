/**
 * Name: Marissa Abao
 * Submission Date: June 30, 2025
 * Class: WEBD-3012
 * Coding Assignment 12: Web Component Library
 * Filename: Component_Label.test.tsx
 * Description: This file defines Jest tests for the Label component.
 */

import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Label from './Component_Label';

describe('Label', () => {
  it('renders the label text', () => {
    const { getByText } = render(<Label text="Test Label" />);
    expect(getByText('Test Label')).toBeInTheDocument();
  });

  it('applies disabled styles when disabled', () => {
    const { getByTestId } = render(<Label text="Disabled" disabled testIdPrefix="label" />);
    const label = getByTestId('label');
    expect(label).toHaveStyle('cursor: not-allowed');
    expect(label).toHaveStyle('opacity: 0.7');
  });
});
