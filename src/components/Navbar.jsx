import { CloseIcon, HamburgerIcon, ReactIcon } from '@chakra-ui/icons'
import { Box, Divider, Flex, Spacer, VStack, Link } from '@chakra-ui/react'
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
} from '@chakra-ui/react'
import { useContext, useRef, useState } from 'react';
import data from './navbar.json';
import SignInModal from './SignInModal';
import { AllContext } from '../context/AllContext';
import { useNavigate } from 'react-router-dom';


function Navbar() {
  const navigate = useNavigate();
  const btnRef = useRef(null);

  const [state, setState] = useState(true);
  const { togle, setTogle } = useContext(AllContext);
  const handleClick = (item) => {

    navigate(item.link)
    btnRef.current.click();
  }
  const handleClickSimple = (item) => {

    navigate(item.link)
  }

  return <>
    <Box
      bg={'black'}
      position={'sticky'} top={0}
      zIndex={1}

    >


      <Accordion
        maxW={'1700px'}
        m='auto'
        paddingInline={{ base: '5', md: '14' }}
        border={'none'}
        w='full' transition='1s' onChange={() => setState(!state)} allowToggle={true}>
        <AccordionItem>

          <Flex alignItems='center' textColor={'white'}>

            <AccordionButton ref = {btnRef}
              display={{ md: 'none' }}
              w='content-fit' >
              {/* <AccordionIcon /> */}
              {
                state ? <HamburgerIcon /> : <CloseIcon />
              }
            </AccordionButton>
            <Spacer />
            {
              data.map((item, i) => {
                return <>
                  <Link onClick={() => handleClickSimple(item)} display={{ base: `${i == togle ? 'block' : 'none'}`, md: 'block' }} m={3}>{item.title}</Link>
                  
                </>
              })
            }


            <Spacer />

            <SignInModal />


          </Flex>


          <AccordionPanel textColor={'white'}>
            <VStack h='90dvh' align='flex-start' >
              {
                data.map((item, i) => {
                  return <>
                    <Link onClick={() => handleClick(item)} >{item.title}</Link>
                  </>
                })
              }

              <Divider />
            </VStack>
          </AccordionPanel>
        </AccordionItem>


      </Accordion>


    </Box>
  </>
}

export { Navbar }