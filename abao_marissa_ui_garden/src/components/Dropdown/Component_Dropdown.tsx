/**
 * Name: Marissa Abao
 * Submission Date: June 30, 2025
 * Class: WEBD-3012
 * Coding Assignment 12: Web Component Library
 * Filename: Component_Dropdown.tsx
 * Description: This file defines the Dropdown component with optional disabled state and customizable options.
 */

import React from 'react';
import styled from 'styled-components';
import { DropdownProps } from './Component_Dropdown.types';

const StyledSelect = styled.select<{ disabled?: boolean }>`
  padding: 8px;
  font-size: 1rem;
  border-radius: 4px;
  border: 1px solid #ccc;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
  width: 100%;
  max-width: 300px;
`;

const Dropdown: React.FC<DropdownProps> = ({
  options,
  disabled = false,
  onChange,
  testIdPrefix = 'dropdown',
}) => (
  <StyledSelect
    disabled={disabled}
    onChange={onChange}
    data-testid={testIdPrefix}
  >
    {options.map((option) => (
      <option key={option.value} value={option.value}>
        {option.label}
      </option>
    ))}
  </StyledSelect>
);

export default Dropdown;
