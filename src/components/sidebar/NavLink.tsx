import NextLink from 'next/link'
import { Box, Flex, Icon } from '@chakra-ui/react'
import { useRouter } from 'next/router'

type LinkItemProps = {
  label: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: any
  href: string
  onClose?: () => void
}
export default function NavLink({ label, icon, href, onClose }: LinkItemProps) {
  const router = useRouter()
  const currentRoute = router.pathname

  return (
    <NextLink href={href} passHref>
      <Box>
        <Flex
          mx={'20px'}
          height={'40px'}
          borderRadius={'10px'}
          bgColor={currentRoute === href ? 'white' : 'none'}
          justifyContent={'start'}
          alignItems={'center'}
          gap={'10px'}
          onClick={onClose}
          cursor="pointer"
          _hover={{
            boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
            scale: 4,
          }}
          p={2}
        >
          <Icon
            as={icon}
            color={currentRoute === href ? '#00A6E2' : 'white'}
            fontSize={'2xl'}
          />

          <Flex
            color={currentRoute === href ? '#00A6E2' : 'white'}
            fontWeight="bold"
            fontSize="20px"
          >
            {label}
          </Flex>
        </Flex>
      </Box>
    </NextLink>
  )
}
