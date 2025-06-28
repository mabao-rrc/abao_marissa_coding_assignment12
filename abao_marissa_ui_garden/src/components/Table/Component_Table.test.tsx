import React from 'react';
import { render } from '@testing-library/react';
import Table from './Component_Table';

describe('Table component', () => {
  it('renders and is visible', () => {
    const { getByTestId } = render(
      <Table testIdPrefix="table">
        <Table.Header>
          <Table.Row>
            <Table.Cell isHeader>Header</Table.Cell>
          </Table.Row>
        </Table.Header>
      </Table>
    );
    expect(getByTestId('table')).toBeVisible();
  });

  it('renders header cell with correct style', () => {
    const { getByText } = render(
      <Table>
        <Table.Header>
          <Table.Row>
            {/* Directly render header cell without passing isHeader */}
            <Table.Cell isHeader>Header</Table.Cell>
          </Table.Row>
        </Table.Header>
      </Table>
    );
    const headerCell = getByText('Header');
    expect(headerCell.tagName).toBe('TH');  // Make sure it's rendering as a <th>
    expect(headerCell).toHaveStyle('font-weight: bold');
    expect(headerCell).toHaveStyle('background-color: #e0e0e0');
  });
});
