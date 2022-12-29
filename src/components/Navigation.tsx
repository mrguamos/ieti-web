import React from 'react'
import { Navbar } from '@nextui-org/react'
import { useRouter } from 'next/router'

const Navigation = () => {
  const router = useRouter()
  return (
    <Navbar
      variant={'sticky'}
      maxWidth={'fluid'}
      css={{
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Navbar.Content
        hideIn="xs"
        css={{
          justifyContent: 'center',
          alignItems: 'center',
          w: '100%',
        }}
      >
        <Navbar.Link isActive={router.pathname === '/'} href="/">
          Home
        </Navbar.Link>

        <Navbar.Link isActive={router.pathname === '/about'} href="/about">
          About
        </Navbar.Link>
        <Navbar.Link href="#">Admission</Navbar.Link>
        <Navbar.Link href="#">Campuses</Navbar.Link>
        <Navbar.Link href="#">Certifications</Navbar.Link>
        <Navbar.Link href="#">Programs</Navbar.Link>
        <Navbar.Link href="#">Activities</Navbar.Link>
        <Navbar.Link href="#">Jobs</Navbar.Link>
      </Navbar.Content>
    </Navbar>
  )
}

export default Navigation
