import { Text } from '@chakra-ui/react'
import { Button, Input, Stack, Box } from "@chakra-ui/react"
import { Field } from "@/components/ui/field"
import { Table } from "@chakra-ui/react"
import React, { useState } from 'react'
import { useForm } from "react-hook-form"
import FormComponent from './FormComponent'

const TableComponent = (props) => {
    const {studentList,onDelete,onView} = props

    

  return (
    <Table.Root size="sm" mt='3rem'>
      <Table.Header>
        <Table.Row>
          <Table.ColumnHeader>Name</Table.ColumnHeader>
          <Table.ColumnHeader>Age</Table.ColumnHeader>
          <Table.ColumnHeader>Class</Table.ColumnHeader>
          <Table.ColumnHeader>Id</Table.ColumnHeader>
          <Table.ColumnHeader textAlign="end">Action</Table.ColumnHeader>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {studentList.map((item,index) => (
          <Table.Row key={index} bgColor='white'>
            <Table.Cell>{item.name}</Table.Cell>
            <Table.Cell>{item.age}</Table.Cell>
            <Table.Cell>{item.class}</Table.Cell>
            <Table.Cell>{item.id}</Table.Cell>
            <Table.Cell textAlign="end">
            <Button bgColor='red' color='white' mr='2px' onClick={()=>onDelete(item.id)}>Delete</Button>
            <Button bgColor='green' color='white' onClick={()=>onView(item.id)}>View</Button>
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  )
}

export default TableComponent
