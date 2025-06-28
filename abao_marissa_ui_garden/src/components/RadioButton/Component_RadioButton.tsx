/**
 * Name: Marissa Abao
 * Submission Date: June 30, 2025
 * Class: WEBD-3012
 * Coding Assignment 12: Web Component Library
 * Filename: Component_RadioButton.tsx
 * Description: This file defines the RadioButton component with a label, optional change handler, and a disabled state.
 * Styled-components are used for styling and responsiveness.
 */

import React from 'react';
import styled from 'styled-components';
import { RadioButtonProps } from './Component_RadioButton.types';

const StyledRadio = styled.label<{ disabled?: boolean }>`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
  font-size: 1rem;

  input {
    cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  }
`;

const RadioButton: React.FC<RadioButtonProps> = ({
  label,
  onChange,
  disabled = false,
  testIdPrefix = 'radio'
}) => {
  return (
    <StyledRadio disabled={disabled} data-testid={testIdPrefix}>
      <input
        type="radio"
        onChange={onChange}
        disabled={disabled}
      />
      {label}
    </StyledRadio>
  );
};

export default RadioButton;
