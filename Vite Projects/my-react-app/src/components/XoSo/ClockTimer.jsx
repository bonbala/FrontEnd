import { Box, Button, Flex, Text } from '@chakra-ui/react'
import React, { useState, useEffect } from 'react'

import { Input } from "@chakra-ui/react"

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
} from "../../components/ui/dialog"

const ClockTimer = (props) => {
    const {player,setWinerList,winerList} = props
    const [isPlay, setIsPlay] = useState(false)
    const [time, setTime] = useState(3)
    const [isOpen, setIsOpen] = useState(false)
    const [luckyNumber, setLuckyNumber] = useState(null)
    const [notification, setNotification] = useState('')
    
    
     useEffect(() => {
        if (isPlay){
          if (time > 0) {
            const timer = setInterval(() => {
              setTime((prevTime) => prevTime - 1);
            }, 1000);
      
            return () => clearInterval(timer);
          } else {
            setIsOpen(true)
            const numberRandom = Math.floor(Math.random() * 3)
            setLuckyNumber(numberRandom)
            checkLuckyPlayer(player,3)
          }
        }
       
      }, [time, isPlay,]);

      const checkLuckyPlayer = (listPlayer,luckyNumber) => {
        const found = listPlayer.filter( player => player.number == luckyNumber); 
        if(found && found.length>0){
            setNotification(`Đã có người chiến thắng ,Con số may mắn là ${luckyNumber}`)
            setWinerList(found)
            console.log(found)
        }else{
            setNotification(`Không có người chiến thắng ,Con số may mắn là ${luckyNumber}`)
        }
      }
  return (
    <Box>
      <Flex direction='column' alignItems={'center'} gap='5'>
      <Text>Con số May Mắn</Text>
      
      
      <Flex alignItems={'center'} justifyContent={'center'} w='200px' h='200px' bg={'red'} borderRadius={'50%'}>   
        <Text bg='red' textStyle="4xl">{Math.floor(time/60)}</Text>:
        <Text bg='red' textStyle="4xl">{(time%60)}</Text>
      </Flex>
      
      <Button variant="outline" size="sm" w='100px' onClick={()=> setIsPlay(true)} disabled={player.length > 0 ? false : true}>Play</Button>
      </Flex>
    <DialogRoot open={isOpen}>

              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Thông báo</DialogTitle>
                </DialogHeader>
                <DialogBody>
                    <Text>{notification}</Text>
                </DialogBody>
                <DialogFooter>
                  <Button onClick={()=>setIsOpen(false)} >Lưu</Button>
                </DialogFooter>
                <DialogCloseTrigger />
              </DialogContent>
            </DialogRoot>
      
    </Box>
  )
}

export default ClockTimer
