/**
 * Name: Marissa Abao
 * Submission Date: June 30, 2025
 * Class: WEBD-3012
 * Coding Assignment 12: Web Component Library
 * Filename: Component_Img.tsx
 * Description: This file defines the Img component with support for width, height, and disabled states using styled-components.
 */

import React from 'react';
import styled from 'styled-components';
import { ImgProps } from './Component_Img.types';

const StyledImg = styled.img<{ disabled?: boolean }>`
  display: block;
  width: ${({ width }) => width || '100%'};
  height: ${({ height }) => height || 'auto'};
  object-fit: cover;
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  pointer-events: ${({ disabled }) => (disabled ? 'none' : 'auto')};
  border-radius: 4px;
`;

const Img: React.FC<ImgProps> = ({
  src,
  alt,
  width,
  height,
  disabled = false,
  testIdPrefix = 'img',
}) => (
  <StyledImg
    src={src}
    alt={alt}
    width={width}
    height={height}
    disabled={disabled}
    data-testid={testIdPrefix}
  />
);

export default Img;
