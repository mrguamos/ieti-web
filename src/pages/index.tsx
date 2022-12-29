import { Container, Text } from '@nextui-org/react'
import { type NextPage } from 'next'
import Head from 'next/head'
const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>IETI</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Container
        display="flex"
        direction="column"
        fluid
        responsive={false}
        justify="center"
        alignItems="center"
        css={{
          flexGrow: 1,
          p: 0,
        }}
      >
        <Text
          h1
          size={60}
          css={{
            textGradient: '45deg, $blue600 -20%, $pink600 50%',
          }}
          weight="bold"
        >
          IETI
        </Text>
      </Container>
    </>
  )
}

export default Home