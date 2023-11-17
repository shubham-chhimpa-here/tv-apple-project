import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Text,
  Heading,
} from '@chakra-ui/react'



export default function Faq({data}) {
  console.log(data)
  return <>
    <Box p={10} >
      <Heading mt={5} textAlign={'center'} fontSize={{ base: '2xl', md: '4xl' }}>Questions? Answers.</Heading>
      <Accordion allowMultiple maxW='60rem' m='auto' >

        {
          data.map(faq => {
            return <>
              <AccordionItem border={'none'}>
                <h2>
                  <AccordionButton fontSize={{ base: 'md', md: 'xl' }}>
                    <Box as="span" flex='1' textAlign='left'>
                      <Text>

                        {faq.title}
                      </Text>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  {faq.ans}
                </AccordionPanel>
              </AccordionItem>
            </>
          })
        }

      </Accordion>
    </Box>
  </>
}