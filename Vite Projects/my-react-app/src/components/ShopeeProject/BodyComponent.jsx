import React, { useEffect, useState } from 'react'
import CardComponent from '../CardComponent'
import { Flex } from "@chakra-ui/react"

const BodyComponent = ({ listProduct = [] ,listCart, setListCart}) => {
  return (
    <Flex p='5' gap='32px' wrap='wrap' maxW='100%' justify='center'>
      {listProduct.slice(0, 10).map((item) => (
        <CardComponent
          key={item.id}
          src={item.image}
          title={item.name}
          description={item.shortDescription}
          price={item.price}
          setListCart={setListCart}
          listCart={listCart}
        />
      ))}
    </Flex>
  );
};


export default BodyComponent
