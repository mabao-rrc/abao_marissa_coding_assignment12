/**
 * Name: Marissa Abao
 * Submission Date: June 30, 2025
 * Class: WEBD-3012
 * Coding Assignment 12: Web Component Library
 * Filename: Component_Button.tsx
 * Description: This file defines the Button component, which supports a label, optional click handler, and a disabled state.
 * Styled-components are used for styling and to ensure responsiveness and reusability.
 */

import React from 'react';
import styled from 'styled-components';
import { ButtonProps } from './Component_Button.types';

const StyledButton = styled.button<{ backgroundColor?: string; disabled?: boolean }>`
  padding: 10px 20px;
  font-size: 1rem;
  border: none;
  border-radius: 4px;
  color: white;
  background-color: ${({ backgroundColor, disabled }) => 
    disabled ? '#ccc' : (backgroundColor || '#007BFF')};
  cursor: ${({ disabled }) => disabled ? 'not-allowed' : 'pointer'};
  opacity: ${({ disabled }) => disabled ? 0.6 : 1};
  transition: background-color 0.3s ease;
  width: 100%;
  max-width: 300px;
`;

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  disabled = false,
  backgroundColor,
  testIdPrefix = 'button'
}) => {
  return (
    <StyledButton
      onClick={onClick}
      disabled={disabled}
      data-testid={testIdPrefix}
      backgroundColor={backgroundColor} // ✅ This is fine because styled-components consumes it
    >
      {label}
    </StyledButton>
  );
};

export default Button;
