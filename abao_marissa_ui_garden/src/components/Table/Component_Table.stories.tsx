import type { Meta, StoryFn } from '@storybook/react-webpack5';
import Table from './Component_Table';

const meta: Meta<typeof Table> = {
  title: 'ReactComponentLibrary/Table',
  component: Table,
};
export default meta;

const Template: StoryFn<typeof Table> = (args) => <Table {...args} />;

export const Default = Template.bind({});
Default.args = {
  testIdPrefix: 'table',
  children: (
    <>
      <Table.Header>
        <Table.Row>
          <Table.Cell isHeader>Header</Table.Cell>
        </Table.Row>
      </Table.Header>
      <Table.Row>
        <Table.Cell>Cell 1</Table.Cell>
      </Table.Row>
    </>
  ),
};

export const Disabled = Template.bind({});
Disabled.args = {
  testIdPrefix: 'table',
  disabled: true,  // ✅ ADD THIS LINE to activate disabled state
  children: (
    <>
      <Table.Header>
        <Table.Row>
          <Table.Cell isHeader>Header</Table.Cell>
        </Table.Row>
      </Table.Header>
      <Table.Row>
        <Table.Cell>Cell 1</Table.Cell>
      </Table.Row>
    </>
  ),
};
