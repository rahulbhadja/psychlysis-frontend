import { Box, Button, Flex, Text } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import React from 'react'

type SurveyCardProps = {
  bountyFrequency?: string
  title: string
  description: string
  reward: number
  time: number
  mainCard?: boolean
  surveyId: string
}

function SurveyCard({
  bountyFrequency,
  title,
  description,
  reward,
  time,
  mainCard,
  surveyId,
}: SurveyCardProps) {
  const router = useRouter()
  return (
    <Box margin={'10px'}>
      <Flex
        justifyContent={'start'}
        alignItems={'center'}
        flexDirection={'column'}
      >
        <Text m={'10px'} fontSize={'18px'}>
          {bountyFrequency}
        </Text>
        <Flex
          p={'20px'}
          bgColor={'#f7fafc'}
          borderRadius={'16px'}
          h={mainCard ? '380px' : '320px'}
          w={mainCard ? '280px' : '240px'}
          justifyContent={'space-between'}
          direction={'column'}
        >
          <Flex m={'10px'} justifyContent={'start'} alignItems={'center'}>
            <Text fontSize={'16px'} lineHeight={'24px'} fontWeight={'700'}>
              {title}{' '}
            </Text>
          </Flex>
          <Flex height={'70px'} justifyContent={'center'} alignItems={'center'}>
            <Text fontSize={mainCard ? '14px' : '12px'} fontWeight={'bold'}>
              {' '}
              {description}
            </Text>
          </Flex>
          <Flex
            mt={'5px'}
            justifyContent={'space-between'}
            flexDirection={'row'}
          >
            <Text fontWeight={'bold'} color={'brand.gray'} fontSize={'xs'}>
              Type : Survey
            </Text>
            <Text fontWeight={'bold'} color={'brand.gray'} fontSize={'xs'}>
              Time: {time} mins
            </Text>
          </Flex>
          <Flex justifyContent={'center'} alignItems={'center'}>
            <Button
              variant={'primary'}
              fontSize={'sm'}
              onClick={() => {
                router.push(`/survey/detailed-survey/${surveyId}`)
              }}
            >
              start survey
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  )
}

export default SurveyCard
