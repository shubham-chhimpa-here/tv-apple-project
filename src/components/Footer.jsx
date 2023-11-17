import { Box, Divider, Flex, HStack, Text, VStack } from "@chakra-ui/react";

export default function Footer() {
    return <>
        <Box p={4} bg={'gray'} fontSize={{base:'xs'}} color={'white'}>

            <VStack align='flex-start' gap={1}>
                <Flex 
                gap={4}
                w='full'
                justifyContent='space-between'
                flexDirection={{base:'column-reverse', md:'row'}}
                >

                <Text>
                        Copyright @ 2023 Apple Inc. All rights reserved.
                    </Text>
                <HStack h='20px' gap={3} flexWrap={'wrap'}>
                    <Text>United States</Text>
                    <Divider orientation='vertical'/>
                    <Text>United States</Text>
                </HStack>
                </Flex>
               


                   
                    <Flex  flexWrap={'wrap'} >
                        <Flex h='20px'>Internet Service Terms

                        <Divider orientation='vertical' marginInline={3}/>
                        </Flex>
                        <Flex h='20px'>Apple TV & Privacy

                        <Divider orientation='vertical' marginInline={3}/>
                        </Flex>
                        <Flex h='20px'>Cookie Policy

                        <Divider orientation='vertical' marginInline={3}/>
                        </Flex>
                        <Flex h='20px'>Support

                        </Flex>
                       
                    </Flex>
            </VStack>
        </Box>

    </>
}