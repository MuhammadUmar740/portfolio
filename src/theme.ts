
import { extendTheme, type ThemeConfig } from '@chakra-ui/react'

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

const theme = extendTheme({
     config,
     fonts:{
        body:'Fira Code',
        heading:'heebo'
     },
     components:{
        Heading:{
            fontFamily:'heebo'
        }
     }
    })

export default theme