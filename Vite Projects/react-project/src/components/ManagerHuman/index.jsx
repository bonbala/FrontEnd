import React, { Component } from 'react'
import { Box, Button, Card, Flex, Input, Stack,List, ProgressCircleRange, Circle, Float, Table } from "@chakra-ui/react";
import { Field } from "@/components/ui/field";
import {
  DialogActionTrigger,
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import { Avatar } from "@/components/ui/avatar"
import MaleAvatar from '../../assets/image/male.jpg'
import FemaleAvatar from '../../assets/image/female.jpg'

import './style.scss'

export default class ManagerHuman extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        name: "",
        phone: "",
        email: "",
        address: "",
      },
      error:{},
      humanList: [],
      chosenList: [],
    };
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.handleAddEmloyee(this.state.formData);
    this.setState({
      formData:{
        name: "",
        phone: "",
        email: "",
        address: "",
      }
    })
  };

  // handleValidate = () => {
  //   const formData = this.state.formData
  //   const formError = this.state.error
    
  //   if(!formData.name){
  //     formError.name = 'Input is required' 
  //   }

  //   this.setState({error: formError})
  // }

  handleChangeInput = (event) => {
    const { name, value } = event.target;
    const newFormData = { ...this.state.formData, [name]: value }
    this.setState({ formData: newFormData });
  };

  handleAddEmloyee = (formData) => {
    const newHumanList = [...this.state.humanList, formData];
    this.setState({ humanList: newHumanList });
  };

  handleView = (id) => {
    const result = this.state.humanList.find((item) => item.id === id)
    const human = {
      id: id,
      name: result.name,
      phone: result.phone,
      email: result.email,
      address: result.address.city,
    };
    this.setState({ formData: { ...human, isEdit: true } }, () => {
      console.log('View Form Data: ',this.state.formData);
    });
  };

  handleEdit = (event) => {
    event.preventDefault();
    const index = this.state.humanList.findIndex((item) => item.id === this.state.formData.id)
    const newHumanList = this.state.humanList
    newHumanList[index] = {...this.state.formData, isEdit: false}
    this.setState({humanList : newHumanList})
    this.setState({
      formData:{
        name: "",
        phone: "",
        email: "",
        address: "",
      }
    })
  };

  handleChoose = (id) => {
    const chosenHuman = this.state.humanList.find((item) => item.id === id)
    const newChosenList = [...this.state.chosenList, chosenHuman]
    this.setState({chosenList: newChosenList})
  }

  handleDeleteHuman = (id) => {
    const newHumanList = this.state.humanList
    const index = newHumanList.findIndex((item)=>item.id === id)
    newHumanList.splice(index,1)
    this.setState({humanList : newHumanList}) 
  }

  handleDeleteChosen = (id) => {
    const newChosenList = this.state.chosenList
    const index = newChosenList.findIndex((item)=>item.id === id)
    newChosenList.splice(index,1)
    this.setState({chosenList : newChosenList}) 
  }

  

  //useEffect voi depencency la []
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        if (data.length > 0) {
          this.setState({ humanList: data });
        }
      })
      .catch((error) => console.error("error", error));
  }

  //useEffect voi depencency la [variable]
  componentDidUpdate() {}
  render() {
    const { humanList, formData, chosenList } = this.state;
    return (
      <>
        <div className="main-content">
          <Box className="form">
            <Card.Root width={"50%"}>
              <Card.Header>
                <Card.Title>Create Employee Account</Card.Title>
                <Card.Description>
                  Fill in the form below to create an account
                </Card.Description>
              </Card.Header>
              <Card.Body>
                <form>
                  <Stack gap="4" w="full">
                    <Field label="Name">
                      <Input
                        name="name"
                        onChange={this.handleChangeInput}
                        value={formData.name}
                      />
                    </Field>
                    <Flex gap={5}>
                      <Field label="Phone Number">
                        <Input
                          name="phone"
                          onChange={this.handleChangeInput}
                          value={formData.phone}
                        />
                      </Field>
                      <Field label="Email">
                        <Input
                          name="email"
                          onChange={this.handleChangeInput}
                          value={formData.email}
                        />
                      </Field>
                    </Flex>
                    <Field label="Address">
                      <Input
                        name="address"
                        onChange={this.handleChangeInput}
                        value={formData.address}
                      />
                    </Field>
                  </Stack>
                  <Card.Footer justifyContent="flex-end">
                    <Button
                      width={"30%"}
                      type="submit"
                      mt="3"
                      onClick={
                        formData.isEdit ? this.handleEdit : this.handleSubmit
                      }
                    >
                      {formData.isEdit ? "Edit" : "Submit"}
                    </Button>
                  </Card.Footer>
                </form>
              </Card.Body>
            </Card.Root>
          </Box>

          <Box>
            <DialogRoot size="lg">
              <DialogTrigger asChild>
                <Box
                  position="relative"
                  w="50px"
                  h="50px"
                  bg="bg.emphasized"
                  borderRadius="50%"
                >
                  <img src={MaleAvatar} alt="" />
                  <Float offset="2">
                    <Circle size="5" bg="red" color="white">
                      {chosenList.length}
                    </Circle>
                  </Float>
                </Box>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Bảng nhân viên</DialogTitle>
                </DialogHeader>
                <DialogBody>
                  <Table.Root size="sm" colorPalette="pink">
                    <Table.Header>
                      <Table.Row>
                        <Table.ColumnHeader>Name</Table.ColumnHeader>
                        <Table.ColumnHeader>Phone</Table.ColumnHeader>
                        <Table.ColumnHeader>Email</Table.ColumnHeader>
                        <Table.ColumnHeader>Address</Table.ColumnHeader>
                        <Table.ColumnHeader textAlign="end">
                          Action
                        </Table.ColumnHeader>
                      </Table.Row>
                    </Table.Header>
                    <Table.Body>
                      {chosenList.map((item) => (
                        <Table.Row key={item.id}>
                          <Table.Cell>{item.name}</Table.Cell>
                          <Table.Cell>{item.phone}</Table.Cell>
                          <Table.Cell>{item.email}</Table.Cell>
                          <Table.Cell>{item.address.city ? item.address.city : item.address }</Table.Cell>
                          <Table.Cell textAlign="end">
                            <Button onClick={()=>this.handleDeleteChosen(item.id)}>x</Button>
                          </Table.Cell>
                        </Table.Row>
                      ))}
                    </Table.Body>
                  </Table.Root>
                </DialogBody>
                <DialogFooter>
                  <DialogActionTrigger asChild>
                    <Button variant="outline">Cancel</Button>
                  </DialogActionTrigger>
                  <Button>Save</Button>
                </DialogFooter>
                <DialogCloseTrigger />
              </DialogContent>
            </DialogRoot>
          </Box>
        </div>

        <div className="employee-list">
          {humanList.map((item, index) => {
            return (
              <Card.Root width="320px" key={item.id}>
                <Card.Body gap="2">
                  <Flex gap="3">
                    <Avatar
                      src={MaleAvatar}
                      name="Nue Camp"
                      size="lg"
                      shape="rounded"
                    />
                    <Card.Title mt="1" fontSize="24px"></Card.Title>
                  </Flex>
                  <div className="Infos">
                    <List.Root>
                      <List.Item>Name: {item.name}</List.Item>
                      <List.Item>Email: {item.email}</List.Item>
                      <List.Item>Phone: {item.phone}</List.Item>
                      <List.Item>
                        Address:{" "}
                        {item.address.city ? item.address.city : item.address}
                      </List.Item>
                    </List.Root>

                    <Button
                      color="orange"
                      onClick={() => this.handleChoose(item.id)}
                    >
                      Choose
                    </Button>
                    <Button
                      ml="2"
                      color="green"
                      onClick={() => this.handleView(item.id)}
                    >
                      View
                    </Button>
                    <Button
                      ml="2"
                      color="red"
                      onClick={() => this.handleDeleteHuman(item.id)}
                    >
                      Delete
                    </Button>
                  </div>
                </Card.Body>
              </Card.Root>
            );
          })}
        </div>
      </>
    );
  }
}
