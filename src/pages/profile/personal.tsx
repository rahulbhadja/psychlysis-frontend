import { Button, Flex, Heading, SimpleGrid } from '@chakra-ui/react'
import { useRouter } from 'next/router'

export default function Personal() {
  const router = useRouter()
  return (
    <section>
      {/* <SimpleGrid columns={{ md: 1, lg: 2 }}>
        <PersonalInformation />
      </SimpleGrid> */}
      <Flex
        justifyContent={'start'}
        alignItems={'start'}
        gap={'20px'}
        direction="column"
      >
        <Flex>
          <Heading>Personal Information</Heading>
        </Flex>
        <Flex>
          <Button
            width={'full'}
            height={'40px'}
            variant={'primary'}
            // on hover add a right arrow

            sx={{
              '&:hover': {
                backgroundColor: 'brand.darkblue',
                color: 'white',
              },
            }}
            onClick={() => router.push('/profile/completed')}
          >
            {`View Completed Surveys`}
          </Button>
        </Flex>{' '}
      </Flex>
    </section>
  )
}

// Personal.getLayout = function getLayout(page) {
//     return (
//         <Layout>
//             {page}
//         </Layout>
//     )
// }
