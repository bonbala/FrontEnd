import React, { useEffect, useState } from 'react'
import '../XoSo/style.css'
import Modal from './Modal'
import { Button, Flex  } from '@chakra-ui/react'
import ClockTimer from './ClockTimer'
import TableComponent from './TableComponent'
const XoSoComponent = () => {
    const [player, setPlayer] = useState([])
    const [winerList, setWinerList] = useState([])

    useEffect(() => {
      // Lấy danh sách người chơi từ localStorage khi component được mount
      const storedPlayers = JSON.parse(localStorage.getItem("players")) || [];
      setPlayer(storedPlayers);
    }, []);
    

  return (
    <Flex direction="column" justifyContent={'center'} alignItems={'center'} gap={'10'}>
        <ClockTimer player={player} setWinerList={setWinerList} winerList={winerList}/>
        
        <Flex m={'auto'}>
            <Modal setPlayer={setPlayer} player={player} winerList={winerList} setWinerList={setWinerList}/>
        </Flex>
        <TableComponent player={player} winerList={winerList}/>
    </Flex>
  )
}

export default XoSoComponent
