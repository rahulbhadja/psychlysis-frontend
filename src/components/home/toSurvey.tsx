import { Button, Flex, Text } from '@chakra-ui/react'
import NextLink from 'next/link'

export default function ToSurvey({ linkButton }) {
  return (
    <Flex
      flexDirection="column"
      bg={'gray.50'}
      borderRadius={'2xl'}
      px={10}
      py={5}
    >
      <Flex
        justify="space-between"
        align="center"
        w="100%"
        flexDir={{ sm: 'column', md: 'row' }}
      >
        <Text fontSize="md" fontWeight="bold">
          Finish the survey to Check your personality and mood today
        </Text>
        <NextLink href={linkButton} passHref>
          <Button variant={'primary'} fontSize="xs">
            Go to survey
          </Button>
        </NextLink>
      </Flex>
    </Flex>
  )
}
