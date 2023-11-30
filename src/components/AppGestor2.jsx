import React from 'react'
import { Box,Heading,Text,Flex,Image,Stack,HStack } from '@chakra-ui/react'

import img1 from '../assets/app-gestor-01.png';
import img2 from '../assets/app-gestor-02.png';
import img3 from '../assets/app-gestor-03.png';




const AppGestor2 = () => {
    return (
        <Box py={6}  bg='white' px='20px'  textAlign={{ base: 'center', lg: 'center' }}>
          
          <Heading as="h1" fontSize={['2xl','2xl','3xl']} >Aplicativo Gestor</Heading>
          <Text fontWeight='medium' fontSize={['lg','lg','xl']} pt='4' color={'gray.500'}>Gerencie o seu delivery com o nosso aplicativo gestor para Android.</Text> 
          <Flex w='100%' mt={5} direction={{ base: 'column', lg: 'row' }} align='center' justify={{ base: 'center', lg: 'center' }}>
              <Image w='200px' src={img1} alt="Aplicativo Gestor" m={5} />
              <Image w='200px' src={img2} alt="Aplicativo Gestor" m={5}/>
              <Image w='200px' src={img3} alt="Aplicativo Gestor" m={5}/>
          </Flex>
        </Box>
      )
}

export default AppGestor2