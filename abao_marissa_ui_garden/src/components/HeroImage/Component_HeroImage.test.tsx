import React from 'react';
import { render } from '@testing-library/react';
import HeroImage from './Component_HeroImage';

describe('HeroImage component', () => {
  it('renders and is visible', () => {
    const { getByTestId } = render(
      <HeroImage 
        src="https://upload.wikimedia.org/wikipedia/commons/6/63/Wikipedia-logo.png"
        alt="Test Hero"
        testIdPrefix="heroimage"
      />
    );
    expect(getByTestId('heroimage')).toBeVisible();
  });

  it('renders overlay text', () => {
    const { getByText } = render(
      <HeroImage 
        src="https://upload.wikimedia.org/wikipedia/commons/6/63/Wikipedia-logo.png"
        alt="Test Hero"
        overlayText="Overlay Text"
      />
    );
    expect(getByText('Overlay Text')).toBeVisible();
  });
});
