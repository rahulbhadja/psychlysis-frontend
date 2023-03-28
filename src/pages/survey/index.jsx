import {
  Box,
  Button,
  Flex,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Text,
} from '@chakra-ui/react'
import { rewardData } from '../../constants/surveys_1'
import { ArrowBackIcon } from '@chakra-ui/icons'
import NextLink from 'next/link'
import SurveyCard from '../../components/survey/SurveyCard'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { getAuthenticatedUser } from '../../store/authentication/auth-actions'
import { useRouter } from 'next/router'
import axios from 'axios'

export default function MoreSurvey() {
  const router = useRouter()
  const dispatch = useDispatch()
  const authUser = useSelector((state) => state?.auth?.authenticatedUser)
  const [surveys, setSurveys] = useState([])

  // useEffect(() => {
  //   if (!authUser) {
  //     router.push('/login')
  //   }
  // }, [authUser])

  const getAllSurveys = async () => {
    try {
      const { data } = await axios({
        method: 'GET',
        url: 'http://localhost:8080/survey/getall',
      })

      console.log(data)
      setSurveys(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getAllSurveys()
  }, [])

  // useEffect(() => {
  //   console.log('authUser: ', authUser)
  // }, [authUser])

  return (
    <section>
      {authUser ? (
        <Tabs variant={'soft-rounded'} size={'sm'}>
          <TabList>
            <Flex mr={4}>
              <NextLink href={'/'} passHref>
                <Button
                  fontSize={'sm'}
                  variant={'secondary'}
                  leftIcon={<ArrowBackIcon />}
                >
                  Back
                </Button>
              </NextLink>
            </Flex>
            <Flex bg={'gray.50'} borderRadius={'full'} p={1}>
              <Tab _selected={{ color: 'white', bg: 'brand.blue' }}>
                All Surveys
              </Tab>
            </Flex>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Box>
                <Flex
                  flexDirection={['column', 'column', 'row', 'row']}
                  justifyContent={'center'}
                  alignItems={'center'}
                  gap={'20px'}
                >
                  {surveys?.fetchedSurvey?.map((product, i) => {
                    return (
                      <SurveyCard
                        title={product.surveyName}
                        description={product.description}
                        reward={product.ccReward}
                        time={10}
                        surveyId={product.surveyId}
                        key={i}
                      />
                    )
                  })}
                </Flex>
              </Box>
            </TabPanel>
            <TabPanel>
              <Box>
                <Flex
                  flexDirection={['column', 'column', 'row', 'row']}
                  justifyContent={'center'}
                  alignItems={'center'}
                  gap={'20px'}
                >
                  {rewardData
                    ?.filter((product) => product.surveyType === true)
                    ?.map((product, i) => {
                      return (
                        <SurveyCard
                          title={product.surveyName}
                          description={product.description}
                          reward={product.ccReward}
                          time={product.duration}
                          surveyId={product.surveyId}
                          key={i}
                        />
                      )
                    })}
                </Flex>
              </Box>
            </TabPanel>
          </TabPanels>
        </Tabs>
      ) : (
        <Flex
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          mt={20}
          gap={10}
        >
          <Text fontSize={30} fontWeight="bold" mt={4}>
            Please login to view surveys
          </Text>
          <NextLink href={'/login'} passHref>
            <Button
              fontSize={'sm'}
              variant={'secondary'}
              leftIcon={<ArrowBackIcon />}
            >
              Login
            </Button>
          </NextLink>
        </Flex>
      )}
    </section>
  )
}
