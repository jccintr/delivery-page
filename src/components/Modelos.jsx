import React from 'react'
import {
    Box,
    Stack,
   
    Heading,
    Text,
    VStack,
    useColorModeValue,
    Button,Image,Link
  } from '@chakra-ui/react'
  import modelo1 from '../assets/modelo1.png';
  import modelo2 from '../assets/modelo2.png';
  import modelo3 from '../assets/modelo3.png';


  const ModeloWrapper = ({children}) => {
    return (
      <Box mb={4} alignSelf={{ base: 'center', lg: 'center' }} borderColor={useColorModeValue('gray.200', 'gray.500')}>
        {children}
      </Box>
    )
  }



const Modelos = () => {
  return (
    <Box id="modelos" bg='#F0EAFB' py={6}>
        <VStack spacing={2} textAlign="center">
            <Heading as="h1" fontSize={['2xl','2xl','3xl']}>Lojas Modelo</Heading>
            <Text fontSize={['lg','lg','xl']} color={'gray.500'}>
              Visite uma das lojas modelo e veja como o Delivroo funciona na prática.
            </Text>
        </VStack>
        <Stack direction={{ base: 'column', md: 'row' }}  textAlign="center" justify="center" spacing={{ base: 4, lg: 10 }} py={10}>
           <ModeloWrapper>
              <Image w='272px' h='500px'  src={modelo1} alt="versão pc" rounded='md' border={'1px'}/>
              <Link href='https://delivroo.netlify.app/nocapricholanches'  textDecoration={'none'} isExternal _hover={{textDecoration: 'none',bg:'blue.600'}}>
                    <Button w="full" mt='20px' colorScheme='blue' >Visitar esta loja</Button>
              </Link>
           </ModeloWrapper>
           <ModeloWrapper>
               <Image w='272px' h='500px'  src={modelo2} alt="versão pc" rounded='md' border={'1px'}/>
               <Link href='https://delivroo.netlify.app/lucigas' textDecoration={'none'} isExternal _hover={{textDecoration: 'none',bg:'blue.600'}}>
                    <Button w="full" mt='20px' colorScheme='blue' >Visitar esta loja</Button>
              </Link>
           </ModeloWrapper>
           <ModeloWrapper>
              <Image w='272px' h='500px'  src={modelo3} alt="versão pc" rounded='md' border={'1px'}/>
              <Link href='https://delivroo.netlify.app/casadopastel' textDecoration={'none'} isExternal _hover={{textDecoration: 'none',bg:'blue.600'}}>
                    <Button w="full" mt='20px' colorScheme='blue' >Visitar esta loja</Button>
              </Link>
           </ModeloWrapper>
        </Stack>
    </Box>
  )
}

export default Modelos