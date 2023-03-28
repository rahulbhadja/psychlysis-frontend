import Head from 'next/head'

//Dashboard Layout with side navigation bar on the left, header and main content on the right.

// import { useColorModeValue, useDisclosure } from '@chakra-ui/react'
import SidebarWithHeader from '../components/sidebar/SidebarWithHeader'
import UserProfile from '../components/UserProfile'

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Psychlysis</title>
      </Head>
      <SidebarWithHeader>{children}</SidebarWithHeader>
    </>
  )
}
