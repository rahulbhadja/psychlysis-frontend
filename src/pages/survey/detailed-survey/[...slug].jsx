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
import axios from 'axios'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const DetailedSurvey = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const authUser = useSelector((state) => state?.auth?.authenticatedUser)

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

  useEffect(() => {
    console.log('survey', survey)
  }, [survey])

  async function onSubmit(e) {
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
          userId: authUser?.userId,
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
          <Flex justifyContent={'center'} alignItems={'center'} width={'800px'}>
            <Text
              fontSize="md"
              fontWeight="bold"
              color="gray.700"
              mt={2}
              mb={4}
            >
              Survey Duration : {10} Minute(s)
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
                          {Object.entries(option).map(([key, value]) => (
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
                  {/* {message} */}

                  {survey?.surveyName === 'Mood survey'
                    ? `Thank you for your time. Your response has been recorded. 
                    If you are feeling low, please reach out to your friends or family.
                    If you are feeling suicidal, please reach out to a mental health professional.
                    IF yor are not yourself and you are feeling suicidal, please call 911.
                    Please do complete the survey again after 3 weeks.`
                    : message}
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
