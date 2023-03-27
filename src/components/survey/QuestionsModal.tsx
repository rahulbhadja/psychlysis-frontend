//import inputData from "../../data2";
import { useState } from 'react'
import {
  Button,
  Flex,
  Heading,
  HStack,
  Radio,
  RadioGroup,
  Stack,
  VStack,
} from '@chakra-ui/react'
import axios from 'axios'

export default function InputDataModal({ inputData }) {
  const [currentQuestion, setCurrentQuestion] = useState<number>(0)
  const [selectedOptions, setSelectedOptions] = useState([])
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleAnswerOption = (answer) => {
    setSelectedOptions([
      (selectedOptions[currentQuestion] = { [currentQuestion]: answer }),
    ])
    setSelectedOptions([...selectedOptions])
    console.log(selectedOptions)
  }

  const handlePrevious = () => {
    const prevQues = currentQuestion - 1
    prevQues >= 0 && setCurrentQuestion(prevQues)
  }

  const handleNext = () => {
    const nextQues = currentQuestion + 1
    nextQues < inputData.length && setCurrentQuestion(nextQues)
  }

  const handleSubmitButton = () => {
    setIsSubmitted(true)
    console.log(selectedOptions)
    createSurvey()
  }

  const createSurvey = () => {
    const survey = {
      surveyName: 'test',
      surveyType: '0',
      ccReward: 1,
      usdReward: 5,
      duration: 1,
      bountyFrequency: 0,
      questions: {
        type: 0,
        question: 'survey question!',
        answers: selectedOptions,
      },
    }

    axios
      .post('/survey', survey)
      .then(function (response) {
        console.log(response)
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  return (
    <>
      {isSubmitted ? (
        <h1 className="text-3xl font-semibold text-center text-white">
          Thank you for your answers
        </h1>
      ) : (
        <Flex width={'full'} justifyContent={'center'}>
          <VStack>
            <Heading as="h3" size="lg" padding={'3'}>
              Question {currentQuestion + 1} of {inputData.length}
            </Heading>

            <Flex>{inputData[currentQuestion].question}</Flex>
            <Flex>
              <RadioGroup>
                <Stack spacing={5} direction="row">
                  {inputData[currentQuestion].answerOptions.map(
                    (answer, index) => (
                      <Radio
                        key={index}
                        onClick={() => handleAnswerOption(answer.answer)}
                        checked={
                          answer.answer ===
                          selectedOptions[currentQuestion]?.answerByUser
                        }
                        value={answer.answer}
                        name={answer.answer}
                        colorScheme={'teal.500'}
                      >
                        {answer.answer}
                      </Radio>
                    )
                  )}
                </Stack>
              </RadioGroup>
            </Flex>
            <Flex>
              <HStack>
                <Button onClick={handlePrevious}>Previous</Button>
                <Button
                  onClick={
                    currentQuestion + 1 === inputData.length
                      ? handleSubmitButton
                      : handleNext
                  }
                >
                  {currentQuestion + 1 === inputData.length ? 'Submit' : 'Next'}
                </Button>
              </HStack>
            </Flex>
          </VStack>
        </Flex>
      )}
    </>
  )
}
