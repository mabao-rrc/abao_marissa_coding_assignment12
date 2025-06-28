/**
 * Name: Marissa Abao
 * Submission Date: June 30, 2025
 * Class: WEBD-3012
 * Coding Assignment 12: Web Component Library
 * Filename: Component_Text.tsx
 * Description: This file defines the Text component with customizable font size, color, and disabled state.
 */

import React from 'react';
import styled from 'styled-components';
import { TextProps } from './Component_Text.types';

const StyledText = styled.span<{ fontSize?: string; color?: string; disabled?: boolean }>`
  font-size: ${({ fontSize }) => fontSize || '1rem'};
  color: ${({ color, disabled }) => (disabled ? '#ccc' : color || '#000')};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'default')};
  opacity: ${({ disabled }) => (disabled ? 0.7 : 1)};
`;

const Text: React.FC<TextProps> = ({
  content,
  fontSize,
  color,
  disabled = false,
  testIdPrefix = 'text',
}) => (
  <StyledText
    fontSize={fontSize}
    color={color}
    disabled={disabled}
    data-testid={testIdPrefix}
  >
    {content}
  </StyledText>
);

export default Text;
