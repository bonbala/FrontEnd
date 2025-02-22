import React from 'react'
import { Box, Input, Button, VStack, HStack, Text } from "@chakra-ui/react";
const DetailComponent = () => {
    return (
        <Box className="movie-detail" w={'25%'} h={'100%'} p={4} border={'solid 1px black'}>
              {movie ?<><img src={movie?.Poster} alt="" />
                <Text fontSize={'15px'}>Title: {movie?.Title}</Text>
                <Text fontSize={'15px'}>Type: {movie?.Type}</Text>
                <Text fontSize={'15px'}>Year: {movie?.Year}</Text></>  : ''}
              </Box>
    )
}

export default DetailComponent
