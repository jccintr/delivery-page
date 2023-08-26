import React from 'react'
import { Box,Heading,Text } from '@chakra-ui/react'

const NoTax = () => {
    return (
        <Box as='section' color='gray.50' bg='blue.500' p='50px' textAlign={{ base: 'center', lg: 'center' }}>
              
          <Heading fontWeight='extrabold' fontSize={['2xl','2xl','3xl']} color='#F7FAFC'>A partir de R$ 39,90/mês.</Heading>
          <Text fontWeight='medium' fontSize={['lg','lg','xl']} pt='4'>Sem taxas ou comissões.</Text> 
          <Text fontWeight='medium' fontSize={['lg','lg','xl']} pt='4'>Sem limite de pedidos.</Text> 
        </Box>
      )
}

export default NoTax