import { Box, Flex, Text, Image, Select, Grid, GridItem, Stack } from '@chakra-ui/react'
import { BsPlus } from 'react-icons/bs'
import React, { useContext, useState } from 'react'
import Female from "../../ProductDetails/Female"
import { AuthContext } from '../../Context/AuthContext'
import { Link, useNavigate } from 'react-router-dom'
import FirstNavbar from "../../Componants/HomePage/FirstNavbar"
import SecondNavbraMain from '../HomePage/SecondNavbraMain'
import Footer from '../HomePage/Footer'
// import HoverImage from "react-hover-image";

const FemalePage = () => {
  const { onetime, setOnetime } = useContext(AuthContext)
  const navigate = useNavigate()

  console.log(onetime)
  return (
    <div>
            <FirstNavbar/>
      <SecondNavbraMain/>
      <Text fontSize={"20px"} w="1450px" textAlign={"start"} margin="auto" mt="50px">Choose the product which you want</Text>
      <Flex w="1450px" margin={"auto"} mt="50px" gap="10px">
        <Box fontSize={"20px"} w="200px" borderRight="1px solid lightgray" p={3}>
          <Flex mb="15px" borderBottom={"1px solid lightgray"} pb="15px" justifyContent={"space-between"}><Text>Color</Text><BsPlus /></Flex>
          <Flex mb="15px" borderBottom={"1px solid lightgray"} pb="15px" justifyContent={"space-between"}><Text>Brand</Text><BsPlus /></Flex>
          <Flex mb="15px" borderBottom={"1px solid lightgray"} pb="15px" justifyContent={"space-between"}><Text>Feature</Text><BsPlus /></Flex>
          <Flex mb="15px" borderBottom={"1px solid lightgray"} pb="15px" justifyContent={"space-between"}><Text>Length</Text><BsPlus /></Flex>
          <Flex mb="15px" borderBottom={"1px solid lightgray"} pb="15px" justifyContent={"space-between"}><Text>Material</Text><BsPlus /></Flex>
          <Flex mb="15px" borderBottom={"1px solid lightgray"} pb="15px" justifyContent={"space-between"}><Text>Neck Style</Text><BsPlus /></Flex>
          <Flex mb="15px" borderBottom={"1px solid lightgray"} pb="15px" justifyContent={"space-between"}><Text>Occasion</Text><BsPlus /></Flex>
          <Flex mb="15px" borderBottom={"1px solid lightgray"} pb="15px" justifyContent={"space-between"}><Text>Price</Text><BsPlus /></Flex>
          <Flex mb="15px" borderBottom={"1px solid lightgray"} pb="15px" justifyContent={"space-between"}><Text>Sale</Text><BsPlus /></Flex>
          <Flex mb="15px" borderBottom={"1px solid lightgray"} pb="15px" justifyContent={"space-between"}><Text>Sleeve Length</Text><BsPlus /></Flex>
          <Flex mb="15px" borderBottom={"1px solid lightgray"} pb="15px" justifyContent={"space-between"}><Text>Style</Text><BsPlus /></Flex>
        </Box>
        <Box w="1250px">
          <Image src="./images/nord36.png" />
          <Text fontWeight={"700"} fontSize="15px" mt="15px" textAlign={"start"}>Women's Clothing</Text>
          <Image borderBottom={"1px solid lightgray"} pb="5px" src="./images/nord37.png" />
          <Flex justifyContent={"space-between"} alignItems="center"><Text fontWeight={"700"} fontSize="18px">{Female.length + " "}products</Text><Select placeholder='Sort by featured' w="250px" mt="20px">
            <option value='A-Z'>Sort by title: A-Z</option>
            <option value='Z-A'>Sort by title: Z-A</option>
            {/* <option value='Sort by featured'>Sort by featured</option> */}
            <option value='High to low'>Sort by price:  High to low</option>
            <option value='Low to high'>Sort by price: Low to high</option>
          </Select></Flex>
          <Grid templateColumns='repeat(3, 1fr)' mt="20px" gap="20px">
            {
              Female.map((el) => {
                return <GridItem w='100%' pl="30px" mb="30px" key={el.id}>
                  <Flex justifyContent={"center"} alignItems="center" margin={"auto"}><Image textAlign={"center"} w="300px" src={el.image1} /></Flex>
                  <Stack textAlign={"start"}>
                    <Text color={"green"} fontWeight="700">{el.all.details1}</Text>
                    <Box><Link to="/productdetails" onClick={() => (
                      setOnetime({ ...onetime, el })
  
                    )}><Text fontWeight="bold">{el.all.details2}</Text><Text>{el.all.details3}</Text></Link></Box>
                    <Flex gap="10px" color="red"><Text fontWeight="700">{el.under_price}</Text><Text>{el.discount}</Text></Flex>
                    <Text><s>{el.original_price}</s></Text>
                    <Flex gap="5px"><Image src="./images/nord38.png" /><Text>{el.all.details4}</Text></Flex>
                  </Stack>
                </GridItem>
              })
            }
          </Grid>
        </Box>
      </Flex>
      <Footer/>
    </div>
  )
}

export default FemalePage
