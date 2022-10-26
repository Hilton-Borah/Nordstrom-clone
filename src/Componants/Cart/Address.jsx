import { Box, Button,Text, Divider, Flex, Image, Input, Select, Stack } from '@chakra-ui/react'
import React, { useContext, useState } from 'react'
import { BsMinecart } from "react-icons/bs"
import { useNavigate } from 'react-router-dom'
import { Link } from "react-router-dom"
import { AuthContext } from '../../Context/AuthContext'
import Cart from './Cart'
import {AiOutlineShoppingCart} from "react-icons/ai"


const datauser = {
    email: "",
    f_name: "",
    l_name: "",
    address: "",
    s_address: "",
    p_code: "",
    city: "",
    phone: "",
    country: "",
}

const Address = () => {
    const { count, total,cart } = useContext(AuthContext)
    const navigate = useNavigate()
    const [text, setText] = useState(datauser); 

    const {
        email,
        f_name,
        l_name,
        address,
        s_address,
        p_code,
        city,
        phone,
        country,
    } = text

    const handleChange = (e) => {
        let { name, value } = e.target;
        setText({ ...text, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        localStorage.setItem("address", JSON.stringify(text))
        navigate("/payment")
        console.log(text)
    }

    console.log(cart)

    let sum= total + 3080.00 +2344.00


    return (
        <div width={"1450px"} margin="auto">
            {/* <Image src="./images/nord27.png" /> */}
            <Flex height="40px" width={"1450px"} margin="auto" mt="10px" justifyContent={"space-between"}><Link to="/"><Image src="./images/nord27.png" /></Link>            <Link to="/cart"><Box>
                <Box fontSize={"15px"} mb="-20px">{count}</Box>
                <Box mt="-28px"><BsMinecart fontSize={"35px"} /></Box>
            </Box></Link></Flex>
            <Divider width={"1100px"} margin="auto" mb="10px" mt="50px" borderBottom={"1px solid lightgray"} />
            <Flex width={"1100px"} margin={"auto"}>
                <Stack pl="10px" pr="30px" width={"1100px"}>
                    <Image src="./images/nord28.png" />
                    <form action="" onSubmit={handleSubmit}>
                        <Input mb="15px" required type="email" name="email" value={email} onChange={handleChange} placeholder='Email' size='md' />
                        <Flex justifyContent={"space-between"}>
                            <Input mb="15px" required name="f_name" value={f_name} onChange={handleChange} w="300px" placeholder='First Name' size='md' />
                            <Input mb="15px" required name="l_name" value={l_name} onChange={handleChange} w="300px" placeholder='Last Name' size='md' />
                        </Flex>
                        <Input mb="15px" required name="address" value={address} onChange={handleChange} placeholder='Address' size='md' />
                        <Flex justifyContent={"space-between"}>
                            <Input mb="15px" name="s_address" value={s_address} onChange={handleChange} w="300px" placeholder='Address 2 (Optional)' size='md' />
                            <Input mb="15px" required name="p_code" value={p_code} onChange={handleChange} w="300px" placeholder='Postal Code' size='md' />
                        </Flex>
                        <Flex justifyContent={"space-between"}>
                            <Input mb="15px" required name="city" value={city} onChange={handleChange} w="300px" placeholder='City' size='md' />
                            <Input mb="15px" required w="300px" placeholder='Region (Optional' size='md' />
                        </Flex>
                        <Flex justifyContent={"space-between"}>
                            <Input mb="15px" required type="tel" name="phone" value={phone} onChange={handleChange} w="300px" placeholder='Phone' size='md' />
                            <Select required name="country" value={country} onChange={handleChange} w="300px" placeholder='Select Country'>
                                <option value='USA'>India</option>
                                <option value='USA'>USA</option>
                                <option value='Canada'>Canada</option>
                                <option value='Maxico'>Maxico</option>
                                <option value='Australia'>Australia</option>
                                <option value='Pakistan'>Pakistan</option>
                                <option value='Rusia'>Rusia</option>
                            </Select>
                        </Flex>
                        <Image src="./images/nord29.png" />
                        <Flex justifyContent={"center"} alignItems="center"><Input mb="15px" type="submit" value="Continue" color={"white"}  cursor="pointer" bgColor={"black"} w="300px" /></Flex>
                        <Image src="./images/nord30.png" />
                    </form>
                </Stack>
                {/* <Link to="/payment"></Link> */}
                <Box w="700px" p="20px" mt="-10px" bgColor={"#f4f4f4"}>
                    <Stack>
                        <Stack p={"20px"}>
                            <Flex alignItems={"center"} gap="10px" mb="20px" fontWeight={"Bold"} fontSize="30px"><AiOutlineShoppingCart/><Text>Your Order</Text></Flex>
                            <Button bgColor={"black"} color="white">Continue</Button>
                            <Flex justifyContent="space-between" pt="20px"><Text>Items</Text><Text textAlign={"start"} >Rs. {total}</Text></Flex>
                            <Flex justifyContent="space-between"><Text>Shipping</Text><Text textAlign={"start"} >Rs. 3080.00</Text></Flex>
                            <Flex justifyContent="space-between"><Text>Duties & Taxes</Text><Text textAlign={"start"}>Rs. 2,344.00</Text></Flex>
                            <Flex justifyContent="space-between" mb="30px" fontWeight={"Bold"} fontSize="20px"><Text>Total</Text><Text textAlign={"start"} >Rs .{sum}</Text></Flex>
                            <Divider pb="30px" borderBottom={"1px solid gray"}/>
                        </Stack>
                    </Stack>
                    {
                        cart.map((el) =>{
                            return <Flex justifyContent={"space-between"} pr="30px" mt="20px">
                                <Image w="100px" src={el.el.image1}/>
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

export default Address
