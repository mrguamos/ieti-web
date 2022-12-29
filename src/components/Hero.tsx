import { Container, useTheme } from '@nextui-org/react'
import Image from 'next/image'
import React from 'react'

const Hero = () => {
  const theme = useTheme()

  return (
    <Container
      fluid
      responsive={false}
      display="flex"
      justify="center"
      alignItems="center"
      css={{
        position: 'relative',
        aspectRatio: 'auto',
        p: 0,
      }}
    >
      <Image
        width={1380}
        height={280}
        src={'/ieti-hero.jpeg'}
        alt={'hero'}
        style={{
          borderRadius: theme.theme?.radii.base.value,
        }}
      />
    </Container>
  )
}

export default Hero
