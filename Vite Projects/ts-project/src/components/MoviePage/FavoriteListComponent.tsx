import React from 'react'
import { Box, Input, Button, VStack, HStack, Text } from "@chakra-ui/react";
import { IMovie } from './Movie.i'; 
import { FaHeart } from "react-icons/fa";
const FavoriteListComponent = ({favoriteList: IMovie[]}) => {
    return (
        <Box className="fav-container" w={'25%'} h={'100%'} p={4} border={'solid 1px black'} overflowY='scroll'>
                  {favoriteList.map((item,index)=>(
                    <Box className="fav-card" h={'25%'} display='flex' justifyContent='space-between'p={1} border={'solid 1px black'} mb={'10px'}>
                    
                    <Box ml={2}>
                    <Box 
                    w='30px' 
                    h='30px' 
                    bgColor='#d2d1cd'
                    borderRadius='5px' 
                    alignContent='center'
                    >
                        <FaHeart 
                          onClick={()=>handleFavorite(item.imdbID)} 
                          style={{
                            fontSize:'24px', 
                            margin:'auto', 
                            color: favoriteList.some((favItem)=>favItem.imdbID === item.imdbID) ? 'red' : 'gray'
                          }}
                        />
                    </Box>
        
                      <Text fontSize={'15px'}>Title: {item.Title}</Text>
                      <Text fontSize={'15px'}>Type: {item.Type}</Text>
                      <Text fontSize={'15px'}>Year: {item.Year}</Text>
                    </Box>
                    <img src={item.Poster} alt="" />
                  </Box>
                  ))}
              </Box>
    )
}

export default FavoriteListComponent
