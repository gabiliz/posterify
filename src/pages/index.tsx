import { Box } from '@mui/material'
import type { NextPage } from 'next'
import React from 'react'
import { Credits } from '../components/Credits'
import { CustomText } from '../components/Text'
import { CustomTitle } from '../components/Title'
import { useSession } from "next-auth/react"
import Form from '../components/Form'
import { Login } from '../components/Login'


const Home: NextPage = () => {
  const {data: session} = useSession();

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}>
      <CustomTitle component="h1">
        Posterify
      </CustomTitle>
      <CustomText component="p">
        Generate a custom poster with your most listened artists and tracks from Spotify.
      </CustomText>
      {session ? (
        <Form />
      ) : (
        <Login />
      )}
      <Credits />
    </Box>
  )
}

export default Home
