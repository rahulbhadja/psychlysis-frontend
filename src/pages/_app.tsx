/* eslint-disable @typescript-eslint/no-explicit-any */
import Layout from '../layouts/layout'
import { ChakraProvider } from '@chakra-ui/react'
import theme from '../theme'
import { store } from '../store/store'
import { Provider } from 'react-redux'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const App = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      {' '}
      <ChakraProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
          <ToastContainer />
        </Layout>
      </ChakraProvider>
    </Provider>
  )
}

export default App
