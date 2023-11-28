import React from 'react'
import { Box,VStack,Stack,Heading,  Text,Image,AspectRatio } from '@chakra-ui/react'
import cupom from '../assets/cupom-delivroo.jpg'


const Print = () => {
  return (
    <Box py={6} px={1} bg={'gray.100'}>
    <VStack spacing={2} textAlign="center">
      <Heading as="h1" fontSize={['2xl','2xl','3xl']}>Impressão de Pedidos</Heading>
      <Text fontSize={['lg','lg','xl']} color={'gray.500'}>
        Imprima os seus pedidos em qualquer impressora com tecnologia bluetooth
      </Text>
    </VStack>
    <Stack direction={{ base: 'column', md: 'row' }}  textAlign="center" align="center" justify="center" spacing={{ base: 4, lg: 10 }} py={10}> 
      
           <iframe width="350" height="250" src="https://www.youtube.com/embed/FOuE915uAdw?si=4H3HuCyzFJ0Nto6F" allowfullscreen></iframe>
      
       
           <Image borderWidth={'1px'} rounded={'lg'} borderColor={'gray.500'} w={'200px'}   src={cupom} alt="cupom" />
       
       
    </Stack>
  </Box>
  )
}

export default Print