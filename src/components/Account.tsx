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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare let window: any

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
  return (
    <>
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
          Login
        </Text>
      </Button>
    </>
  )
}

export default Account
