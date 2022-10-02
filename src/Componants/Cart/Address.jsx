import { Box, Button, Divider, Flex, Image, Input, Select, Stack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { BsMinecart } from "react-icons/bs"
import { useNavigate } from 'react-router-dom'


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

    const handleSubmit = () => {
        localStorage.setItem("address", JSON.stringify(text))
        navigate("/address")
    }

    return (
        <div width={"1450px"} margin="auto">
            <Flex height="40px" width={"1450px"} margin="auto" mt="10px" justifyContent={"space-between"}><Image src="./images/nord27.png" /><BsMinecart fontSize={"30px"} /></Flex>
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
                        <Flex justifyContent={"center"} alignItems="center"><Input mb="15px" type="submit" value="Continue" color={"white"} bgColor={"black"} w="300px" /></Flex>
                        <Image src="./images/nord30.png" />
                    </form>
                </Stack>

                <Box border={"1px solid "} w="700px">dwdw</Box>
            </Flex>
        </div>
    )
}

export default Address
