import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import {
  Box,
  Button,
  CloseButton,
  Flex,
  Stack,
  Text,
  useColorMode,
} from '@chakra-ui/react'
import { FiHome, FiUser } from 'react-icons/fi'
import NavLink from './NavLink'
import { RiSurveyLine } from 'react-icons/ri'
import { DarkModeSwitch } from '../DarkModeSwitch'
import { useWeb3React } from '@web3-react/core'
import axios from 'axios'
import { useAppDispatch, useAppSelector } from '../../hooks/index'
import { ethers } from 'ethers'
import { toast } from 'react-toastify'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare let window: any

const LinkItems = [
  { label: 'Home', icon: FiHome, href: '/' },
  { label: 'Survey', icon: RiSurveyLine, href: '/survey' },
  { label: 'Profile', icon: FiUser, href: '/profile' },
]

export default function Sidebar({ onClose, ...rest }) {
  const { account, activate } = useWeb3React()
  const router = useRouter()
  const dispatch = useAppDispatch()

  const [loading, setLoading] = useState<boolean>(false)

  const { colorMode } = useColorMode()

  const handleMetamaskLogin = async () => {
    await getAddressMetamaskAuth()
  }

  const getAddressMetamaskAuth = async () => {
    try {
      setLoading(true)
      if (!window.ethereum) {
        throw new Error('No crypto wallet found. Please install it.')
      }

      await window.ethereum.send('eth_requestAccounts')
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      const signer = provider.getSigner()
      const add = await signer.getAddress()

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const isRegistered = await checkIfAddressExistAuth(add)
      const nonce = await getdata(add)
      const singedMessage = await signMessageAuth(nonce)
      const user = await loginAuth(add, singedMessage)

      if (user) {
        toast.success('User loggedIn successfully')
      }
      setLoading(false)
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }
  const getdata = async (address: string) => {
    try {
      const res = await axios({
        method: 'GET',
        url: `${process.env.SERVER_URL}/auth/${address}/nonce`,
      })
      const { data } = res

      return data.nonce
    } catch (error) {
      console.log(error)
    }
  }

  const signMessageAuth = async (id: string) => {
    try {
      if (!window.ethereum) {
        throw new Error('No crypto wallet found. Please install it.')
      }

      await window.ethereum.send('eth_requestAccounts')
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      const signer = provider.getSigner()
      const message = `PsykCare one time Login id : ${id}`
      const signature = await signer.signMessage(message)
      return signature
    } catch (error) {
      console.log(error)
      toast.error('signing was not successful')
    }
  }
  const loginAuth = async (address: string, signature: string) => {
    try {
      const { data } = await axios({
        method: 'POST',
        url: `${process.env.SERVER_URL}/auth/login`,
        data: {
          address,
          signature,
        },
        withCredentials: true,
      })
      return data.user
    } catch (error) {
      console.log(error)
      toast.error('User is not authenticated')
    }
  }

  const registerUser = async (address: string) => {
    try {
      const res = await axios({
        method: 'POST',
        url: `${process.env.SERVER_URL}/auth/register`,
        data: {
          address,
        },
        withCredentials: true,
      })
    } catch (error) {
      console.log(error)
    }
  }

  const checkIfAddressExistAuth = async (address: string) => {
    try {
      const res = await axios({
        method: 'POST',
        url: `${process.env.SERVER_URL}/auth/register`,
        data: {
          address,
        },
        withCredentials: true,
      })
      const { data } = res
      console.log(data)

      if (data.success === false) {
        return true
      }
      return registerUser(address)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Box
      transition="3s ease"
      bg={colorMode === 'light' ? 'white' : 'gray.900'}
      borderRight="1px"
      borderRightColor={colorMode === 'light' ? 'gray.200' : 'gray.800'}
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex
        h="20"
        alignItems="left"
        ml={12}
        my={12}
        justifyContent="space-between"
      >
        <Text fontSize="2xl" fontWeight="bold">
          Psyk.Care
        </Text>
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      <Stack flexDir="column" alignItems={'space-between'} spacing={5} ml={12}>
        <Button
          loadingText="Loading..."
          isLoading={loading}
          onClick={() => {
            handleMetamaskLogin()
          }}
        >
          <Text> Connect Wallet</Text>
        </Button>
      </Stack>
      <Box
        display={{ base: 'none', md: 'flex' }}
        position="fixed"
        bottom={4}
        right={4}
      >
        <DarkModeSwitch />
      </Box>
    </Box>
  )
}
