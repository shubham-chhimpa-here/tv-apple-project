import {  Box, Image } from '@chakra-ui/react';

export default function Card({item}) {
    const property = {
      ...item
    }
  
    return (
      <Box maxW='sm'
      minW={{base:'130px', sm:'220px'}}
      
      borderRadius='lg' overflow='hidden'>
        <Image src={property.imageUrl} alt={'N/A'} />
  
       
      </Box>
    )
  }