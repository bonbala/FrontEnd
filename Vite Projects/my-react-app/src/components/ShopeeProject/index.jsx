import React, { useState, useEffect } from "react";
import "../ShopeeProject/style.css";
import { Card, Flex, Stack, Text } from "@chakra-ui/react";
import { Avatar } from "../ui/avatar";
import { Button } from "../ui/button";

const ShopeeProject = () => {
  // const [time, setTime] = useState(10);
  // const [price, setPrice] = useState(100);
  const items = [
    { title: "Nike1", price: "50$", time: 10 },
    { title: "Nike2", price: "50$", time: 15 },
    { title: "Nike3", price: "50$", time: 12 },
  ];

  useEffect(() => {
    if (isPlay){
      if (time > 0) {
        const timer = setInterval(() => {
          setTime((prevTime) => prevTime - 1);
        }, 1000);
  
        return () => clearInterval(timer);
      } else {
        setPrice(50);
      }
    }
   
  }, [time, isPlay]);

  return (
    <Stack gap={4} flexDirection={'row'} mt={'40px'} ml={'20%'}>
      {items.map((item, index) => (
       <Card title={item.title} price={item.price} time={item.time}/>
      ))}
    </Stack>
   
  );
};

export default ShopeeProject;
