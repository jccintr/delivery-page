import React from 'react'
import { Box, Heading, Text,Image,Flex } from '@chakra-ui/react'

import logo from '../assets/logo-delivroo.png';

const Header = () => {
  return (
    <Box as='header' color='gray.50' bg='blue.500' pt='10px' pb='150px' px='10px' textAlign={{ base: 'center', lg: 'center' }}>
        <Flex direction={{ base: 'column', lg: 'row' }} align='center' justify='space-evenly'>
            <Image w='120px' h='120px'  src={logo} alt="logo delivroo" />
            <Box pt='10px' pb='10px'>
                <Heading fontWeight='extrabold' fontSize={['2xl','2xl','3xl']} color='#F7FAFC'>O seu novo App de Delivery !</Heading>
                <Text fontWeight='medium' fontSize={['lg','lg','xl']} pt='4'>Tenha a sua própria loja personalizada.</Text> 
            </Box>
        </Flex>
        
    </Box>
  )
}

export default Header