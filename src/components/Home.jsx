import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CardPad from './Card';
import { Box, Center, Input, HStack, Button, Grid } from '@chakra-ui/react';
const Home = () => {
  const [movies, setMovies] = useState([]);
  const [endpoint, setEndpoint] = useState(``);
  const [finalPoint, setfinalPoint] = useState('');
  const options = {
    method: 'GET',
    url: 'https://online-movie-database.p.rapidapi.com/auto-complete',
    params: { q: `${endpoint}` },
    headers: {
      'X-RapidAPI-Key': '9ec33527cbmshfaf2fd1d87d9a76p18f24ajsnb026150744ca',
      'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com',
    },
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.request(options);
        // console.log(response.data.d);
        setMovies(response.data.d);
        console.log(movies);
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, [finalPoint]);
  const onChangeHandler = e => {
    setEndpoint(e.target.value);
  };
  const submitHandler = e => {
    e.preventDefault();
    setfinalPoint(endpoint);
  };
  return (
    <div>
      <Box w="100%">
        <Center mt={'13'}>
          <HStack>
            <form onSubmit={submitHandler}>
              <Input
                placeholder="Search Movie Here..."
                width={'90'}
                type="text"
                value={endpoint}
                onChange={onChangeHandler}
              />
              <Center>
                <Button mt={'3'} type="submit">
                  Submit
                </Button>
              </Center>
            </form>
          </HStack>
        </Center>
      </Box>
      <Box
        display={'flex'}
        flexWrap={'wrap'}
        justifyContent={'space-evenly'}
        mt={5}
      >
        {movies?.map((item, key) => {
          return (
            <Box my={3} className="boxChakra">
              <CardPad
                name={item.l}
                key={item.id}
                imageUrl={item.i?.imageUrl}
                description={item.s}
                rank={item.rank}
                year={item.y}
              />
            </Box>
          );
        })}
      </Box>
    </div>
  );
};

export default Home;
