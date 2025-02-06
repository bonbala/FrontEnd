import React, { Component } from 'react';
import { Box, Button, Card, Flex, Input, Stack } from "@chakra-ui/react";
import { Field } from "@/components/ui/field";

export default class FormComponent extends Component {
  constructor(props){
    super(props);
    this.state = {
      formData: {
        name: '',
        email: '',
        phone: '',
        address: '', 
      },
      errors: {},
      inputData: {
        name: '',
        email: '',
        phone: '',
        address: '',
      }
    };
  }
  
  handleChange = (event) => {
    const {key, value} = event.target;
    this.setState((prevState)=>({
      inputData:{
        ...prevState.inputData,
        [key]: value,
      },
    }));
  };

  componentDidUpdate(prevProps, prevState){
    console.log('props',this.props)
    console.log('prevState: ',prevState)
    if(this.props.formData.name !== prevState.formData.name){
      // this.setState({formDaat : {...this.props.formData} })
      const newForm = {...this.props.formData, address: this.props.formData.address.city, isEdit: true}
      this.setState({formData : newForm})
    }
  }

  validateForm = () => {
    const { name, email, phone, address } = this.state.formData;
    const errors = {};

    if (!name.trim()) {
      errors.name = "Name is required";
    } else if (!/^[a-zA-Z\s]+$/.test(name)) {
      errors.name = "Name can only contain letters and spaces";
    }
    if (!email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Email is invalid";
    }
  
    if (!phone.trim()) {
      errors.phone = "Phone number is required";
    } else if (!/^\+?\d+$/.test(phone)) {
      errors.phone = "Phone number can only contain numbers";
    }
  
    if (!address.trim()) {
      errors.address = "Address is required";
    } else if (!/^[a-zA-Z0-9\s,]+$/.test(address)) {
      errors.address = "Address can only contain letters, numbers, spaces, and commas";
    }
  
    console.log("Validation errors:", errors);
    this.setState({ errors });
    return Object.keys(errors).length === 0;
  };
  
  

  handleSubmit = (event) => {
    event.preventDefault();
    if (!this.validateForm()) return;
    const { formData } = this.state;
    if(this.state.formData.isEdit){
      this.props.handleUpdateEmployee(formData)
    }else{
      this.props.handleAddEmployee(formData);
    }
    
  
    this.setState({
      formData: {
        name: "",
        email: "",
        phone: "",
        address: "",
      },
      errors: {}
    });
  };

  render() {

    const { formData, errors,inputData } = this.state;
    return (
      <Box className="form">
        <Card.Root width={"50%"}>
          <Card.Header>
            <Card.Title>Create Employee Account</Card.Title>
            <Card.Description>
              Fill in the form below to create an account
            </Card.Description>
          </Card.Header>
          <Card.Body>
            <form onSubmit={this.handleSubmit}>
              <Stack gap="4" w="full">
                <Field label="Name">
                  <Input
                    key="name"
                    value={inputData.name}
                    onChange={this.handleChange}
                  />
                  {errors.name && <Box color="red.500">{errors.name}</Box>}
                </Field>
                <Flex gap={5}>
                  <Field label="Phone Number">
                    <Input
                      key="phone"
                      value={inputData.phone}
                      onChange={this.handleChange}
                    />
                    {errors.phone && <Box color="red.500">{errors.phone}</Box>}
                  </Field>
                  
                  <Field
                    label="Email"
                  >
                    <Input
                      key="email"
                      value={inputData.email}
                      onChange={this.handleChange}
                    />
                    {errors.phone && <Box color="red.500">{errors.email}</Box>}
                  </Field>
                </Flex>
                <Field label="Address">
                  <Input
                    key="address"
                    value={inputData.address}
                    onChange={this.handleChange}
                  />
                  {errors.address && <Box color="red.500">{errors.address}</Box>}
                </Field>
              </Stack>
              <Card.Footer justifyContent="flex-end">
                <Button width={"30%"} type="submit" mt="5">
                  {this.state.formData.isEdit ? 'Edit' : 'Submit' }
                </Button>
              </Card.Footer>
            </form>
          </Card.Body>
        </Card.Root>
      </Box>
    );
  }
}
