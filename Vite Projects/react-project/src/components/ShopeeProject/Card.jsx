import React, { useState, useEffect } from "react";
import { Card, Flex, Stack, Text } from "@chakra-ui/react";
import { Avatar } from "../ui/avatar";
import { Button } from "../ui/button";
const Card = (props) => {
    const {title,price,time} = props
  return (
    <Card.Root width="320px">
        <Card.Body gap="2">
          <Avatar
            src="https://picsum.photos/200/300"
            name="Nue Camp"
            size="lg"
            shape="rounded"
          />
          <Card.Title mt="2">{title}</Card.Title>
          <Card.Description>
            <Flex>Giảm giá còn trong : <Text>{time}s</Text></Flex>
            Giá: {price}
          </Card.Description>
        </Card.Body>
        <Card.Footer justifyContent="flex-end">
          <Button variant="outline">View</Button>
          <Button>Buy</Button>
        </Card.Footer>
      </Card.Root>
  )
}

export default Card
