import React from 'react'
import {Box,Container,Flex,Heading,Icon,Stack,Text,useColorModeValue,VStack} from '@chakra-ui/react'

import {FiPrinter} from 'react-icons/fi'
import {BsQrCode,BsMap,BsExclamationCircle} from 'react-icons/bs'
import {BiHide} from 'react-icons/bi'

import {FaWhatsapp} from 'react-icons/fa'
import {FaListCheck} from 'react-icons/fa6'
import {IoFastFoodOutline,IoColorPaletteOutline} from 'react-icons/io5'

const Card = ({ heading, description, icon, href }) => {
  return (
    <Box maxW={{ base: 'full', md: '275px' }} w={'full'} align='center'  borderWidth="1px" borderRadius="lg" overflow="hidden" p={5} _hover={{ borderColor: 'blue.500' }}>
      <Stack align={'center'} spacing={2}>
        <Flex  w={16} h={16} align={'center'} justify={'center'} color={'blue.500'} rounded={'full'} bg={useColorModeValue('gray.100', 'gray.700')}>
          {icon}
        </Flex>
        <Box mt={2}>
          <Heading fontSize={['lg','lg','lg']} >{heading}</Heading>
          <Text mt={1} fontSize={'sm'}>
            {description}
          </Text>
        </Box>
      </Stack>
    </Box>
  )
}



const Recursos = () => {
  
  return (
    <Box p={4}>

      <VStack spacing={2} textAlign="center">
          <Heading as="h1" fontSize={['2xl','2xl','3xl']}>Recursos do Delivroo</Heading>
          <Text fontSize={['lg','lg','xl']} color={'gray.500'}>
          O Delivroo tem todos os recursos para você automatizar o seu delivery e melhor atender a seu cliente.
          </Text>
      </VStack>
      

      <Container maxW={'5xl'} mt={12}>
        <Flex flexWrap="wrap" gridGap={6} justify="center">
        <Card
            heading={'QR Code do Cardápio'}
            icon={<Icon as={BsQrCode} w={10} h={10} />}
            description={'Facilite o acesso ao cardápio na sua loja física.'}
            href={'#'}
          />
          <Card
            heading={'Mensagens no WhatsApp'}
            icon={<Icon as={FaWhatsapp} w={10} h={10} />}
            description={'Notifique o seus clientes pelo WhatsApp de forma simples e rápida.'}
            href={'#'}
          />
          <Card
            heading={'Impressão de Pedidos'}
            icon={<Icon as={FiPrinter} w={10} h={10} />}
            description={'Imprima os seus pedidos em uma impressora bluetooth.'}
            href={'#'}
          />
          <Card
            heading={'Status do Pedido'}
            icon={<Icon as={BsExclamationCircle} w={10} h={10} />}
            description={'Seu cliente acompanha o status do pedido em tempo real.'}
            href={'#'}
          />
         <Card
            heading={'Cardápio'}
            icon={<Icon as={IoFastFoodOutline} w={10} h={10} />}
            description={'Crie ou modifique o seu cardápio rapidamente.'}
            href={'#'}
          />
           <Card
            heading={'Remova Produtos'}
            icon={<Icon as={BiHide} w={10} h={10} />}
            description={'Gerencie a disponibilidade dos produtos em seu cardápio.'}
            href={'#'}
          />
          <Card
            heading={'Adicionais nos Produtos'}
            icon={<Icon as={FaListCheck} w={10} h={10} />}
            description={'Permite ao seus clientes incluir itens adicionais aos produtos.'}
            href={'#'}
          />
         
           
           
          
          <Card
            heading={'Taxas de Entrega'}
            icon={<Icon as={BsMap} w={10} h={10} />}
            description={'Tenha taxas de entrega diferenciadas por bairro.'}
            href={'#'}
          />
           <Card
            heading={'Visual'}
            icon={<Icon as={IoColorPaletteOutline} w={10} h={10} />}
            description={'Personalise o visual de sua loja virtual a qualquer momento.'}
            href={'#'}
          />
         {/* <Card
            heading={'Abre e Fecha'}
            icon={<Icon as={IoColorPaletteOutline} w={10} h={10} />}
            description={'Personalise o visual de sua loja virtual a qualquer momento.'}
            href={'#'}
  />*/}
        </Flex>
      </Container>

    </Box>
  )

}

export default Recursos

