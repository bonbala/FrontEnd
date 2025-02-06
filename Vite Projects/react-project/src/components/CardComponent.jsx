import React from 'react'
import { Button,Card, Image, Text } from "@chakra-ui/react"



const CardComponent = (props) => {
  const {src,title,description,price,setListCart,listCart} = props
  const product = {src,title,price, count: 1}
  return (
    <Card.Root maxW="300px" overflow="hidden">
      <Image
        src={src}
        alt="Green double couch with wooden legs"
      />
      <Card.Body gap="2">
        <Card.Title>{title}</Card.Title>
        <Card.Description>
          {description}
        </Card.Description>
        <Text textStyle="2xl" fontWeight="medium" letterSpacing="tight" mt="2">
          $ {price}
        </Text>
      </Card.Body>
      <Card.Footer gap="2">
        <Button  variant="solid">Buy now</Button>
        <Button onClick={()=>{setListCart([...listCart,product])}} variant="ghost">Add to cart</Button>
      </Card.Footer>
    </Card.Root>
  
  )
}

export default CardComponent
