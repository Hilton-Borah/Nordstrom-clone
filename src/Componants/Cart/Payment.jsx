import { Box, Divider, Flex, Image, Input, Stack, Text, useToast, Wrap, WrapItem, Button, } from '@chakra-ui/react'
import React, { useContext, useEffect, useState } from 'react'
import { BsMinecart } from "react-icons/bs"
import { Link } from 'react-router-dom'
import { AuthContext } from '../../Context/AuthContext'
import { AiOutlineShoppingCart } from "react-icons/ai"


let data;

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
    const { count, total, cart } = useContext(AuthContext)
    const toast = useToast()
    const status = ['error']
    const [text, setText] = useState(cardDetails)
    const [istrue, setistrue] = useState(false)

    const { card, month, cvv } = text

    useEffect(() => {
        data = JSON.parse(localStorage.getItem("address"))
    })

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
                    title: 'Payment done.',
                    description: "Order Placed Successfully",
                    status: 'success',
                    duration: 9000,
                    isClosable: true,
                })
            }
        }
        else {
            toast({
                title: `Doesnot match any card details`,
                description: "Put card details again",
                status: status,
                isClosable: true,
            })
        }

    }

    // console.log(data.address)
    let sum = total + 8080 + 11044

    return (
        <div>
            <Flex height="40px" width={"1450px"} margin="auto" mt="10px" justifyContent={"space-between"}><Link to="/"><Image src="./images/nord27.png" /></Link>
                <Link to="/cart"><Box>
                    <Box fontSize={"15px"} mb="-20px">{count}</Box>
                    <Box mt="-28px"><BsMinecart fontSize={"35px"} /></Box>
                </Box></Link>

            </Flex>
            <Divider width={"1100px"} margin="auto" mb="10px" mt="50px" borderBottom={"1px solid lightgray"} />
            <Flex width={"1100px"} margin={"auto"}>
                <Stack pl="10px" pr="30px" width={"1100px"} rowGap="10px">
                    <Image src="./images/nord31.png" />
                    <Flex alignItems={"center"} justifyContent="space-between">
                        <Box textAlign={"start"} fontSize="13px" >
                            {/* <Text fontWeight={"bold"}>DELIVERY ADDRESS:</Text>
                            <Text>{data.f_name + " " + data.l_name}</Text>
                            <Text>{data.address}</Text>
                            <Text>{data.city + " " + data.p_code}</Text>
                            <Text>{data.country}</Text> */}
                            <Text fontWeight={"bold"}>DELIVERY ADDRESS:</Text>
                            <Text>Hilton Borah</Text>
                            <Text>Jagiroad College Girls Hostel</Text>
                            <Text>Jagiroad, 782410</Text>
                            <Text>India</Text>
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
                <Box w="700px" p="20px" mt="-10px" bgColor={"#f4f4f4"}>
                    <Stack>
                        <Stack p={"20px"}>
                            <Flex alignItems={"center"} gap="10px" mb="20px" fontWeight={"Bold"} fontSize="30px"><AiOutlineShoppingCart /><Text>Your Order</Text></Flex>
                            <Button bgColor={"black"} color="white">Continue</Button>
                            <Flex justifyContent="space-between" pt="20px"><Text>Items</Text><Text>Rs. {total}</Text></Flex>
                            <Flex justifyContent="space-between"><Text>Shipping</Text><Text>Rs. 8080</Text></Flex>
                            <Flex justifyContent="space-between"><Text>Duties & Taxes</Text><Text>Rs. 11,044</Text></Flex>
                            <Flex justifyContent="space-between" mb="30px" fontWeight={"Bold"} fontSize="20px"><Text>Total</Text><Text>Rs .{sum}</Text></Flex>
                            <Divider pb="30px" borderBottom={"1px solid gray"} />
                        </Stack>
                    </Stack>
                    {
                        cart.map((el) => {
                            return <Flex justifyContent={"space-between"} pr="30px" mt="20px">
                                <Image w="100px" src={el.el.image1} />
                                <Box textAlign={"start"} w="200px">
                                    <Text>{el.el.all.details2}</Text>
                                    <Text>{el.el.all.details3}</Text>
                                    <Text>{el.el.under_price}</Text>
                                    <Text>{el.el.item}</Text>
                                </Box>

                            </Flex>
                        })


                    }
                </Box>
            </Flex>

        </div>
    )
}

export default Payment
