/**
 * Name: Marissa Abao
 * Submission Date: June 30, 2025
 * Class: WEBD-3012
 * Coding Assignment 12: Web Component Library
 * Filename: Component_HeroImage.tsx
 * Description: This file defines the HeroImage component, which displays a large responsive image with optional overlay text.
 */

import React from 'react';
import styled from 'styled-components';
import { HeroImageProps } from './Component_HeroImage.types';

const Wrapper = styled.div<{ height?: string }>`
  position: relative;
  width: 100%;
  height: ${({ height }) => height || '400px'};
  overflow: hidden;
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const OverlayText = styled.div`
  position: absolute;
  bottom: 20px;
  left: 20px;
  color: white;
  font-size: 2rem;
  background: rgba(0,0,0,0.5);
  padding: 10px;
  border-radius: 4px;
`;

const HeroImage: React.FC<HeroImageProps> = ({
  src,
  alt,
  height,
  overlayText,
  testIdPrefix = 'heroimage',
}) => (
  <Wrapper height={height} data-testid={testIdPrefix}>
    <StyledImage src={src} alt={alt} />
    {overlayText && <OverlayText>{overlayText}</OverlayText>}
  </Wrapper>
);

export default HeroImage;
