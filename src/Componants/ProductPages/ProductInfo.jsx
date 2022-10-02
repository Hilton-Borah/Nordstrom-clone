import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../Context/AuthContext'
import { Box, Button, Divider, Flex, Grid, Image, Select,Text } from '@chakra-ui/react'
import FirstNavbar from "../../Componants/HomePage/FirstNavbar"
import SecondNavbraMain from '../HomePage/SecondNavbraMain'
import Footer from '../HomePage/Footer'

const ProductInfo = () => {
  const {cart,setCart, onetime,count,setCount } = useContext(AuthContext)

  const [t,st]=useState(false)
  // const { image1, image2, below_price, original_price, under_price, discount, details2, details3 } = onetime
  console.log("second:", onetime)

  // useEffect(()=>{
    
  // },[cart])

  const handleClick=()=>{
    st(true)
    setCart([...cart,onetime])
    // window.localStorage.setItem("MY_cart",JSON.stringify(cart))
    setCount(prev=>prev+1)
  }

  console.log(count,cart,t)

  return (
    <div>
      <FirstNavbar/>
      <SecondNavbraMain/>
      <Flex w="1450px" margin={"auto"} mt="40px">
        <Box>
          <Flex w="950px"  borderRight="1px solid lightgray">
            <Image w="500px" h="600px" src={onetime.el.image1} />
            <Image w="500px" h="600px" src={onetime.el.image2} />
          </Flex>
        </Box>
        <Box p="20px" textAlign={"start"}>
          <Flex w="100px" mb="10px" alignItems="center"><Image src='./images/nord38.png'/><Text>{onetime.el.all.details4}</Text></Flex>
          <Text fontSize={"20px"}>{onetime.el.all.details3}</Text>
          <Text>{onetime.el.all.details2}</Text>
          <Text mt="10px" color="green">{onetime.el.under_price}</Text>
          <Text color="red">{onetime.el.discount}</Text>
          <Text mb="20px"><s>{onetime.el.original_price}</s></Text>
          <Text fontSize={"13px"}>{onetime.el.below_price}</Text>
          <Flex fontSize={"13px"} mt='30px'><Text fontWeight={"bold"}>Fit:</Text><Text> True to size</Text> </Flex>
          <Select mt={"5px"} placeholder='Select size'>
            <option value="">Small</option>
            <option value="">medium</option>
            <option value='option1'>xl</option>
            <option value='option2'>xxl</option>
            <option value='option3'>large</option>
          </Select>
          <Flex justifyContent={"center"}><Button disabled={t} onClick={handleClick} mt="30px" w="300px">Add to Cart</Button></Flex>
        </Box>
      </Flex>
      <Divider margin={"auto"} w="1450px" borderBottom="1px solid lightgray" mt="30px"/>
      <Grid justifyContent={"center"} margin="auto">
      <Flex justifyContent="flex-start" alignItems={"center"} margin="auto"><Image mt={"20px"} w="1000px" src="./images/nord39.png"/></Flex>

      <Image mt={"20px"} w="1450px" src="./images/nord40.png"/>
      <Image mb="30px" mt={"20px"} w="1450px" src="./images/nord41.png"/>
      </Grid>
      <Footer/>
    </div>
  )
}

export default ProductInfo
