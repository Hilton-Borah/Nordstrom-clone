import { Box, Image, Flex, Input, InputGroup, InputLeftElement, Stack, Divider } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import React from 'react'
import { BiSearchAlt2 } from "react-icons/bi"
import { BsMinecart } from "react-icons/bs"
// import { Link } from 'react-router-dom'

const Navbar = () => {

  const details = JSON.parse(localStorage.getItem("details"))||{}

  return (
    <>
      <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"} textAlign={"center"} h={10} background={"black"} color={"white"} fontSize={14}>
        <Box></Box>
        <Box fontWeight={"bold"} ml={20}>Shipping outside of the U.S. or Canada? <Link borderBottom={"1px solid white"} href="https://www.nordstrom.com/s/nordstrom-everyday-v-neck-t-shirt/5727242?origin=coordinating-5727242-0-4-HP_SALE-recbot-best_seller_new_iv&recs_placement=HP_SALE&recs_strategy=best_seller_new_iv&recs_source=recbot&recs_page_type=home&recs_seed=0&color=BLACK"> Learn About International Shipping</Link></Box>
        <Box pr={5} display={"flex"} justifyContent={"space-between"} alignItems={"center"} gap={2}><Image borderRadius='full'
          boxSize='13px'
          src='https://n.nordstrommedia.com/alias/IN.gif'
          alt='India' /> India</Box>
      </Box>

      <Flex width={1450} margin={"auto"} justifyContent={"space-between"} alignItems={"center"}>
        <Box><Image w={"200px"} placeholder="Search for product brands" src='https://1000logos.net/wp-content/uploads/2022/08/Nordstrom-logo.png' /></Box>
        <Box><Stack spacing={4}>
          <InputGroup>
            <InputLeftElement
              pointerEvents='none'
              children={<BiSearchAlt2 color='gray.300' h="30px"/>}
            />
            <Input border={"2px solid RGBA(255, 255, 255, 0.06)"} w={"700px"} placeholder="Search for product brands" type='text' />
          </InputGroup>
        </Stack></Box>
        <Flex>
          <Box><Link to="/signup">{details.username?details.username:"Sign In"}</Link></Box>
          <Box><Link to="/cart"><BsMinecart /></Link></Box>
        </Flex>
      </Flex>
      <Divider m={"auto"} mt={-3} width={1450} borderColor="rgb(128, 128, 128)" mb="20px"/>
    </>
  )
}

export default Navbar
