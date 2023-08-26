import React from 'react'
import { Box,  Text,Image,Flex } from '@chakra-ui/react'
import pc from '../assets/versao-pc.png';
import mobile from '../assets/versao-mobile.png';

const Versoes = () => {
  return (
    <Flex as='section' direction={{ base: 'column', lg: 'row' }} bg='#F0EAFB' pb='100px'>
        <Box w={{ base: '350px', lg: '500px' }}  p='30px' bg='white' maxW='500px' margin='auto' mt='-100px' borderRadius='12px' overflow='hidden'boxShadow='0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)' textAlign='center'>
            <Flex direction='column' align='center' justify='center'>
               <Image w='300px' h='300px'  src={pc} alt="versão pc" />
               <Text fontSize='20px' color='blue.500' fontWeight='800'>Versão PC</Text>
               
            </Flex>
        </Box>
        <Box w={{ base: '340px', lg: '500px' }} p='30px' bg='white' maxW='500px' margin='auto' mt={{ base: '50px', lg: '-100px' }} borderRadius='12px' overflow='hidden'boxShadow='0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)' textAlign='center'>
            <Flex direction='column' align='center' justify='center'>
               <Image w='129px' h='300px'  src={mobile} alt="versão mobile" />
               <Text fontSize='20px' color='blue.500' fontWeight='800'>Versão Mobile</Text>
            </Flex>
        </Box>

    </Flex>

  )
}

export default Versoes