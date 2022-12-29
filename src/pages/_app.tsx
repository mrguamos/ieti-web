import { type AppType } from 'next/dist/shared/lib/utils'
import '../styles/globals.css'
import {
  Container,
  createTheme,
  NextUIProvider,
  Spacer,
} from '@nextui-org/react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import Hero from '../components/Hero'
import Navigation from '../components/Navigation'

const lightTheme = createTheme({
  type: 'light',
})

const darkTheme = createTheme({
  type: 'dark',
})

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <NextThemesProvider
      defaultTheme="system"
      attribute="class"
      value={{
        light: lightTheme.className,
        dark: darkTheme.className,
      }}
    >
      <NextUIProvider>
        <Container
          responsive={false}
          fluid
          display="flex"
          direction="column"
          css={{
            minHeight: '100vh',
            p: 0,
          }}
        >
          <Navigation />
          <Spacer />

          <Container
            as="main"
            display="flex"
            direction="column"
            css={{
              flexGrow: 1,
            }}
          >
            <Hero />
            <Component {...pageProps} />
          </Container>
        </Container>
      </NextUIProvider>
    </NextThemesProvider>
  )
}

export default MyApp
