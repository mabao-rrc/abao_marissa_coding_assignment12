/**
 * Name: Marissa Abao
 * Submission Date: June 30, 2025
 * Class: WEBD-3012
 * Coding Assignment 12: Web Component Library
 * Filename: Component_Text.test.tsx
 * Description: This file contains tests for the Text component, verifying visibility and disabled style behavior.
 */

import React from 'react';
import { render } from '@testing-library/react';
import Text from './Component_Text';

describe('Text component', () => {
  it('renders the text content and is visible', () => {
    const { getByTestId } = render(<Text content="Hello World" testIdPrefix="text" />);
    const textElement = getByTestId('text');
    expect(textElement).toBeVisible();
    expect(textElement).toHaveTextContent('Hello World');
  });

  it('applies disabled styles (grey color, reduced opacity)', () => {
    const { getByTestId } = render(
      <Text content="Disabled Text" disabled={true} testIdPrefix="text" />
    );
    const textElement = getByTestId('text');
    expect(textElement).toHaveStyle('color: #ccc');
    expect(textElement).toHaveStyle('opacity: 0.7');
  });
});
