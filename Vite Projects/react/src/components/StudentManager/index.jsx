import { Flex, Text } from '@chakra-ui/react'
import { Button, Input, Stack, Box } from "@chakra-ui/react"
import { Field } from "@/components/ui/field"
import { Table } from "@chakra-ui/react"
import React, { useState } from 'react'
import { useForm } from "react-hook-form"
import FormComponent from './FormComponent'
import TableComponent from './TableComponent'
import DialogComponent from './DialogComponent'

const StudentManager = () => {
    
    const [studentList, setStudentList] = useState([])
    const [selectedStudent, setSelectedStudent]= useState({})
    const [isView, setIsView] = useState(false)
    const [excellentStudent, setExcellentStudent] = useState([])

    const handleAdd = (data) => {
        const list = [...studentList]
        const index = list.findIndex((item)=>item.id == data.id)
        if(index === -1){
          setStudentList([...studentList,data])
        }else{
          alert('ma sinh vien nay da ton tai')
        }   
    }

    const handleEdit = (data) => {
      const list = [...studentList];
      const index = list.findIndex((item) => item.id == data.id);
      list[index] = data;
      setStudentList(list);
      setIsView(false);
    };

    const handleDelete = (id) => {
      const newArr = [...studentList];
      setStudentList(newArr.filter((item) => item.id !== id));
    };

    const handleView = (id) => {
      const list = [...studentList];
      const student = list.find((item) => item.id === id);
      setSelectedStudent(student)
      setIsView(true)
    };

  
  return (
    <Box textAlign="center">
      <Text mb="2rem">Student Manager</Text>
      <Box display='flex' justifyContent='center' gap='50px'>
        <FormComponent
          isView={isView}
          onAdd={handleAdd}
          selectedStudent={selectedStudent}
          onEdit={handleEdit}
        />
        <DialogComponent />
      </Box>
      <TableComponent studentList={studentList} onDelete={handleDelete} onView={handleView} />
    </Box>
  );
}

export default StudentManager
