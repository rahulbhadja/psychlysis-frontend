import {
  Box,
  Button,
  Flex,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from '@chakra-ui/react'
import { rewardData } from '../../constants/surveys_1'
import { ArrowBackIcon } from '@chakra-ui/icons'
import NextLink from 'next/link'
import SurveyCard from '../../components/survey/SurveyCard'

export default function MoreSurvey() {
  return (
    <section>
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
            <Tab _selected={{ color: 'white', bg: 'brand.blue' }}>Protocol</Tab>
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
                {rewardData
                  .filter((product) => product.surveyType === false)
                  .map((product, i) => {
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
          <TabPanel>
            <Box>
              <Flex
                flexDirection={['column', 'column', 'row', 'row']}
                justifyContent={'center'}
                alignItems={'center'}
                gap={'20px'}
              >
                {rewardData
                  .filter((product) => product.surveyType === true)
                  .map((product, i) => {
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
    </section>
  )
}
