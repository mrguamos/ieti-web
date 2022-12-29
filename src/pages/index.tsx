import { Text } from '@nextui-org/react'
import { type NextPage } from 'next'
import Box from '../components/Box'
const Home: NextPage = () => {
  return (
    <Box
      css={{
        justifyContent: 'center',
        flexGrow: 1,
        alignItems: 'center',
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
    </Box>
  )
}

export default Home
