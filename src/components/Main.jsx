import { Box, VStack } from '@chakra-ui/react';
import MainCat from './MainCat';
export default function Main({products}) {

console.log(products)
    return <>
        <Box bg={'gray'}>
            <Box
                overflowX={'hidden'}
                maxW={'1700px'}
                m={'auto'}
                paddingInline={{ base: '0', md: '14' }}
            >
                <VStack gap={10}
                >
                    {
                        products.map((cat, i) => <MainCat key={i} cat={cat}/>)
                    }
                </VStack>
            </Box>
        </Box>
    </>
}