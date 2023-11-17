import { Box, Divider, HStack, Heading} from "@chakra-ui/react";
import Card from "./Card";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function MainCat({ cat }) {
  return <>


    <Box w={'full'} pb={5} >
      <Divider w={'95%'} m={'auto'} />
      <Link to={cat.link}>
      <Heading p={4} >{cat.title} <ChevronRightIcon /> </Heading>
      </Link>
   
      <HStack paddingInline={4} w={'full'} overflowX={'auto'}
        css={{
          "&::-webkit-scrollbar": {
            width: "2px",
          },
          "&::-webkit-scrollbar-track": {
            background:'gray',
            width: '2px'
          },
          "&::-webkit-scrollbar-thumb": {
            background:'#ddd',
          },
        }}
      >
        {
          cat.data.map((item, i)=> <Card key={i} item = {item}/>)
        }
       
      </HStack>
    </Box>
  </>
}