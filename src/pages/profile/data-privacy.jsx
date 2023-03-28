import { ArrowBackIcon } from '@chakra-ui/icons'
import { Button, Flex, Text } from '@chakra-ui/react'
import NextLink from 'next/link'

export default function DataPrivacy() {
  return (
    <section>
      <Flex
        direction="column"
        justifyContent="start"
        alignItems="start"
        w="100%"
        h="100%"
        p="1rem"
      >
        <Text fontSize="2xl" fontWeight="bold">
          Data Privacy
        </Text>
        <Flex direction="column" w="100%" h="100%" p="1rem">
          <Text fontSize="xl" fontWeight="bold">
            Information We Collect
          </Text>
          <Text fontSize="md" fontWeight="normal">
            We may collect and process the following types of personal
            information about you:
          </Text>
          <Flex direction="column" w="100%" h="100%" p="1rem">
            <Text fontSize="md" fontWeight="bold">
              a. Information you provide to us:
            </Text>
            <Text fontSize="md" fontWeight="normal">
              This includes any information that you submit when you register
              for an account, sign up for our newsletter, or interact with our
              Services, such as your name, email address, postal address, phone
              number, username, password, and any other information you choose
              to provide.
            </Text>
            <Text fontSize="md" fontWeight="bold">
              b. Information we collect automatically:
            </Text>
            <Text fontSize="md" fontWeight="normal">
              We may collect information about your device, browser, IP address,
              operating system, and how you interact with our Services, such as
              the pages you visit, links you click, and the date and time of
              your visit.
            </Text>
            <Text fontSize="md" fontWeight="bold">
              c. Information from third parties:
            </Text>
            <Text fontSize="md" fontWeight="normal">
              We may receive information about you from third parties, such as
              social media platforms, advertising networks, or analytics
              providers, which we may combine with the information we have
              collected about you.
            </Text>
          </Flex>
          <Flex direction="column" w="100%" h="100%" p="1rem">
            <Text fontSize="xl" fontWeight="bold">
              How We Use Your Information
            </Text>
            <Text fontSize="md" fontWeight="normal">
              We use your personal information for the following purposes:
            </Text>
            <Flex direction="column" w="100%" h="100%" p="1rem">
              <Text fontSize="md" fontWeight="bold">
                a. To provide, maintain, and improve our Services, including
                personalizing your user experience and tailoring content to your
                preferences.
              </Text>
              <Text fontSize="md" fontWeight="bold">
                b. To communicate with you about our Services, including sending
                you emails, push notifications, and other messages.
              </Text>
              <Text fontSize="md" fontWeight="bold">
                c. To administer our Services, including troubleshooting, data
                analysis, testing, research, statistical and survey purposes.
              </Text>
              <Text fontSize="md" fontWeight="bold">
                d. To protect, investigate, and deter against fraudulent,
                unauthorized, or illegal activity.
              </Text>
              <Text fontSize="md" fontWeight="bold">
                e. To comply with applicable laws and regulations.
              </Text>
            </Flex>
          </Flex>
        </Flex>
        <Flex mr={4}>
          <NextLink href={'/profile'} passHref>
            <Button
              fontSize={'sm'}
              variant={'secondary'}
              leftIcon={<ArrowBackIcon />}
            >
              Back
            </Button>
          </NextLink>
        </Flex>
      </Flex>
    </section>
  )
}
