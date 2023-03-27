/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from '@chakra-ui/react'
import { useWeb3React } from '@web3-react/core'
import axios from 'axios'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { useAppSelector } from '../../../hooks'

const DetailedSurvey = () => {
  const { account, activate, deactivate, chainId } = useWeb3React()

  const { isOpen, onOpen, onClose } = useDisclosure()

  const router = useRouter()
  const { slug } = router.query

  const [questions, setQuestions] = useState([])
  const [answers, setAnswers] = useState(null)
  const [survey, setSurvey] = useState(null)

  //loading
  const [loading, setLoading] = useState(false)

  //message
  const [message, setMessage] = useState(null)

  const getSpecificSurvey = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/survey/get/${slug}`
      )
      console.log(data)
      setQuestions(data?.fetchedSurvey?.questions)
      setSurvey(data?.fetchedSurvey)
    } catch (error) {
      console.log(error)
    }
  }

  async function onSubmit(e: any) {
    setLoading(true)

    e.preventDefault()
    // alert(JSON.stringify(answers))

    try {
      const { data: response } = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/survey/submit`,
        {
          surveyId: survey?.surveyId,
          surveyName: survey?.surveyName,
          response: answers,
          userAddress: account,
        }
      )
      console.log(response)
      setMessage(response?.message)

      await onOpen()
    } catch (error) {
      console.log(error)
    }

    setLoading(false)
  }

  useEffect(() => {
    getSpecificSurvey()
  }, [slug])

  useEffect(() => {
    console.log(survey?.surveyName)
  }, [survey])

  return (
    <Box>
      <>
        <Flex
          justifyContent={'center'}
          alignItems={'center'}
          direction="column"
        >
          <Text fontSize="2xl" fontWeight="bold" color="gray.700">
            {' '}
            {survey?.surveyName}
          </Text>

          <Text fontSize="md" fontWeight="bold" color="gray.700" mt={2} mb={4}>
            {survey?.description}
          </Text>
          <Flex
            justifyContent={'space-between'}
            alignItems={'center'}
            width={'800px'}
          >
            <Text
              fontSize="md"
              fontWeight="bold"
              color="gray.700"
              mt={2}
              mb={4}
            >
              cc Reward : {survey?.ccReward} USDC
            </Text>
            <Text
              fontSize="md"
              fontWeight="bold"
              color="gray.700"
              mt={2}
              mb={4}
            >
              Survey Duration : {survey?.duration} Minute(s)
            </Text>
          </Flex>
        </Flex>
        {/* <Flex> Type from URl :{slug}</Flex> */}

        <form onSubmit={onSubmit}>
          <FormControl isRequired>
            <Flex direction="column" m="15px">
              {questions?.map((question, index) => (
                <Flex
                  width={'100%'}
                  justifyContent={'space-between'}
                  alignItems={'center'}
                  key={index}
                >
                  <FormLabel
                    width={'450px'}
                    fontSize={'18px'}
                    fontWeight={'bold'}
                    color={'gray.700'}
                    htmlFor={question?.question}
                  >
                    {question?.question}
                  </FormLabel>
                  <Flex
                    justifyContent={'center'}
                    alignItems={'center'}
                    gap={'30px'}
                  >
                    {question?.answers?.map((option, index) => (
                      <Flex key={index}>
                        <Flex>
                          {Object.entries(option).map(([key, value]: any) => (
                            <Flex gap={'20px'} key={key}>
                              <input
                                style={{
                                  width: '16px',
                                }}
                                required
                                type="radio"
                                key={value}
                                id={question?.question}
                                name={question?.question}
                                onChange={(e) =>
                                  setAnswers({
                                    ...answers,
                                    [question?.question]: e.target.value,
                                  })
                                }
                                value={value}
                              />
                              <Flex
                                fontSize={'15px'}
                                fontWeight={'normal'}
                                color={'gray.700'}
                              >
                                {value}
                              </Flex>
                            </Flex>
                          ))}
                        </Flex>
                      </Flex>
                    ))}
                  </Flex>
                </Flex>
              ))}
            </Flex>
          </FormControl>
          <Flex justifyContent={'center'}>
            <Button
              isLoading={loading}
              loadingText="Submitting..."
              variant={'primary'}
              type="submit"
            >
              Submit
            </Button>
          </Flex>
        </form>

        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>
              <Text fontSize="2xl" fontWeight="bold" color="gray.700">
                {survey?.surveyName}
              </Text>
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Flex
                justifyContent={'center'}
                alignItems={'center'}
                direction="column"
                gap={'20px'}
              >
                <Text
                  fontSize="md"
                  fontWeight="bold"
                  color="gray.700"
                  mt={2}
                  mb={4}
                >
                  {message}
                </Text>
                <Button
                  variant={'primary'}
                  onClick={() => router.push('/survey')}
                >
                  Go to Survey
                </Button>
              </Flex>
            </ModalBody>
          </ModalContent>
        </Modal>
      </>
    </Box>
  )
}

export default DetailedSurvey
