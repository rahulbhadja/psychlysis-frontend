import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import { useWeb3React } from '@web3-react/core'
import axios from 'axios'
import React from 'react'

const Completed = () => {
  const { account, activate, deactivate, chainId } = useWeb3React()

  const [completedSurveys, setCompletedSurveys] = React.useState(null)

  const getCompletedSurveys = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/user/completed-survey/${account}`
      )
      console.log(data)
      setCompletedSurveys(data?.completedSurvey)
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
            <Flex key={survey?.surveyId}>
              <Heading>{survey?.surveyName}</Heading>
            </Flex>
          )
        })}
      </Flex>
    </Box>
  )
}

export default Completed
