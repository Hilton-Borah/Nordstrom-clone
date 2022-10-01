import { Box, Button, Input, Text ,  Modal, Image,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Flex,
  Checkbox,} from '@chakra-ui/react'
import React, { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import FirstNavbar from "../HomePage/FirstNavbar"
import Footer from '../HomePage/Footer'
import SecondNavbraMain from '../HomePage/SecondNavbraMain'

// let username = JSON.parse(localStorage.getItem("details"))

const dataUser={
  username:"",
  password:""
}

const details = JSON.parse(localStorage.getItem("details")) || {}

const SignUpPassword = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const navigate = useNavigate()

  const [text, setText] = useState(dataUser)
  if (!text){
    alert("plz do something")
  }
  const [authdum, setAuthDum] = useState(false)

  const { username, password } = text

  const handlechange = (e) => {
    const {name,value} = e.target
    setText({...text , [name]:value})
  }

  const handleSubmit=()=>{
    // details.map((el)=>{
      if (details.username===username && details.password===password){
        setAuthDum(true)
        setText(dataUser)
        // alert("succesfully login")
      } 
      // else {
      //   setAuthDum(false)
      // }
      console.log(username,password)
      console.log(details.username,details.password)
      // }
    // })

  //   else {
  //   alert("not match")
  // }
  }
  
  // if (authdum){
  //   navigate("/cart")
  // }

  const onlyOne=()=>{
    setAuthDum(false)
  }

  console.log(authdum)

  return (
    <div>
      <FirstNavbar />
      <SecondNavbraMain />


      <Box w="370px" textAlign="start" margin="auto" mt="100px" mb="100px" lineHeight="35px">
        <Text fontSize="20px">Welcome back!</Text>
        <Text fontSize="13px">Sign in with the same info at:</Text>
        <Image w="150px" mt="20px" mb="20px" src="./images/nord22.png"/>
        <Text fontSize="13px" fontWeight="bold">Email</Text>
        <Flex fontSize="13px" mt="-10px" justifyContent="space-between"><Text>{details.email}</Text><NavLink borderBottom="0.5px solid" to="/signup"><u>Edit</u></NavLink></Flex>
        <Text fontSize="13px" fontWeight="bold">Username</Text>
        <Input type="text" name="username" value={username} onChange={handlechange} border="2px solid gray" placeholder="Enter Your Username" required />
        <Text fontSize="13px" fontWeight="bold">Password</Text>
        <Input type="password" name="password" value={password} onChange={handlechange} border="2px solid gray" placeholder="Enter Password" required />
        <Text fontSize="13px"><u>Forget Password</u></Text>
        <Box><Checkbox defaultChecked><Text fontSize="13px">Keep me Sign in</Text></Checkbox></Box>

      <Button _hover={{ bgcolor: "gray" }} mt="20px" s w="370px" fontSize="13px" bg="black" color="white"  onClick={()=>{ onOpen(); handleSubmit()}}>Sign In</Button>
      {authdum?<><Modal isOpen={isOpen} onClose={onClose}>
  <ModalOverlay />
  <ModalContent>
    <ModalHeader> Logged in Successfully</ModalHeader>
    <ModalCloseButton />
    <ModalBody>
    Hai, {details.username} Now you can explore more of our site
    </ModalBody>

    <ModalFooter>
      <Button onClick={onlyOne} colorScheme='blue' mr={3}>
        <Link to="/cart">Go to your Cart Page</Link>
      </Button>
      <Button onClick={onlyOne} variant='ghost'><Link to="/">Got to Home page</Link></Button>
    </ModalFooter>
  </ModalContent>
</Modal></>:<><Modal isOpen={isOpen} onClose={onClose}>
  <ModalOverlay />
  <ModalContent>
    <ModalHeader> Logged in failed</ModalHeader>
    <ModalCloseButton />
    <ModalBody>
    Hai, {details.username} you put wrong credential. Please check!!!
    </ModalBody>

    <ModalFooter>
      <Button colorScheme='blue' mr={3} onClick={onClose}>
        Fill up again
      </Button>
      <Button variant='ghost'><Link to="/">Got to Home page</Link></Button>
    </ModalFooter>
  </ModalContent>
</Modal></>}
      </Box>




      <Footer />
    </div>
  )
}

export default SignUpPassword
