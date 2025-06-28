/**
 * Name: Marissa Abao
 * Submission Date: June 30, 2025
 * Class: WEBD-3012
 * Coding Assignment 12: Web Component Library
 * Filename: Component_Label.tsx
 * Description: This file defines the Label component with optional background color and disabled state.
 */

import React from 'react';
import styled from 'styled-components';
import { LabelProps } from './Component_Label.types';

const StyledLabel = styled.span<{ backgroundColor?: string; disabled?: boolean }>`
  display: inline-block;
  padding: 4px 8px;
  font-size: 1rem;
  border-radius: 4px;
  background-color: ${({ backgroundColor, disabled }) =>
    disabled ? '#ccc' : backgroundColor || '#28a745'};
  color: white;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'default')};
  opacity: ${({ disabled }) => (disabled ? 0.7 : 1)};
`;

const Label: React.FC<LabelProps> = ({
  text,
  backgroundColor,
  disabled = false,
  testIdPrefix = 'label',
}) => (
  <StyledLabel
    backgroundColor={backgroundColor}
    disabled={disabled}
    data-testid={testIdPrefix}
  >
    {text}
  </StyledLabel>
);

export default Label;
