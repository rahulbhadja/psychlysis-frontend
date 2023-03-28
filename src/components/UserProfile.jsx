import {
  Avatar,
  Box,
  Flex,
  HStack,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Portal,
  Text,
} from '@chakra-ui/react'
import { FiChevronDown } from 'react-icons/fi'
import NextLink from 'next/link'
import { useDispatch } from 'react-redux'
import { logOutUser } from '../store/authentication/auth-actions'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'

export default function UserProfile() {
  const authUser = useSelector((state) => state?.auth?.authenticatedUser)

  const dispatch = useDispatch()
  const router = useRouter()
  return (
    <Box>
      <HStack spacing={{ base: '0', md: '6' }}>
        {/*<IconButton*/}
        {/*    size="lg"*/}
        {/*    variant="ghost"*/}
        {/*    aria-label="open menu"*/}
        {/*    icon={<FiBell />}*/}
        {/*/>*/}
        <Flex alignItems="center">
          <Menu>
            <MenuButton
              py={2}
              transition="all 0.3s"
              _focus={{ boxShadow: 'none' }}
            >
              <HStack spacing="4">
                <Avatar
                  size="md"
                  src={
                    'https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                  }
                />
                <Text>{authUser?.name}</Text>

                <Box display={{ base: 'none', md: 'flex' }}>
                  <FiChevronDown />
                </Box>
              </HStack>
            </MenuButton>
            <Portal>
              <MenuList
                fontSize="lg"
                bg="white"
                borderColor="gray.200"
                zIndex={'popover'}
              >
                <NextLink href={'/'} passHref>
                  <MenuItem>Home</MenuItem>
                </NextLink>
                <NextLink href={'/survey'} passHref>
                  <MenuItem>Survey</MenuItem>
                </NextLink>
                <NextLink href={'/profile'} passHref>
                  <MenuItem>Profile</MenuItem>
                </NextLink>
                <MenuDivider />
                <MenuItem
                  onClick={() => {
                    dispatch(logOutUser())
                    router.push('/login')
                  }}
                >
                  Sign out
                </MenuItem>
              </MenuList>
            </Portal>
          </Menu>
        </Flex>
      </HStack>
    </Box>
  )
}
