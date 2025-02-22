import { Text } from '@chakra-ui/react'
import { Button, Input, Stack, Box } from "@chakra-ui/react"
import { Field } from "@/components/ui/field"
import { Table } from "@chakra-ui/react"
import React, { useEffect, useState } from 'react'
import { useForm } from "react-hook-form"

const FormComponent = (props) => {
    const {isView, onAdd,selectedStudent, onEdit} =props

    const {
            register,
            handleSubmit,
            watch,
            setValue,
            reset,
            formState: { errors },
          } = useForm()

    useEffect(()=>{
      setValue("name", selectedStudent.name);
      setValue("age", selectedStudent.age);
      setValue("class", selectedStudent.class);
      setValue("id", selectedStudent.id);
    },[selectedStudent, setValue])

    const handleForSubmit = (data) => {
      isView ? onEdit(data) :onAdd(data)
      reset()
    }
  return (
    <form
      onSubmit={handleSubmit(handleForSubmit)}
      style={{ display: "flex", flexDirection: "column", alignItems: "center", flex:'0.5' }}
    >
      <Stack
        gap="4"
        align="flex-start"
        w="100%"
        border="solid 1px black"
        p="2rem"
      >
        <Field
          label="Name"
          invalid={!!errors.name}
          errorText={errors.name?.message}
        >
          <Input
            {...register("name", { required: "First name is required" })}
          />
        </Field>
        <Field
          label="Age"
          invalid={!!errors.age}
          errorText={errors.age?.message}
        >
          <Input {...register("age", { required: "Age is required" })} />
        </Field>
        <Field
          label="Class"
          invalid={!!errors.class}
          errorText={errors.class?.message}
        >
          <Input {...register("class", { required: "Class is required" })} />
        </Field>
        <Field label="Id" invalid={!!errors.id} errorText={errors.id?.message}>
          <Input
            disabled={isView}
            {...register("id", { required: "Id is required" })}
          />
        </Field>
        <Stack direction="row">
          {isView ? (
            <Button type="submit" bgColor="orange">
              Edit
            </Button>
          ) : (
            <Button type="submit" bgColor="#70f008">
              Submit
            </Button>
          )}
        </Stack>
      </Stack>
    </form>
  );
}

export default FormComponent
