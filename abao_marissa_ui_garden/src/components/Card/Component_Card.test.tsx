/**
 * Name: Marissa Abao
 * Submission Date: June 30, 2025
 * Class: WEBD-3012
 * Coding Assignment 12: Web Component Library
 * Filename: Component_Card.test.tsx
 * Description: This file defines Jest tests for the Card component.
 */

import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Card from './Component_Card';

describe('Card', () => {
  it('should render the card with title and content', () => {
    const { getByText } = render(
      <Card title="Test Title" content="Test Content" />
    );
    expect(getByText('Test Title')).toBeInTheDocument();
    expect(getByText('Test Content')).toBeInTheDocument();
  });

  it('should apply disabled styles when disabled is true', () => {
    const { getByTestId } = render(
      <Card title="Disabled" content="Disabled Content" disabled testIdPrefix="card" />
    );
    const card = getByTestId('card');
    expect(card).toHaveStyle('cursor: not-allowed');
    expect(card).toHaveStyle('opacity: 0.7');
  });
});
