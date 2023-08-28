import React from 'react'
import { Box, SimpleGrid, Text,Flex,Heading } from '@chakra-ui/react'


const Feature = ({ number,text}) => {
    return (
      <Flex as='section' direction='column' align='center' justify='center'>
         <Flex   rounded='full' w='50px' h='50px'  align='center' justify='center' mb='20px' bg='blue.500'>
             <Heading fontWeight='extrabold' fontSize={['xl','xl','2xl']} color='white'>{number}</Heading>
         </Flex>
         
        <Text >{text}</Text>
      </Flex>
    )
  }


const Funcionamento = () => {
    return (
        <Box  align='center' bg='#F0EAFB' p={5} py={6}>
            <Heading  fontWeight='extrabold' fontSize={['2xl','2xl','3xl']}  mb='50px'>Como funciona o Delivroo</Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
            <Feature
              number='1'
              text={'O cliente acessa o link da loja pelo navegador ou usa o aplicativo.'}
            />
            <Feature
              number='2'
              text={'O cliente acessa o cardápio, escolhe os seus produtos e envia o pedido.'
              }
            />
            <Feature
              number='3'
              text={'O Aplicativo Gestor recebe o pedido e notifica a loja da chegada de um novo pedido.'
              }
            />
          </SimpleGrid>
        </Box>
      )
}

export default Funcionamento

