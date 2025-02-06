import React from 'react';
import { Table, Text, Box } from "@chakra-ui/react";

const TableComponent = (props) => {
  const { player, winerList } = props;

  const dataToShow = winerList && winerList.length > 0 ? winerList : player;
  const title = winerList && winerList.length > 0 ? "Danh sách người chiến thắng" : "Danh sách người chơi";

  return (
    <Box w="30%" m="auto">
      <Text fontSize="xl" fontWeight="bold" textAlign="center" mb="4">
        {title}
      </Text>
      <Table.Root size="sm">
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeader textAlign="center">Người chơi</Table.ColumnHeader>
            <Table.ColumnHeader textAlign="center">Số may mắn</Table.ColumnHeader>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {dataToShow.map((item, index) => (
            <Table.Row key={item.number + index}>
              <Table.Cell textAlign="center">{item.name}</Table.Cell>
              <Table.Cell textAlign="center">{item.number}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </Box>
  );
};

export default TableComponent;
