import React, {useEffect,useState} from 'react'
import { Box, Divider, Flex, Grid, GridItem, Image, Text } from "@chakra-ui/react"
import { Slide } from 'react-slideshow-image';
import '../../Styles/BodySlideShow.css';
import 'react-slideshow-image/dist/styles.css'


const images = ["./images/nord2.png", "./images/nord3.png", "./images/nord4.png"]
const images1 = ["./images/nord8.png", "./images/nord9.png"]
const images2 = ["./images/nord10.png", "./images/nord11.png"]
const images3 = ["./images/nord12.png", "./images/nord13.png"]
const images4 = ["./images/nord18.png", "./images/nord19.png","./images/nord20.png", "./images/nord21.png"]

const Body1 = () => {

      const [count, setcount] = useState(0);
      const [count1,setcount1] = useState(0)

      useEffect(() => {
          const intervalId = setInterval(() => {
              setcount((count) => {
                  if (count < 1) {
                      return count + 1;
                  }
                  return 0;
              });
          }, 3000);
          return () => clearInterval(intervalId);
      }, []);


      useEffect(() => {
        const intervalId = setInterval(() => {
            setcount1((count1) => {
                if (count1 < 1) {
                    return count1 + 1;
                }
                return 0;
            });
        }, 3000);
        return () => clearInterval(intervalId);
    }, []);

  return (
    <div>
      <Box mb="90px">
        <Flex width="1450px" display="flex" margin="auto" mb="50px" mt="20px"> <Image src="../images/nord1.png" /></Flex>

        <Slide>
          <div className="each-slide-effect">
            <div style={{ 'backgroundImage': `url(${images[0]})` }}>
            </div>
          </div>
          <div className="each-slide-effect">
            <div style={{ 'backgroundImage': `url(${images[1]})` }}>
            </div>
          </div>
          <div className="each-slide-effect">
            <div style={{ 'backgroundImage': `url(${images[2]})` }}>
            </div>
          </div>
        </Slide>
      </Box>

      <Divider width="1450px" margin="auto" borderBottom={"2px solid black"} mb="50px" />

      <Box mb="50px">
        <Text fontSize="19px" fontWeight="bold" letterSpacing="5px">THE THREAD</Text>
        <Text fontSize="15px">Introducing your new go-to destination for all things fashion, beauty and lifestyle at Nordstrom, from how-tos and style inspiration to exclusive interviews and more.</Text>
        <Text fontSize="16px" mt="8px"><u>Get Inspired</u></Text>
      </Box>


      <Grid width="1450px" margin="auto" textAlign="start" templateColumns='repeat(3, 1fr)' gap={6}>
        <GridItem w='100%' h='10'  >
          <Image src='./images/nord5.png' />
          <Text fontSize="18px" pt="15px" fontWeight="bold">Closer to... Paige Adams-Geller</Text>
          <Text fontSize="15px" pt="5px" cursor="pointer" ><u>Read More</u></Text>
        </GridItem>
        <GridItem w='100%' h='10'  >
          <Image src='./images/nord6.png' />
          <Text fontSize="18px" pt="15px" fontWeight="bold">Our Hispanic & Latinx Employees on Food, Family & Culture</Text>
          <Text fontSize="15px" pt="5px" cursor="pointer" ><u>Read More</u></Text>
        </GridItem>
        <GridItem w='100%' h='10'  >
          <Image src='./images/nord7.png' />
          <Text fontSize="18px" pt="15px" fontWeight="bold">Lynn Yaeger's Fine Jewelry Edit</Text>
          <Text fontSize="15px" pt="5px" cursor="pointer" ><u>Read More</u></Text>
        </GridItem>
      </Grid>

      <Divider width="1450px" margin="auto" borderBottom={"2px solid black"} mb="50px" mt="650px" />

      <Box>
        <Text mb="50px" fontSize="19px" fontWeight="bold" letterSpacing="5px">GET INSPIRED</Text>
        <Slide>
          <div className="each-slide-effect">
            <div style={{ 'backgroundImage': `url(${images1[0]})` }}>
            </div>
          </div>
          <div className="each-slide-effect">
            <div style={{ 'backgroundImage': `url(${images1[1]})` }}>
            </div>
          </div>
        </Slide>
      </Box>

      <Box width="1450px"  margin="auto" mt="50px">
      <Image width="100%" src={images2[count]} alt="" />
      </Box>


      <Box width="1450px"  margin="auto" mt="50px">
      <Image src={images3[count]} alt="" />
      </Box>

      <Divider width="1450px" margin="auto" borderBottom={"2px solid black"} mb="80px" mt={"80px"}/>

      <Flex width="1450px" display="flex" margin="auto" mb="50px" mt="20px"> <Image src="../images/nord16.png" /></Flex>

      <Divider width="1450px" margin="auto" borderBottom={"2px solid black"} mb="60px" mt={"80px"}/>

      <Text mb="20px" fontSize="19px" fontWeight="bold" letterSpacing="5px">SHOP BY CATEGORY</Text><br />
      <Box width="1450px" display="flex" margin="auto" mb="60px" mt="20px"><Image src="../images/nord17.png" /></Box>

      <Divider width="1450px" margin="auto" borderBottom={"2px solid black"} mb="60px" mt={"80px"}/>

      <Box width="1450px"  margin="auto" mb="100px">
      <Text fontSize="19px" fontWeight="bold" letterSpacing="5px">CURRENTLY LOVING</Text>
        <Text mb="50px" fontSize="15px">Explore favorite looks from Instagram. Tag @Nordstrom to show us your finds.</Text>
      <Image src={images4[count1]} alt="" />
      </Box>
    </div>
  )
}

export default Body1
