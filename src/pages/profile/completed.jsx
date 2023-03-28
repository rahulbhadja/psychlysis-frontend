import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { getAuthenticatedUser } from '../../store/authentication/auth-actions'

const Completed = () => {
  const [completedSurveys, setCompletedSurveys] = React.useState(null)
  const authUser = useSelector((state) => state?.auth?.authenticatedUser)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAuthenticatedUser())
  }, [])

  const getCompletedSurveys = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/survey/getresponse/${authUser?.userId}`
      )
      console.log(data)
      setCompletedSurveys(data?.fetchedSurvey)
    } catch (error) {
      console.log(error)
    }
  }

  React.useEffect(() => {
    getCompletedSurveys()
  }, [])

  return (
    <Box>
      <Heading>Completed Survey</Heading>
      <Flex>
        {completedSurveys?.map((survey) => {
          return (
            <Flex
              key={survey?.surveyId}
              direction={'column'}
              border={'1px solid #e2e8f0'}
              borderRadius={'md'}
              p={4}
              m={2}
            >
              <Text fontWeight={'bold'}>{survey?.surveyName}</Text>
            </Flex>
          )
        })}
      </Flex>
    </Box>
  )
}

export default Completed
