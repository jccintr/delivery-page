import React from 'react'
import { Box,Heading,Text,Flex,Image,Stack,HStack } from '@chakra-ui/react'
import appgestor from '../assets/app-gestor.png';

import { FaCheck } from "react-icons/fa";

const ListItem = ({children}) => {
    return (
        <HStack  as='li' spacing='20px'>
            <FaCheck size={22} color="#3182CE"/>
            <Text color='blue.500' textAlign={['left','left','left']}>{children}</Text>
        </HStack>
    )
}


const AppGestor = () => {
    return (
        <Box as='section' color='gray.50' bg='white' p='20px'  textAlign={{ base: 'center', lg: 'center' }}>
              
          <Heading fontWeight='extrabold' fontSize={['2xl','2xl','3xl']} color='blue.500'>Exclusivo Aplicativo Gestor</Heading>
          <Text fontWeight='medium' fontSize={['lg','lg','xl']} pt='4' color='blue.500'>Gerencie o seu delivery com o nosso aplicativo gestor para Android.</Text> 
          <Flex w='100%'  direction={{ base: 'column', lg: 'row' }} align='center' justify={{ base: 'center', lg: 'space-evenly' }}>
             <Box p='60px' fontSize='18px' >
                 <Image w='185px' h='400px'  src={appgestor} alt="Aplicativo Gestor" />
             </Box>
             <Box >
                 <Stack as='ul' spacing='20px'>
                        <ListItem>Controle os seus pedidos.</ListItem>
                        <ListItem>Monte o seu cardápio.</ListItem>
                        <ListItem>Receba notificações de novos pedidos.</ListItem>
                        <ListItem>Consulte seu histórico de pedidos.</ListItem>
                        <ListItem>Imprima os seus pedidos.</ListItem>
                        <ListItem>Notifique os seus clientes</ListItem>
                        
                        
                  </Stack>
             </Box>
          </Flex>
        </Box>
      )
}

export default AppGestor