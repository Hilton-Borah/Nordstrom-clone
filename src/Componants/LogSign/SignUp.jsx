import { Box, Button, Input, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import {  Link, useNavigate } from 'react-router-dom'
import FirstNavbar from "../HomePage/FirstNavbar"
import Footer from '../HomePage/Footer'
import SecondNavbraMain from '../HomePage/SecondNavbraMain'
import { useToast } from '@chakra-ui/react'

const dataUser = {
  email: "",
  username: "",
  password: ""
}

// let user = JSON.parse(localStorage.getItem("details")) ||{}

const SignUpEmail = () => {
  const navigate = useNavigate()
  const toast = useToast()

  const [text, setText] = useState(dataUser)
  const [authdum, setAuthDum] = useState(false)

  const { email, username, password } = text

  const handlechange = (e) => {
    const { name, value } = e.target
    setText({ ...text, [name]: value })
 
  }

  const handleSubmit = () => {
    localStorage.clear()
    localStorage.setItem("details", JSON.stringify(text));
    toast({
      title: 'Account created.',
      description: "We've created a account for you.",
      status: 'success',
      duration: 9000,
      isClosable: true,
    })
    setAuthDum(true)
    setText(dataUser)
  }
  if (authdum) {
    navigate("/login")
  }
  return (
    <div>
      <FirstNavbar />
      <SecondNavbraMain />


      <Box w="370px" textAlign="start" margin="auto" mt="100px" mb="100px" lineHeight="35px">
        <Text fontSize="20px">Sign In | Create Account</Text>
        <Text fontSize="13px">Enter your email to get started.</Text>
        <Text fontSize="13px" fontWeight="bold">Email</Text>
        <Input type="email" name="email" value={email} placeholder="Enter Your Email" border="2px solid gray" onChange={handlechange} required />
        <Text fontSize="13px" fontWeight="bold">Username</Text>
        <Input type="text" name="username" value={username} border="2px solid gray" placeholder="Enter Your Username" onChange={handlechange} required />
        <Text fontSize="13px" fontWeight="bold">Password</Text>
        <Input type="password" name="password" value={password} border="2px solid gray" placeholder="Enter Your Password" onChange={handlechange} required />
        <Text lineHeight="20px" mt="20px" fontSize="13px">By tapping Next, you agree to our <u>Privacy Policy</u> and <u>Terms & Conditions.</u></Text>
        <Button _hover={{ bgcolor: "gray" }} mt="20px" w="370px" fontSize="13px" bg="black" color="white" onClick={handleSubmit}>Next</Button>
      </Box>

      <Footer />
    </div>
  )
}

export default SignUpEmail
