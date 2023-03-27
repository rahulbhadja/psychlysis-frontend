// Chakra imports
import { Box, Flex, Text, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import UserProfile from './UserProfile'

const Header = ({ name, email }) => {
  const bgProfile = useColorModeValue(
    'hsla(0,0%,100%,.8)',
    'hsla(0,0%,100%,.8)'
  )
  const textColor = useColorModeValue('gray.700', 'white')
  const borderProfileColor = useColorModeValue(
    'white',
    'rgba(255, 255, 255, 0.31)'
  )
  const emailColor = useColorModeValue('gray.400', 'gray.300')

  return (
    <Box
      ml={{ base: 0, md: 60 }}
      mb={6}
      position="sticky"
      top="0"
      borderRadius="15px"
      p={4}
      display="flex"
      flexDirection="column"
      justifyContent="center"
    >
      <Box
        bgGradient="linear(to bottom right, brand.blue,brand.yellow)"
        w="100%"
        h="135px"
        borderRadius="25px"
        bgPosition="50%"
        bgRepeat="no-repeat"
        position="sticky"
        display="flex"
        justifyContent="center"
      >
        <Flex
          direction={{ sm: 'column', md: 'row' }}
          mx="1.5rem"
          maxH="165px"
          w={'95%'}
          justifyContent={{ sm: 'center', md: 'space-between' }}
          align="center"
          backdropFilter="saturate(200%) blur(50px)"
          position="relative"
          boxShadow="0px 2px 5.5px rgba(0, 0, 0, 0.02)"
          border="2px solid"
          borderColor={borderProfileColor}
          bg={bgProfile}
          p="24px"
          borderRadius="20px"
          transform={{ base: 'translateY(20%)' }}
        >
          <Flex
            align="center"
            mb={{ sm: '10px', md: '0px' }}
            direction={{ base: 'column', sm: 'column', md: 'row' }}
            w={'100%'}
            textAlign={{ base: 'center', sm: 'center', md: 'start' }}
            justifyContent={'space-between'}
          >
            <Flex
              direction={{ base: 'column', sm: 'column', md: 'row' }}
              align={'center'}
            >
              <Flex direction="column" maxWidth="100%">
                <Text
                  fontSize={{ sm: 'lg', lg: 'xl' }}
                  color={textColor}
                  fontWeight="bold"
                >
                  {name}
                </Text>
                <Text
                  fontSize={{ sm: 'sm', md: 'md' }}
                  color={emailColor}
                  fontWeight="semibold"
                >
                  {email}
                </Text>
              </Flex>
            </Flex>
            <Flex>
              <UserProfile />
            </Flex>
          </Flex>
        </Flex>
      </Box>
    </Box>
  )
}

export default Header
