import { Box, Divider, Flex, Image, Stack,Text } from '@chakra-ui/react'
import React from 'react'
import { BsMinecart } from "react-icons/bs"

let data = JSON.parse(localStorage.getItem("address"))||{}


const Payment = () => {
    return (
        <div>
            <Flex height="40px" width={"1450px"} margin="auto" mt="10px" justifyContent={"space-between"}><Image src="./images/nord27.png" /><BsMinecart fontSize={"30px"} /></Flex>
            <Divider width={"1100px"} margin="auto" mb="10px" mt="50px" borderBottom={"1px solid lightgray"} />
            <Flex width={"1100px"} margin={"auto"}>
                <Stack pl="10px" pr="30px" width={"1100px"} rowGap="10px">
                <Image src="./images/nord31.png" />
                <Flex>
                    <Box>
                        <Text>DELIVERY ADDRESS:</Text>
                        <Text>{data.f_name+" "+data.l_name}</Text>
                        <Text></Text>
                        <Text></Text>
                        <Text></Text>
                    </Box>
                    <Image src="./images/nord32.png"/>
                </Flex>
                </Stack>
                <Box border={"1px solid "} w="700px">dwdw</Box>
            </Flex>
        </div>
    )
}

export default Payment
