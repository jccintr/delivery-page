import React from 'react';
import {
    Box,
    chakra,
    Container,
    Stack,
    Text,
    useColorModeValue,
    VisuallyHidden,Image
  } from '@chakra-ui/react'
  import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
  import logo from '../assets/logo-delivroo.png';

  const SocialButton = ({children,label,href}) => {
    return (
      <chakra.button bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')} rounded={'full'} w={8} h={8} cursor={'pointer'} as={'a'} href={href} display={'inline-flex'}        alignItems={'center'}        justifyContent={'center'}        transition={'background 0.3s ease'}        _hover={{          bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),        }}>
        <VisuallyHidden>{label}</VisuallyHidden>
        {children}
      </chakra.button>
    )
  }
  

const Footer = () => {
    return (
        <Box bg='blue.500' color='white'>
          <Container as={Stack} maxW={'6xl'} py={4} direction={{ base: 'column', md: 'row' }} spacing={4} justify={{ base: 'center', md: 'space-between' }} align={{ base: 'center', md: 'center' }}>
            <Image w='50px' h='50px'  src={logo} alt="logo delivroo" />
            <Text>© 2023 Delivroo App</Text>
            <Stack direction={'row'} spacing={6}>
              <SocialButton label={'Twitter'} href={'#'}>
                <FaTwitter />
              </SocialButton>
              <SocialButton label={'YouTube'} href={'#'}>
                <FaYoutube />
              </SocialButton>
              <SocialButton label={'Instagram'} href={'#'}>
                <FaInstagram />
              </SocialButton>
            </Stack>
          </Container>
        </Box>
      )
}

export default Footer


