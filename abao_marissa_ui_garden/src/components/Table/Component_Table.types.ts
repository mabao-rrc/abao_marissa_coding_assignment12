/**
 * Name: Marissa Abao
 * Submission Date: June 30, 2025
 * Class: WEBD-3012
 * Coding Assignment 12: Web Component Library
 * Filename: Component_Table.types.ts
 * Description: This file defines the props type for the Table component.
 */

export interface TableProps {
  testIdPrefix?: string;
  children: React.ReactNode;
  disabled?: boolean;
}
