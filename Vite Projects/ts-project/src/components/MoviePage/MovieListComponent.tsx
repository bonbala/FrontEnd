import React from 'react'
import { Box, Input, Button, VStack, HStack, Text } from "@chakra-ui/react";

const MovieListComponent = () => {
    return (
        <Stack direction='column' w={'50%'} h={'100%'} p={4} border={'solid 1px black'}>
        <Box display='flex' gap='10px'>
        <Input placeholder="Nhập tên phim" onChange={(e)=>setInputSearch(e.target.value)}></Input>
        <Button onClick={()=>searchFilm(inputSearch)}>🔍</Button>
        </Box>
        
        <Text fontWeight='bold'>Danh sách phim</Text>
        <Flex alignItems='center'>
          <Text fontSize='20px' lineHeight='1'>Lọc: </Text>
          <Button ml={2} color='white' onClick={handleSortYear}>Year</Button>
          <Button ml={2} color='white' onClick={handleSortAtoZ}>A to Z</Button>
        </Flex>
        <Box className="movie-searched"
          h="full"
          border="solid 1px black"
          p={2}
          borderRadius="10px"
          display="flex"
          flexWrap="wrap"
          overflowY="auto"
          >
          {movieList.map((item,index)=>(
            <Box className="moive-card" 
            w={'33.3%'} 
            justifyItems={'center'} 
            mb={'10px'} 
            position='relative'
            onClick={()=>ShowMovieDetail(item.imdbID)}> 
            <img src={item.Poster} alt="" />
            <Box 
            w='30px' 
            h='30px' 
            bgColor='white'
            borderRadius='5px' 
            position='absolute' 
            top='10px' right='10px' 
            alignContent='center'
            >
                <FaHeart 
                  onClick={(e)=>{handleFavorite(item.imdbID),e.stopPropagation();}} 
                  style={{
                    fontSize:'24px', 
                    margin:'auto', 
                    color: favoriteList.some((favItem)=>favItem.imdbID === item.imdbID) ? 'red' : 'gray',
                    zIndex:'100'
                  }}
                />
            </Box>
          </Box>
          ))}
        </Box>
      </Stack>
    )
}

export default MovieListComponent
