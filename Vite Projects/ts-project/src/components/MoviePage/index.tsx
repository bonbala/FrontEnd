import { Box, Input, Button, VStack, HStack, Stack, Text, Card, Image, Flex } from "@chakra-ui/react";
import axios from 'axios';
import React, { useEffect, useState } from "react";
import { IMovie } from "./Movie.i";
import './style.scss'

import { FaHeart } from "react-icons/fa";

const MoviePage = () => {
  const [movieList, setMovieList] = useState<IMovie[]>([])
  const [inputSearch, setInputSearch] = useState<string>('')
  const [movie,setMovie] = useState<IMovie>()
  const [favoriteList, setFavoriteList] = useState<IMovie[]>([])

  const searchFilm = (inputSearch: string) => {
    const input: string = inputSearch.replace(/\s+/g, '')
    axios.get(`https://www.omdbapi.com/?apikey=addce378&s=${input}`)
      .then(function (response) {
        if (response.data.Search.length > 0) {
          const newListMovie: IMovie[] = response.data.Search.map((item: IMovie) => ({ ...item, isFavorite: false }))
          console.log('newListMovie:',newListMovie)
          setMovieList([...newListMovie])
        }

      })
      .catch(function (error) {
        console.log(error);
        alert("Vui lòng nhập tên phim muốn tìm kiếm")
      })
      .finally(function () {
      });
  }

  const handleFavorite = (id: string) => {
    const newFavoriteList: IMovie[] = [...favoriteList]
    if(favoriteList.some((item)=>item.imdbID === id)){
      setFavoriteList(newFavoriteList.filter((item)=>item.imdbID !== id))
      localStorage.setItem('favorite', JSON.stringify(newFavoriteList.filter((item)=>item.imdbID !== id)))
    }else{
      const list: IMovie[] = [...movieList]
      const favoriteMovie: IMovie[] = list.filter((item) => item.imdbID === id);
      setFavoriteList([...newFavoriteList,...favoriteMovie])
      localStorage.setItem('favorite', JSON.stringify([...newFavoriteList,...favoriteMovie]))
    }
    
  }

  const ShowMovieDetail = (id:string) => {
    console.log(id)
    axios.get(`https://www.omdbapi.com/?apikey=addce378&i=${id}`)
      .then(function (response) {
        const movieResponse : IMovie = response.data
        setMovie(movieResponse)
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {
      });
  }

  const handleSortYear = ()=>{
    const newList : IMovie[] = [...movieList]
    setMovieList(newList.sort((a, b) => parseInt(a.Year) - parseInt(b.Year)))
  }

  const handleSortAtoZ = ()=>{
    const newList : IMovie[] = [...movieList]
    setMovieList(newList.sort((a, b) => {
      const nameA = a.Title.toUpperCase();
      const nameB = b.Title.toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }

      return 0;
    }))
  }

  useEffect(()=>{
    const favoriteListLocal = localStorage.getItem('favorite')
    if(favoriteListLocal){
      const favList : IMovie[] = JSON.parse(favoriteListLocal)
      setFavoriteList(favList)
    }
    
  },[])
  return (
    <Stack p={4} direction='row' h={'100vh'}>
      <Box className="fav-container" w={'25%'} h={'100%'} p={4} border={'solid 1px black'} overflowY='scroll'>
          {favoriteList.map((item,index)=>(
            <Box className="fav-card" h={'25%'} display='flex' justifyContent='space-between'p={1} border={'solid 1px black'} mb={'10px'}
            onClick={()=>ShowMovieDetail(item.imdbID)}>
            
            <Box ml={2}>
            <Box 
            w='30px' 
            h='30px' 
            bgColor='#d2d1cd'
            borderRadius='5px' 
            alignContent='center'
            >
                <FaHeart 
                  onClick={(e)=>{handleFavorite(item.imdbID),e.stopPropagation()}} 
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


      <Box className="movie-detail" w={'25%'} h={'100%'} p={4} border={'solid 1px black'}>
      {movie ?<><img src={movie?.Poster} alt="" />
        <Text fontSize={'15px'}>Title: {movie?.Title}</Text>
        <Text fontSize={'15px'}>Type: {movie?.Type}</Text>
        <Text fontSize={'15px'}>Year: {movie?.Year}</Text></>  : ''}
      </Box>

    </Stack>
  )
}

export default MoviePage
