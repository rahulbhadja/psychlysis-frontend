import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const fonts = { roboto: { family: 'Roboto, system-ui, sans-serif' } }

const styles = {
  global: (props) => ({
    body: {
      color: mode('brand.darkblue', 'whiteAlpha.900')(props),
      bg: mode('gray.100', 'gray.800')(props),
    },
  }),
}

const theme = extendTheme({
  colors: {
    black: '#16161D',
    brand: {
      darkblue: '#003C50',
      blue: '#00A6E2',
      yellow: '#FFEDD0',
      gray: 'rgba(0,60,80,0.5)',
      modalbg: '#FDFDFDCC',
    },
  },
  fonts,
  styles,
  components: {
    Button: {
      // 1. We can update the base styles
      baseStyle: {
        fontWeight: 'semibold',
        borderRadius: 100,
      },
      // 2. We can override the variants
      variants: {
        primary: {
          bg: 'brand.blue',
          color: 'white',
          _hover: {
            bg: 'brand.darkblue',
            color: 'white',
          },
        },
        secondary: {
          bg: 'white',
          color: 'brand.darkblue',
          _hover: {
            bg: '#DDE3E9',
            color: 'white',
          },
        },
        primaryGhost: {
          bg: 'transparent',
          color: 'brand.blue',
          _hover: {
            bg: 'brand.blue',
            color: 'white',
          },
        },
        secondaryGhost: {
          bg: 'transparent',
          color: 'white',
          _hover: {
            bg: 'white',
            color: 'brand.darkblue',
          },
        },
      },
    },
  },
})

export default theme
