import { Box, Divider, Flex, Text, Image, Highlight, Button } from '@chakra-ui/react'
import React, { useContext, useEffect, useState } from 'react'
import { AiOutlineGift } from "react-icons/ai"
import { TbBus } from "react-icons/tb"
import { Link } from 'react-router-dom'
import { AuthContext } from '../../Context/AuthContext'
import FirstNavbar from "../HomePage/FirstNavbar"
import Footer from '../HomePage/Footer'
import SecondNavbraMain from '../HomePage/SecondNavbraMain'

let abd = [{
  "id": 1,
  "image1": "https://n.nordstrommedia.com/id/sr3/4770621a-812d-45cf-9cd0-944245602c33.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  "image2": "https://n.nordstrommedia.com/id/sr3/18eebb3f-3b6d-4936-9e65-3c742c7db1c8.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  "below_price": "Work up a sweat in these incredibly lightweight leggings made from moisture-wicking fabric that keeps you cool at the studio and beyond.",
  "all":
  {

    "details1": "Sustainable Style",
    "details2": "Zella",
    "details3": "High Waist Studio Lite Pocket 7/8 Leggings",
    "details4": "(543)"
  }
  ,
  "item": "Item #5962768",
  "under_price": "INR2,235.92",
  "discount": "(60% off)",
  "original_price": "INR5,589.80",
},
{
  "id": 2,
  "image1": "https://n.nordstrommedia.com/id/sr3/9c1bfdc2-3c89-45b2-97ef-2d05fe661d5d.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  "image2": "https://n.nordstrommedia.com/id/sr3/392e263d-1a07-49f7-a10b-228931accab5.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  "below_price": "Work up a sweat in these incredibly lightweight leggings made from moisture-wicking fabric that keeps you cool at the studio and beyond.",
  "all":
  {
    "details1": "Sustainable Style",
    "details2": "Zella",
    "details3": "Restore Soft Pocket Leggings",
    "details4": "(712)"
  },
  "item": "Item #6003591",
  "under_price": "INR2,235.92",
  "discount": "(60% off)",
  "original_price": "INR5,589.80"
},
{
  "id": 3,
  "image1": "",
  "image2": "",
  "below_price": "",
  "all":
  {
    "details1": "",
    "details2": "",
    "details3": "",
    "details4": "",
  },
  "item": "",
  "under_price":"",
  "discount": "",
  "original_price": "",
},
]

let ruppeMaking = (value) => {

  let main = value.replace("INR", "")
  main = Number(main.replace(",", ""))

  return main
}

let sum = 0;


const Cart = () => {
  const {cart,setCart,total,setTotal} = useContext(AuthContext)
  const [text, setText] = useState(1)
  const [count, setCount] = useState(1)
  const handleChange = (e) => {
    setText(e.target.value)
  }

useEffect(()=>{
  setTotal(sum)
},[])
  // let total = abd.reduce((ac, el) => {
  //   let price = el.under_price;
  //   // let a = ruppeMaking(price)

  //   return ((ac + a * text), 0)
  // })

  // console.log(text)
  // console.log(total)

  console.log(cart)





  return (
    <div>

      <FirstNavbar/>
      <SecondNavbraMain/>
      <Box color="#696969" borderRight={"1px solid lightgray"} w="1150px" margin="auto" mt="60px" textAlign={"start"}>
        <Flex width="290px" fontSize="14px" border={"1px solid lightgray"} mb={6}>
          <Box bgColor={"lightgray"} color={"black"} p={"10px"} pl="15px" pr="15px" fontWeight="bold" borderColor="#696969">Shopping Bag({cart.length})</Box>
          <Box p={"10px"} pl="15px" pr="15px" borderLeft={"1px solid lightgray"}>Saved for Later(0)</Box>
        </Flex>

        <Text mb={1} fontSize="23px">Shopping Bag</Text>
        <Text mb={2} fontSize="14px">Items in your bag are not on hold.</Text>
        <Flex gap={2} fontSize="14px" alignItems={"center"}><AiOutlineGift />Choose gift options when you check out.</Flex>
        <Divider mt={1} borderBottom={"1px solid lightgray"} width="1100px" />
        <Flex mt={10} gap={2} alignItems={"center"} fontSize="18px"> <TbBus /><Highlight query='India' styles={{ color: "blue" }}>
          Delivery the products to India
        </Highlight></Flex>
        <Text mt={1} ml={7} fontSize="14px">International shipping</Text>
        <Divider mt={3} borderBottom={"1px solid lightgray"} width="1100px" />

        {
          cart.map((el) => {
            let price = el.el.under_price
            // {ruppeMaking(price) * text}
            sum = sum + ruppeMaking(price)
            console.log(sum)
            return <Box pt={5} pr={5} key={el.id} width="1100px">
              <Flex justifyContent={"space-between"}>
                <Image w={"100px"} src={el.el.image1} />
                <Box>
                  <Text>{el.el.all.details1}</Text>
                  <Text>{el.el.all.details3}</Text>
                  <Text>{el.el.all.details2}</Text>
                  <Text>{el.el.item}</Text>
                </Box>
                <Image width="200px" h="100px" src="./images/nord23.png" />
                <Text>Rs. {ruppeMaking(price)}</Text>
              </Flex>
              <Flex ml={10} mt={5}>
                <Text>Qty</Text>
                <select onChange={handleChange} outline="none" borderColor="0" h="10px" w="10px">
                  <option value='1'>1</option>
                  <option value='2'>2</option>
                  <option value='3'>3</option>
                  <option value='4'>4</option>
                  <option value='5'>5</option>
                  <option value='6'>6</option>
                  <option value='7'>7</option>
                  <option value='8'>8</option>
                  <option value='9'>9</option>
                  <option value='10'>10</option>
                  <option value='11'>11</option>
                </select>
              </Flex>

              <Flex fontSize="14px" gap="20px" ml={10} mt={5}><Text color="blue">Remove</Text><Text color="blue">Save for later</Text></Flex>
              <Divider borderBottom={"1px solid lightgray"} width="1100px" mb="20px"/>
            </Box>
          })
        }
        <Flex justifyContent={"space-between"} width="1080px">
          <Image width="300px" src="./images/nord24.png" />
          <Box w="400px">
            <Flex justifyContent={"space-between"}>
              <Text>Subtotal</Text>
              <Text>Rs. {sum}</Text>
            </Flex>
            <Divider mt={5} mb={5} borderBottom={"1px solid lightgray"}/>
            <Link to="/address"><Button disabled={cart.length===0} w="400px" bgColor={"black"} color="white" fontSize={"15px"}>Checkout</Button></Link>
          </Box>
        </Flex>
      </Box>
      <Flex><Image margin="auto" mt="100px" width="1000px" src="./images/nord25.png"/></Flex>
      <Flex><Image margin="auto" mt="100px" mb="50px" width="1000px" src="./images/nord26.png"/></Flex>
        <Footer/>
    </div>
  )
}

export default Cart
