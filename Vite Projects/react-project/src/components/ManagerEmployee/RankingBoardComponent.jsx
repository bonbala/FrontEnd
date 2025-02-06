import React, { Component } from 'react'

import { Badge, HStack, List, Flex, Button, Box  } from "@chakra-ui/react"
import {
  AccordionItem,
  AccordionItemContent,
  AccordionItemTrigger,
  AccordionRoot,
} from "@/components/ui/accordion"
import { Avatar } from "@/components/ui/avatar"
import { LuTrophy } from "react-icons/lu"
import { LoremIpsum } from "react-lorem-ipsum"


export default class RankingBoardComponent extends Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }


  render() {
    const {bestEmloyees} = this.props
    return (
      <AccordionRoot collapsible defaultValue={["b"]} width="29%">
        {bestEmloyees.map((item, index) => (
          <AccordionItem key={index} value={item.name}>
            <Box position="relative">
              <AccordionItemTrigger>
                <Avatar shape="rounded" src={item.image} name={item.name} />
                <HStack>{item.name} </HStack>
              </AccordionItemTrigger>
              <AccordionItemContent>
                <div className="Infos">
                  <List.Root>
                    <List.Item>Phone: {item.phone}</List.Item>
                    <List.Item>Email: {item.email}</List.Item>
                    <List.Item>Address: {item.address.street}</List.Item>
                  </List.Root>
                </div>
              </AccordionItemContent>
              <Button
                onClick={()=>this.props.handleDeleteFavorite(item.id)}
                position="absolute"
                top="15%"
                right="20px"
                color="red"
              >
                delete
              </Button>
            </Box>
          </AccordionItem>
        ))}
      </AccordionRoot>
    );
  }
}
