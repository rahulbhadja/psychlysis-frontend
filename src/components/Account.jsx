/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { getEllipsisTxt } from '../utils/formatters'
import { useEffect, useState } from 'react'
import {
  Box,
  Flex,
  Text,
  Link,
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useClipboard,
  useColorModeValue,
} from '@chakra-ui/react'
import Image from 'next/image'
import 'react-toastify/dist/ReactToastify.css'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { getAuthenticatedUser } from '../store/authentication/auth-actions'
import UserProfile from './UserProfile'

// eslint-disable-next-line @typescript-eslint/no-explicit-any

const styles = {
  account: {
    height: '42px',
    padding: '0 15px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 'fit-content',
    borderRadius: '12px',
    backgroundColor: 'rgb(244, 244, 244)',
    cursor: 'pointer',
  },

  connector: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    height: 'auto',
    justifyContent: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: '20px 5px',
    cursor: 'pointer',
  },
}

function Account() {
  const router = useRouter()
  const dispatch = useDispatch()
  const authUser = useSelector((state) => state?.auth?.authenticatedUser)

  useEffect(() => {
    console.log('authUser', authUser)
  }, [authUser])

  useEffect(() => {
    dispatch(getAuthenticatedUser())
  }, [dispatch])

  return (
    <>
      {authUser?.name ? (
        <UserProfile />
      ) : (
        <Button
          zIndex={10}
          variant={'primary'}
          borderRadius="35px"
          onClick={() => router.push('/login')}
        >
          <Text
            ml={'5px'}
            fontSize={['14px', '14px', '18px', '18px']}
            fontWeight="700px"
            lineHeight={'25px'}
          >
            {authUser?.name || 'Login'}
          </Text>
        </Button>
      )}
    </>
  )
}

export default Account
