import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { Box, Button, Img } from "@chakra-ui/react"
import { useEffect, useState } from "react"
const data = [
    "https://is1-ssl.mzstatic.com/image/thumb/Features116/v4/37/c7/f6/37c7f693-956c-a26d-6e51-cfaef95c3f63/fe993a2a-1c04-4627-b08d-e95ebf79d697.png/3358x1889sr.jpg",
    "https://is1-ssl.mzstatic.com/image/thumb/Features116/v4/0e/17/c1/0e17c1cc-8b02-960b-2138-8f3a04a060b3/7262cc6f-01e8-4a6e-8972-d4cce4861031.png/3358x1889sr.jpg",
    "https://is1-ssl.mzstatic.com/image/thumb/WFcAzHblDIVkquiKvhUWqA/3358x1889sr.jpg",
    "https://is1-ssl.mzstatic.com/image/thumb/hZWp5fw9CEIIzdCcLc6j1w/3358x1889sr.jpg",
    "https://is1-ssl.mzstatic.com/image/thumb/ECX55XxV5kgEGibM5SQLqg/3358x1889sr.jpg",
    "https://is1-ssl.mzstatic.com/image/thumb/OswDFM_TxFvGWfLvBp1-cg/3358x1889sr.jpg",
    "https://is1-ssl.mzstatic.com/image/thumb/Features116/v4/9f/78/dd/9f78dd17-9a4d-661d-a4ee-e77e6301873a/ab498e17-402b-40f3-8066-c3cec3732a5f.png/3358x1889sr.jpg",
    "https://is1-ssl.mzstatic.com/image/thumb/Features116/v4/b2/6a/7e/b26a7e4b-b9bc-5e92-fa43-3acf6bbfc320/5bbc52c2-4d78-4a2d-b588-9a9da96b9762.png/3358x1889sr.jpg",
    "https://is1-ssl.mzstatic.com/image/thumb/Features116/v4/a4/a3/af/a4a3afb6-5fe1-c2f0-37ca-5f56f806337f/343f6035-db83-45f3-a3b7-024350957327.png/3358x1889sr.jpg",
    "https://is1-ssl.mzstatic.com/image/thumb/Features116/v4/af/13/e6/af13e6d4-5224-1a2a-1193-c0955505914e/5771f893-0de2-4103-a070-5d46339f760f.png/3358x1889sr.jpg",
]
export default function Landing() {
    const [imgNumber, setImgNumber] = useState(0);


    
    return <>
    <Box bg={'gray'}>

        <Box maxW={'1700px'}
        
        margin={'auto'}  position={'relative'}>
            {
                imgNumber > 0 &&
                <Button
                    _hover={{
                        background: "transparent",
                        color:"black",
                    }}

                    color="black"
                    bg={'transparent'}
                    position={'absolute'} top='50%' zIndex={1} onClick={() => setImgNumber(imgNumber - 1)}>
                    <ChevronLeftIcon
                        boxSize={10} />
                </Button>
            }

            {
                imgNumber < data.length - 1 &&
                <Button
                _hover={{
                    background: "transparent",
                    color:"black",
                }}

                color="black"
                bg={'transparent'}
                position={'absolute'} right={0} top={'50%'}
                onClick={() => setImgNumber(imgNumber + 1)}>
                    <ChevronRightIcon boxSize={10} />
                </Button>
            }

            <Img src={data[imgNumber]} alt="" w='full' h=
                'full' />
            
        </Box>
                        </Box>
    </>
}