import React from 'react';
import styled from 'styled-components';
import { TableProps } from './Component_Table.types';

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const StyledRow = styled.tr``;

const StyledCell = styled.td`
  padding: 8px;
  border: 1px solid #ccc;
`;

const StyledHeaderCell = styled.th`
  padding: 8px;
  border: 1px solid #ccc;
  background-color: #e0e0e0;  // light grey to match your test
  font-weight: bold;
`;

const Table: React.FC<TableProps> & {
  Header: React.FC<{ children: React.ReactNode }>;
  Body: React.FC<{ children: React.ReactNode }>;
  Footer: React.FC<{ children: React.ReactNode }>;
  Row: React.FC<{ children: React.ReactNode }>;
  Cell: React.FC<{ children: React.ReactNode; isHeader?: boolean }>;
} = ({ children, testIdPrefix = 'table' }) => (
  <StyledTable data-testid={testIdPrefix}>
    {children}
  </StyledTable>
);

Table.Header = ({ children }) => <thead>{children}</thead>;
Table.Body = ({ children }) => <tbody>{children}</tbody>;
Table.Footer = ({ children }) => <tfoot>{children}</tfoot>;
Table.Row = ({ children }) => <StyledRow>{children}</StyledRow>;
Table.Cell = ({ children, isHeader = false }) =>
  isHeader ? (
    <StyledHeaderCell>{children}</StyledHeaderCell>
  ) : (
    <StyledCell>{children}</StyledCell>
  );

export default Table;
