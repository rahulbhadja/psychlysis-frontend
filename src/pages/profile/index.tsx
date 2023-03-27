import { SimpleGrid } from '@chakra-ui/react'
import ProfileCard from '../../components/profile/profileCard'
import PersonalInfo from '../../assets/PersonalInfo.png'
import DataPrivacy from '../../assets/DataPrivacy.png'

export default function Profile() {
  return (
    <section>
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
      </SimpleGrid>
    </section>
  )
}
