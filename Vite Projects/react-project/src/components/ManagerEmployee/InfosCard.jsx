import React, { Component } from 'react'
import { Card } from "@chakra-ui/react"
import { Avatar } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import MaleAvatar from '../../assets/image/male.jpg'
import FemaleAvatar from '../../assets/image/female.jpg'
import { List, Flex } from "@chakra-ui/react"
export default class InfosCard extends Component {
  constructor(props){
    super(props)
    this.state ={
    }
  }
  render() {
    const {item}=this.props
    const {name,phone,email,address,id} = item
    return (
      <div key={item.id}>
        <Card.Root width="320px">
        <Card.Body gap="2">
          <Flex gap="3">
            <Avatar
              src={MaleAvatar}
              name="Nue Camp"
              size="lg"
              shape="rounded"
            />
            <Card.Title mt="1" fontSize="24px">
              {name}
            </Card.Title>
          </Flex>
          <div className="Infos">
            <List.Root>
              <List.Item>Phone: {phone}</List.Item>
              <List.Item>Email: {email}</List.Item>
              <List.Item>Address: {address.street}</List.Item>
            </List.Root>

            <Button
              color="red"
              onClick={() => this.props.handleAddFavorite(id)}
            >
              Choose
            </Button>
            <Button
              ml="2"
              color="green"
              onClick={() => this.props.handleEditForm(id)}
            >
              Edit
            </Button>
          </div>
        </Card.Body>
      </Card.Root>
      </div>
    );
  }
}
