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
} from '@chakra-ui/react'
import { FiChevronDown } from 'react-icons/fi'
import NextLink from 'next/link'

export default function UserProfile() {
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
                <MenuItem>Sign out</MenuItem>
              </MenuList>
            </Portal>
          </Menu>
        </Flex>
      </HStack>
    </Box>
  )
}
