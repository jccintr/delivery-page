import React from 'react'
import { Box,Heading,VStack,Accordion,AccordionItem,AccordionButton,AccordionIcon,AccordionPanel } from '@chakra-ui/react'

import {
 
  Text,
 
} from '@chakra-ui/react'




const Faq = () => {
  return (
    <Box bg='#F0EAFB' py={6} >
        <VStack spacing={2} textAlign="center">
        <Heading as="h1" mb='50px' fontSize={['2xl','2xl','3xl']}>Dúvidas Frequentes</Heading>
        <Accordion  allowMultiple  maxW={{ base: '350px', lg: '900px' }} bg="white" rounded="lg">

          <AccordionItem>
            <AccordionButton  display="flex" alignItems="center" justifyContent="space-between" p={4} _hover={{ bg: 'gray.100' }}>
              <Text fontWeight='600' fontSize="md" >
                Preciso de um computador para utilizar o Delivroo?
              </Text>
              <AccordionIcon fontSize="24px" />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text color="gray.600">
                Não. Você só precisa de um smartphone com o sistema operacional Android para utilizar o aplicativo Gestor do Delivroo.
              </Text>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionButton  display="flex" alignItems="center" justifyContent="space-between" p={4} _hover={{ bg: 'gray.100' }}>
              <Text fontWeight='600' fontSize="md" >
                Como faço para criar o meu cardápio?
              </Text>
              <AccordionIcon fontSize="24px" />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text color="gray.600">
                Não se preocupe, nós criamos o seu cardápio gratuitamente.
              </Text>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionButton  display="flex" alignItems="center" justifyContent="space-between" p={4} _hover={{ bg: 'gray.100' }}>
              <Text fontWeight='600' fontSize="md" >
                Recebo muitos pedidos diariamente. Terei que pagar algo a mais por isto?
              </Text>
              <AccordionIcon fontSize="24px" />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text color="gray.600">
                Não. Nós não cobramos comissão por pedidos ou taxas de entrega. Você só paga a taxa mensal de utilização do Delivroo.
              </Text>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionButton  display="flex" alignItems="center" justifyContent="space-between" p={4} _hover={{ bg: 'gray.100' }}>
              <Text fontWeight='600' fontSize="md" >
                Vocês também fornecem o serviço de entrega com Motoboys?
              </Text>
              <AccordionIcon fontSize="24px" />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text color="gray.600">
                Não. Atualmente o Delivroo apenas conecta o cliente ao estabelecimento comercial. A responsabilidade pela entrega do pedido é exclusiva do ponto de venda.
              </Text>
            </AccordionPanel>
          </AccordionItem>
          
        </Accordion>
        </VStack>

    </Box>
  )
}

export default Faq

