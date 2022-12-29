import { Container, Text } from '@nextui-org/react'
import { type NextPage } from 'next'
const Home: NextPage = () => {
  return (
    <>
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
