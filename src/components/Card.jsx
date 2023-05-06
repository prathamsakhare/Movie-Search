import React from 'react';
import {
  Card,
  CardBody,
  Heading,
  Text,
  Image,
  Stack,
  Button,
  HStack,
  Spacer,
  Center,
} from '@chakra-ui/react';
const CardPad = ({ id, name, imageUrl, description, rank, year }) => {
  return (
    <Card maxW="sm" key={id} _hover={{ boxShadow: '2xl' }}>
      <CardBody>
        <Image src={imageUrl} alt={name} />

        <Stack mt="6" spacing="3">
          <Stack>
            <Heading size={'lg'}>{name}</Heading>
            <Text fontSize={'1xl'}>{description}</Text>
            <HStack>
              <Text as="b">Released in: </Text>
              <Text>{year}</Text>
            </HStack>
          </Stack>
          <Spacer />
          <Stack>
            <Button>{rank}</Button>
          </Stack>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default CardPad;
