import { Box, Button,Flex, Input } from '@chakra-ui/react'
import { Field } from '../ui/field';
import React, { useState } from 'react'
import { useForm, Controller } from "react-hook-form";
import '../ReactHook/styles.css'


const ReactHookForm = () => {
    const {
        register,
        handleSubmit,
        watch,
        control,
        formState: { errors }
      } = useForm();
      const onSubmit = (data) => {
        console.log(data);
        
      }; // your form submit function which will invoke after successful validation
      console.log(errors)
    
    
      return (
        <form>
          <Flex direction="column" pt="50px" gap="10" alignItems={"center"}>
            <Field
              className="Field"
              w="30%"
              label="Username"
              invalid = {errors?.username ? true : false}
              errorText={errors?.username?.message}
            >
              <Input
                placeholder="username"
                {...register("username", { required: 'Vui lòng chọn username' , })}
              />
            </Field>

            <Field
              className="Field"
              w="30%"
              label="Password"
              invalid = {errors?.password ? true : false}
              errorText={errors?.password?.message}
            >
              <Input
                placeholder="password"
                {...register("password", { required: 'Vui lòng nhập mật khẩu' })}
              />
            </Field>

            <Field
            className="Region"
            w="30%"
            label="Region"
            invalid = {errors?.select ? true : false}
            errorText= {errors?.select?.message}>
            <select className={errors?.select ? 'error' : ''} name='regions' id='region' {...register("select", { required: 'Vui lòng chọn vùng' , validate : ((value)=>value !== 'Regions' || 'Vui lòng chọn vùng')})}>
            <option value='Regions'>Regions</option>
            <option value='Hanoi'>Hà Nội</option>
            <option value='Danang'>Đà Nẵng</option>
            <option value='Tphcm'>Tp HCM</option>
            </select>
            </Field>
            
            <Box textAlign={"center"} w="50%">
              <Button
                w="20%"
                onClick={handleSubmit(onSubmit)}
                variant="outline"
              >
                Submit
              </Button>
            </Box>
          </Flex>       
        </form>
      );
}

export default ReactHookForm
