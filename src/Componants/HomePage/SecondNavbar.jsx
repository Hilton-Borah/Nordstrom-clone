import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Menu, MenuButton, MenuList, MenuItem, Link, Box, Divider, background } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
// import 

export default function CategoryDropdown(props) {
  let { title, one, two, three, a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p,q,r,s,t,u,v,w,x,y,z,wa,bi,sa,lu,mo,hi,nil,ni,nl,nir,ma,li,de,ben,kr,is,sh,na} = props;
  // let {}=props1

  let [isOverButton, setIsOverButton] = useState(false);
  let [isOverList, setIsOverList] = useState(false);
  let [isOpen, setIsOpen] = useState();
  let [isTouchInput, setIsTouchInput] = useState();
  let [hasClicked, setHasClicked] = useState();
  let button = useRef(null);

  useLayoutEffect(() => {
    if (isOpen && !isOverButton && !isOverList && !isTouchInput) {
      button.current.click();
      setIsOpen(false);
    } else if (!isOpen && (isOverButton || isOverList) && !isTouchInput) {
      button.current.click();
      setIsOpen(true);
    }
  }, [isOverButton, isOverList]);

  useEffect(() => {
    setIsTouchInput(false);
    setHasClicked(false);
  }, [hasClicked]);

  return (
    <>

      {/* <Flex></Flex> */}
      <Menu>
        <MenuButton bgColor={"white"} _hover={{ borderBottom: "2px solid black", color:"black", }}
          ref={button}
          onTouchStart={() => {
            setIsTouchInput(true);
          }}
          onMouseEnter={event => {
            setIsOverButton(true);
          }}
          onMouseLeave={event => {
            setIsOverButton(false);
          }}
          onClick={() => {
            setHasClicked(true);
            setIsOpen(!isOpen);
          }}
          onKeyDown={() => {
            setIsOpen(!isOpen);
          }}
        >
          <span><Link href="#">{title}</Link></span>
        </MenuButton>

        <MenuList border={"none"} width="50px" bgColor="white"
          onMouseEnter={event => {
            setIsOverList(true);
          }}
          onMouseLeave={event => {
            setIsOverList(false);
          }}
        >
          <Box display={"flex"} margin="auto"  border={"none"} textAlign="center"> 


            <MenuItem  bgColor="white" p={3}  borderTop={"0.5px solid lightgray"} borderBottom={"0.5px solid lightgray"} borderLeft={"0.5px solid lightgray"}borderTopLeftRadius="10px" borderBottomLeftRadius="10px"
              onSelect={() => {
                setIsOpen(false);
              }}
            >
              <Box lineHeight="40px" fontWeight={"bold"}>
                <Link lineHeight="-5px">{one}</Link><br />
                <Divider borderColor={"black"} />
                <Link>{a}</Link><br />
                <Link>{b}</Link><br />
                <Link>{c}</Link><br />
                <Link>{d}</Link><br />
                <Link>{m}</Link><br />
                <Link>{p}</Link><br />
                <Link>{q}</Link><br />
                <Link>{r}</Link><br />
                <Link>{y}</Link><br />
                <Link>{z}</Link><br />
              </Box>
            </MenuItem>
            <MenuItem bgColor="white" borderTop={"0.5px solid lightgray"} borderBottom={"0.5px solid lightgray"} p={3} 
              onSelect={() => {
                setIsOpen(false);
              }}>
              <Box lineHeight="40px">
                <NavLink to="/femaleclothing" fontWeight={"bold"} >{two}</NavLink><br />
                <Link>{e}</Link><br />
                <Link>{f}</Link><br />
                <Link>{g}</Link><br />
                <Link>{h}</Link><br />
                <Link>{n}</Link><br />
                <Link>{s}</Link><br />
                <Link>{t}</Link><br />
                <Link>{u}</Link><br />
                <Link>{wa}</Link><br />
                <Link>{bi}</Link><br />
              </Box>

            </MenuItem>
            <MenuItem bgColor="white" borderTop={"0.5px solid lightgray"} borderBottom={"0.5px solid lightgray"} p={3} borderRight={"0.5px solid lightgray"}borderTopRightRadius="10px" borderBottomRightRadius="10px"
              onSelect={() => {
                setIsOpen(false);
              }}
            >
              <Box lineHeight="40px">
                <NavLink to="/maleclothing" fontWeight={"bold"}>{three}</NavLink><br />
                <Link>{i}</Link><br />
                <Link>{j}</Link><br />
                <Link>{k}</Link><br />
                <Link>{l}</Link><br />
                <Link>{o}</Link><br />
                <Link>{v}</Link><br />
                <Link>{w}</Link><br />
                <Link>{x}</Link><br />
                <Link>{hi}</Link><br />
                <Link>{nil}</Link><br />
              </Box>
            </MenuItem>
          </Box>
        </MenuList>
      </Menu>

    </>
  );
}
