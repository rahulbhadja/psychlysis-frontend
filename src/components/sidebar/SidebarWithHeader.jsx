import React, { ReactNode, useEffect } from 'react'
import {
  Box,
  CloseButton,
  Flex,
  HStack,
  useColorModeValue,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  BoxProps,
  Icon,
} from '@chakra-ui/react'
import { FiHome, FiUser } from 'react-icons/fi'
import { IconType } from 'react-icons'
import NavLink from './NavLink'
import { RiSurveyLine } from 'react-icons/ri'
import { HamburgerIcon } from '@chakra-ui/icons'
import Account from '../Account'
import { CiFaceSmile, CiUser, CiMemoPad, CiHome } from 'react-icons/ci'

const LinkItems = [
  { label: 'Home', icon: CiHome, href: '/' },
  { label: 'Survey', icon: CiMemoPad, href: '/survey' },
  { label: 'Profile', icon: CiUser, href: '/profile' },
  { label: 'Suggestions', icon: CiFaceSmile, href: '/suggestions' },
]

export default function SidebarWithHeader({ children }) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <Box minH="100vh" bg={useColorModeValue('gray.100', 'gray.900')}>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: 'none', md: 'block' }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <Flex
        ml={{ base: 0, md: 60 }}
        px={{ base: 4, md: 4 }}
        height="20"
        alignItems="center"
        bg={useColorModeValue('white', 'gray.900')}
        borderBottomWidth="1px"
        borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
        justifyContent={{ base: 'space-between', md: 'flex-end' }}
      >
        <Icon
          as={HamburgerIcon}
          display={{ base: 'flex', md: 'none' }}
          onClick={onOpen}
          fontSize="2xl"
          variant="outline"
          aria-label="open menu"
        />

        <Text
          display={{ base: 'flex', md: 'none' }}
          fontSize="2xl"
          fontFamily="monospace"
          fontWeight="bold"
        >
          Psychlysis
        </Text>

        <HStack spacing={{ base: '0', md: '6' }}>
          <Flex alignItems={'center'}>
            <Account />
          </Flex>
        </HStack>
      </Flex>

      <Box ml={{ base: 0, md: 60 }} p="4">
        {children}
      </Box>
    </Box>
  )
}

const SidebarContent = ({ onClose, ...rest }) => {
  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue('#00A6E2', 'gray.900')}
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          Psychlysis
        </Text>

        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      <Flex flexDirection={'column'} gap={'10px'}>
        {LinkItems.map((link) => (
          <NavLink
            onClose={onClose}
            key={link.label}
            href={link.href}
            icon={link.icon}
            label={link.label}
          />
        ))}
      </Flex>
    </Box>
  )
}
