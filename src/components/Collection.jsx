import { Box, GridItem, Heading, SimpleGrid } from "@chakra-ui/react";
import Card from "./Card";

export default function Collection( {item}) {
    const {data, title} = item;
    return <>
    <Box padding={5} maxW='1600px' m={'auto'}>
        <Heading fontSize={{base:'2xl', md:'4xl'}} mb={{base:'5', md:'8'}}>{title}</Heading>
    <SimpleGrid columns={{base:'2', md:'3', lg:'4', xl:'5'}} gap={{base:'3', md:'8'}}>
        {
            data.map((item, i) => {
               return <GridItem key={i}> <Card item = {item}/> </GridItem>
                
            })
        }
       
    </SimpleGrid>
    </Box>
    </>
}