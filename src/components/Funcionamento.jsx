import React from 'react'
import { Box, Text,Flex,Heading,Stack } from '@chakra-ui/react'

/*
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
*/
  const Card = ({ number, text }) => {
    return (
      <Box maxW={{ base: 'full', md: '275px' }} w={'full'} align='center' borderWidth="1px"  borderRadius="lg" overflow="hidden" p={5}  _hover={{ borderColor: 'blue.500' }}>
        <Stack align={'center'} spacing={2}>
           <Flex   rounded='full' w='50px' h='50px'  align='center' justify='center' mb='20px' bg='blue.500'>
             <Heading fontWeight='extrabold' fontSize={['xl','xl','2xl']} color='white'>{number}</Heading>
           </Flex>
          <Box mt={2}>
            
            <Text mt={1} fontSize={'sm'}>
              {text}
            </Text>
          </Box>
        </Stack>
      </Box>
    )
  }

const Funcionamento = () => {
    return (
        <Box  align='center' bg='#F0EAFB' p={5} >
            <Heading  fontWeight='extrabold' fontSize={['2xl','2xl','3xl']}  mb='50px'>Como funciona o Delivroo</Heading>
            <Flex flexWrap="wrap" gridGap={6} justify="center">
          
            <Card
              number='1'
              text={'O cliente acessa o link da loja pelo navegador ou usa o aplicativo.'}
            />
            <Card
              number='2'
              text={'O cliente acessa o cardápio, escolhe os seus produtos e envia o pedido.'
              }
            />
            <Card
              number='3'
              text={'O Aplicativo Gestor recebe o pedido e notifica a loja da chegada de um novo pedido.'
              }
            />
          </Flex>
        </Box>
      )
}

export default Funcionamento

