/**
 * Name: Marissa Abao
 * Submission Date: June 30, 2025
 * Class: WEBD-3012
 * Coding Assignment 12: Web Component Library
 * Filename: Component_Card.types.ts
 * Description: This file defines the props for the Card component.
 */

export interface CardProps {
  title: string;
  content: string;
  backgroundColor?: string;
  disabled?: boolean;
  testIdPrefix?: string;
}
