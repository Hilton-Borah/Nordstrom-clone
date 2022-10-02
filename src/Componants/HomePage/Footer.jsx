import { Box, Flex, Grid, GridItem, Link, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { ImMobile2 } from "react-icons/im"
import {AiOutlineInstagram} from "react-icons/ai"
import {TiSocialPinterest} from "react-icons/ti"
import {FaTwitter} from "react-icons/fa"
import {ImFacebook} from "react-icons/im"
import {AiOutlinePlus} from "react-icons/ai"


const Footer = () => {
    return (
        <Box bgColor="#f9f9f9" h={"100%"} pt="30px">
        <Flex width={"1450px"} margin="auto" color={"#696969"} mb="30px">
            <Box width={"1250px"} fontWeight={100}>
                <Grid templateColumns='repeat(6, 1fr)' gap={6} lineHeight={"32px"} fontSize="15px">
                    <GridItem w='100%' justifyContent={"flex-start"} textAlign="start" lineHeight={"32px"}>
                        <Link fontWeight={"bold"} color={"black"}>Customer Service</Link><br />
                        <Link>Contact Us</Link><br />
                        <Link>Order Status</Link><br />
                        <Link>Shipping</Link><br />
                        <Link>Return Policy & Exchanges</Link><br />
                        <Link>Price Adjustments</Link><br />
                        <Link>Gift Cards</Link><br />
                        <Link>FAQ</Link><br />
                        <Link>Product Recalls</Link><br />
                        <Flex justifyContent={"flex-start"} alignItems={"center"} gap={3}><Image boxSize={"15px"} borderRadius="50%" src="https://n.nordstrommedia.com/alias/IN.gif" /><Text>India</Text></Flex>
                    </GridItem>
                    <GridItem w='100%' textAlign="start">
                        <Link fontWeight={"bold"} color={"black"}>About Us</Link><br />
                        <Link>Careers</Link><br />
                        <Link>Corporate Social Responsibility</Link><br />
                        <Link>Diversity, Inclusion & Belonging</Link><br />
                        <Link>Get Email Updates</Link><br />
                        <Link>Nordstrom Blog</Link><br />
                        <Link>The Thread</Link><br />
                        <Link>Nordy Podcast</Link><br />
                    </GridItem>
                    <GridItem w='100%' textAlign="start">
                        <Link fontWeight={"bold"} color={"black"}>Stores & Services</Link><br />
                        <Link>Find a Store</Link><br />
                        <Link>Free Style Help</Link><br />
                        <Link>Alterations & Tailoring</Link><br />
                        <Link>Pop-In Shop</Link><br />
                        <Link>Virtual Events</Link><br />
                        <Link>Spa Nordstrom</Link><br />
                        <Link>Nordstrom Restaurants</Link><br />
                        <Link>Nordstrom Local</Link><br />
                    </GridItem>
                    <GridItem w='100%' textAlign="start">
                        <Link fontWeight={"bold"} color={"black"}>Nordstrom Card & Rewards</Link><br />
                        <Link>The Nordy Club Rewards</Link><br />
                        <Link>Pay My Bill</Link><br />
                        <Link>Manage My Nordstrom Card</Link><br />
                    </GridItem>
                    <GridItem w='100%' textAlign="start">
                        <Link fontWeight={"bold"} color={"black"}>Nordstrom, Inc.</Link><br />
                        <Link>Nordstrom Rack</Link><br />
                        <Link>Nordstrom Canada</Link><br />
                        <Link>Investor Relations</Link><br />
                        <Link>Press Releases</Link><br />
                        <Link>Nordstrom Media Network</Link><br />
                    </GridItem>
                    <GridItem w='100%' textAlign="start">
                        <Flex gap={5} justifyContent={"flex-start"} alignItems={"center"}>
                            <ImMobile2 />
                            <Link>Get our apps</Link>
                        </Flex><br />
                        <Flex gap={5}>
                            <Box fontSize={"18px"} border={"1px solid #696969"} p={"3px"} borderRadius="50%" _hover={{  color:"rgb(0, 55, 255)",border:"1px solid rgb(0, 55, 255)" }}><AiOutlineInstagram/></Box>
                            <Box fontSize={"18px"} border={"1px solid #696969"} p={"3px"} borderRadius="50%" _hover={{  color:"red",border:"1px solid red" }}><TiSocialPinterest/></Box>
                            <Box fontSize={"18px"} border={"1px solid #696969"} p={"3px"} borderRadius="50%" _hover={{  color:"aqua",border:"1px solid aqua" }}><FaTwitter/></Box>
                            <Box fontSize={"18px"} border={"1px solid #696969"} p={"3px"} borderRadius="50%" _hover={{  color:"blue",border:"1px solid blue" }}><ImFacebook/></Box>
                            <Box fontSize={"18px"} color="#696969"><AiOutlinePlus/></Box>
                        </Flex><br />
                    </GridItem>
                </Grid>
            </Box>
        </Flex>
        <Flex width={"1450px"} margin="auto" color={"#696969"} gap={10} justifyContent={"flex-start"} alignItems={"center"} fontSize="13px" h={"50px"}>
            <Box>Privacy</Box>
            <Box>Do Not Sell My Personal Information</Box>
            <Box>Terms & Conditions</Box>
            <Box>Interest-Based Ads</Box>
            <Text>©2022 Nordstrom, Inc.</Text>
        </Flex>
        </Box>
    )
}

export default Footer
