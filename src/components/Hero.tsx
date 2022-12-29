import { useTheme } from '@nextui-org/react'
import Image from 'next/image'
import React from 'react'
import Box from './Box'

const Hero = () => {
  const { theme } = useTheme()

  return (
    <Box
      css={{
        position: 'relative',
        aspectRatio: 'auto',
      }}
    >
      <Image
        width={1380}
        height={280}
        src={'/ieti-hero.jpeg'}
        alt={'hero'}
        style={{
          borderRadius: theme?.radii.base.value,
        }}
      />
    </Box>
  )
}

export default Hero
