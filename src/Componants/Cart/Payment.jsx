import { Box, Divider, Flex, Image, Input, Stack, Text, useToast, Wrap, WrapItem } from '@chakra-ui/react'
import React, { useState } from 'react'
import { BsMinecart } from "react-icons/bs"
import { Link } from 'react-router-dom'


let data = JSON.parse(localStorage.getItem("address")) || {}

let detailsorigin = {
    card: "12345",
    month: "01-01-2023",
    cvv: "456"
}

let cardDetails = {
    card: "",
    month: "",
    cvv: ""
}


const Payment = () => {
    const toast = useToast()
    const status = ['error']
    const [text, setText] = useState(cardDetails)
    const [istrue, setistrue] = useState(false)

    const { card, month, cvv } = text

    const handleChange = (e) => {
        const { name, value } = e.target;
        setText({ ...text, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (card === detailsorigin.card && cvv === detailsorigin.cvv) {
            setistrue(true)

            if (!istrue) {
                toast({
                    title: 'Account created.',
                    description: "We've created your account for you.",
                    status: 'success',
                    duration: 9000,
                    isClosable: true,
                  })
            }
        }
        else {
            toast({
                title: `Doesnot match any card details`,
                status: status,
                isClosable: true,
            })
        }

    }

    return (
        <div>
            <Flex height="40px" width={"1450px"} margin="auto" mt="10px" justifyContent={"space-between"}><Image src="./images/nord27.png" /><BsMinecart fontSize={"30px"} /></Flex>
            <Divider width={"1100px"} margin="auto" mb="10px" mt="50px" borderBottom={"1px solid lightgray"} />
            <Flex width={"1100px"} margin={"auto"}>
                <Stack pl="10px" pr="30px" width={"1100px"} rowGap="10px">
                    <Image src="./images/nord31.png" />
                    <Flex alignItems={"center"} justifyContent="space-between">
                        <Box textAlign={"start"} fontSize="13px" >
                            <Text fontWeight={"bold"}>DELIVERY ADDRESS:</Text>
                            <Text>{data.f_name + " " + data.l_name}</Text>
                            <Text>{data.address}</Text>
                            <Text>{data.city + " " + data.p_code}</Text>
                            <Text>{data.country}</Text>
                        </Box>
                        <Image w="250px" src="./images/nord32.png" />
                    </Flex>
                    <Divider margin="auto" mb="10px" mt="50px" borderBottom={"1px solid lightgray"} />
                    <Image src="./images/nord33.png" />
                    <Box w="350px">
                        <form action="" onSubmit={handleSubmit}>
                            <Input type="number" w="400px" mb="20px" name="card" value={card} placeholder='Card Number' onChange={handleChange} required />
                            <Flex w="400px" gap="20px">
                                <Input type="date" placeholder='MM/YY' name="month" value={month} onChange={handleChange} required />
                                <Input type="number" placeholder='Security Code' name="cvv" value={cvv} onChange={handleChange} required />
                            </Flex>
                            <Flex w="400px" justifyContent={"center"} alignItems="center"><Wrap><WrapItem><Input disabled={istrue} cursor="pointer" mt="20px" mb="15px" type="submit" value="Continue" color={"white"} bgColor={"black"} w="200px" /></WrapItem></Wrap></Flex>
                        </form>
                        <Link to="/"><Text ml="45px" color={"blue"} fontSize="15px"><u>Go to Homepage</u></Text></Link>
                    </Box>
                    <Image src="./images/nord34.png" />
                    <Image src="./images/nord35.png" />
                </Stack>
                <Box border={"1px solid black"} w="700px">dwdw</Box>
            </Flex>

        </div>
    )
}

export default Payment
