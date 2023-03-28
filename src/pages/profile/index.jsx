import { Button, Flex, SimpleGrid, Text } from '@chakra-ui/react'
import ProfileCard from '../../components/profile/profileCard'
import PersonalInfo from '../../assets/PersonalInfo.png'
import DataPrivacy from '../../assets/DataPrivacy.png'
import CompletedSurveys from '../../assets/pOne.f9e3980f.svg'
import { useSelector } from 'react-redux'
import NextLink from 'next/link'
import { ArrowBackIcon } from '@chakra-ui/icons'

export default function Profile() {
  const authUser = useSelector((state) => state?.auth?.authenticatedUser)

  return (
    <section>
      {authUser ? (
        <SimpleGrid columns={3} spacing={10}>
          <ProfileCard
            cardText={'Personal Information'}
            cardImage={PersonalInfo}
            cardLink={'/profile/personal'}
          />
          <ProfileCard
            cardText={'Data Privacy'}
            cardImage={DataPrivacy}
            cardLink={'/profile/data-privacy'}
          />
          <ProfileCard
            cardText={'Completed Surveys'}
            cardImage={CompletedSurveys}
            cardLink={'/profile/completed'}
          />
        </SimpleGrid>
      ) : (
        <Flex
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          mt={20}
          gap={10}
        >
          <Text fontSize={30} fontWeight="bold" mt={4}>
            Please login to view your profile
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
