import React from "react";
import { Box, IconButton } from "@chakra-ui/react";
import { CiShoppingCart } from "react-icons/ci";
import { Center, Square, Circle } from "@chakra-ui/react";
import { Button, Image } from "@chakra-ui/react";
import {
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogHeader,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Table } from "@chakra-ui/react";

const HeaderComponent = (props) => {
  const { listCart, setListCart } = props;

  const increase = (title) => {
    setListCart((prevCart) =>
      prevCart.map((item) =>
        item.title === title ? { ...item, count: item.count + 1 } : item
      )
    );
  };

  const decrease = (title) => {
    setListCart((prevCart) =>
      prevCart.map((item) =>
        item.title === title && item.count > 1
          ? { ...item, count: item.count - 1 }
          : item
      )
    );
  };

  const totalPrice = listCart.reduce(
    (total, item) => total + item.count * item.price,
    0
  );
  return (
    <div>
      <DialogRoot
        size="cover"
        placement="center"
        motionPreset="slide-in-bottom"
      >
        <Box bg="tomato" w="100%" p="4" color="white">
          <DialogTrigger asChild>
            <Center p="2" w="40px" h="40px">
              <CiShoppingCart />
            </Center>
          </DialogTrigger>
        </Box>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>List Cart</DialogTitle>
            <DialogCloseTrigger />
          </DialogHeader>
          <DialogBody>
            <Table.Root size="sm">
              <Table.Header>
                <Table.Row>
                  <Table.ColumnHeader>Product</Table.ColumnHeader>
                  <Table.ColumnHeader>Name</Table.ColumnHeader>
                  <Table.ColumnHeader textAlign="center">
                    Quantity
                  </Table.ColumnHeader>
                  <Table.ColumnHeader textAlign="end">Price</Table.ColumnHeader>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                {listCart.map((item) => (
                  <Table.Row key={item.id}>
                    <Table.Cell>
                      <Image
                        w="100px"
                        h="100px"
                        src={item.src}
                        alt="Green double couch with wooden legs"
                      />
                    </Table.Cell>
                    <Table.Cell>{item.title}</Table.Cell>
                    <Table.Cell textAlign="center">
                      <>
                        <Button
                          onClick={() => decrease(item.title)}
                          bg="#46b23a"
                          mr="10px"
                          fontSize='20px'
                          textAlign='center'
                          
                        >
                          -
                        </Button>
                        {item.count}
                        <Button
                          onClick={() => increase(item.title)}
                          bg="#46b23a"
                          ml="10px"
                          fontSize='20px'
                          textAlign='center'
                        >
                          +
                        </Button>
                      </>
                    </Table.Cell>
                    <Table.Cell textAlign="end">
                      ${item.price * item.count}
                    </Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table.Root>
            <Box mt="20px" textAlign="right" fontSize="20px">
              <strong>Total: ${totalPrice}</strong>
            </Box>
          </DialogBody>
        </DialogContent>
      </DialogRoot>
    </div>
  );
};

export default HeaderComponent;
