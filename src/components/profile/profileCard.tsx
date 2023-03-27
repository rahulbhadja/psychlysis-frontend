import { Box, Flex, Text } from '@chakra-ui/react'
import NextImage from 'next/image'
import NextLink from 'next/link'

export default function ProfileCard({ cardText, cardImage, cardLink }) {
  return (
    <NextLink href={cardLink} passHref>
      <Flex
        cursor={'pointer'}
        h={'300px'}
        bg={'gray.50'}
        p={5}
        borderRadius={'2xl'}
        flexDir={'column'}
      >
        <NextImage src={cardImage} alt="Personal Information" />
        <Box position={'absolute'} m={4}>
          <Text fontSize="lg" fontWeight="bold" color={'brand.darkblue'}>
            {cardText}
          </Text>
        </Box>
      </Flex>
    </NextLink>
  )
}
