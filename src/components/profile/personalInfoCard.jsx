import {
  Box,
  Flex,
  HStack,
  Text,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react'
import { useState } from 'react'
import { useSelector } from 'react-redux'

const PersonalInformation = () => {
  const authUser = useSelector((state) => state?.auth?.authenticatedUser)
  const textColor = useColorModeValue('gray.700', 'white')
  const [user, setUser] = useState({
    name: authUser?.name,
    birthday: '01/01/2000',
    //email: "john@test.com",
    //location: "London, UK",
    maritalStatus: 'Single',
    language: 'English',
  })

  const userDetails = Object.keys(user).map((item) => {
    return { title: item, value: user[item] }
  })

  function camelCaseToNormalText(string) {
    const result = string.replace(/([A-Z])/g, ' $1')
    const finalResult = result.charAt(0).toUpperCase() + result.slice(1)
    return finalResult
  }

  return (
    <VStack align={'start'} bg={'gray.50'} borderRadius={'2xl'} py={10} px={14}>
      <Flex mb={10}>
        <Text fontSize="xl" color={textColor} fontWeight="bold">
          Personal Information
        </Text>
      </Flex>
      <HStack spacing={20}>
        <VStack align={'start'} spacing={5}>
          {userDetails.map((attribute) => {
            return (
              <Box key={attribute.title}>
                <Text fontSize="md" color={textColor} fontWeight="bold">
                  {camelCaseToNormalText(attribute.title)}
                </Text>
              </Box>
            )
          })}
        </VStack>
        <VStack align={'start'} spacing={5}>
          {userDetails.map((attribute) => {
            return (
              <Box key={attribute.title}>
                <Text fontSize="md" color={textColor} fontWeight={'normal'}>
                  {attribute.value}
                </Text>
              </Box>
            )
          })}
        </VStack>
      </HStack>
    </VStack>
  )
}

export default PersonalInformation
