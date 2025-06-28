/**
 * Name: Marissa Abao
 * Submission Date: June 30, 2025
 * Class: WEBD-3012
 * Coding Assignment 12: Web Component Library
 * Filename: Component_Card.tsx
 * Description: This file defines the Card component with a title, content,
 * and optional background color and disabled state using styled-components.
 */

import React from 'react';
import styled from 'styled-components';
import { CardProps } from './Component_Card.types';

const StyledCard = styled.div<{ backgroundColor?: string; disabled?: boolean }>`
  padding: 20px;
  border-radius: 8px;
  background-color: ${({ backgroundColor, disabled }) =>
    disabled ? '#ccc' : (backgroundColor || '#f5f5f5')};
  color: ${({ disabled }) => (disabled ? '#666' : '#000')};
  opacity: ${({ disabled }) => (disabled ? 0.7 : 1)};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'default')};
  width: 100%;
  max-width: 400px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  transition: background-color 0.3s ease;
`;

const Card: React.FC<CardProps> = ({
  title,
  content,
  backgroundColor,
  disabled = false,
  testIdPrefix = 'card'
}) => {
  return (
    <StyledCard backgroundColor={backgroundColor} disabled={disabled} data-testid={`${testIdPrefix}`}>
      <h2>{title}</h2>
      <p>{content}</p>
    </StyledCard>
  );
};

export default Card;
