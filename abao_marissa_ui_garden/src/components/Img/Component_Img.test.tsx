import React from 'react';
import { render } from '@testing-library/react';
import Img from './Component_Img';

describe('Img component', () => {
  it('renders and is visible', () => {
    const { getByTestId } = render(
      <Img 
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/480px-No_image_available.svg.png" 
        alt="Placeholder" 
        testIdPrefix="img" 
      />
    );
    expect(getByTestId('img')).toBeVisible();
  });

  it('applies disabled styles', () => {
    const { getByTestId } = render(
      <Img 
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/480px-No_image_available.svg.png" 
        alt="Placeholder" 
        disabled 
        testIdPrefix="img" 
      />
    );
    const imgElement = getByTestId('img');
    expect(imgElement).toHaveStyle('opacity: 0.5');
    expect(imgElement).toHaveStyle('pointer-events: none');
  });
});
