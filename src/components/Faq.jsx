import React from 'react'
import { Box,Heading,VStack,Accordion,AccordionItem,AccordionButton,AccordionIcon,AccordionPanel } from '@chakra-ui/react'

import {
 
  Text,
 
} from '@chakra-ui/react'




const Faq = () => {
  return (
    <Box id="faq" bg='#F0EAFB' py={6} >
        <VStack spacing={2} textAlign="center">
        <Heading as="h1" mb='50px' fontSize={['2xl','2xl','3xl']}>Dúvidas Frequentes</Heading>
        <Accordion    maxW={{ base: '350px', lg: '900px' }} bg="white" rounded="lg">
        
        <AccordionItem>
            <AccordionButton  display="flex" alignItems="center" justifyContent="space-between" p={4} _hover={{ bg: 'gray.100' }}>
              <Text fontWeight='600' fontSize="md" >
                Preciso ter um site para usar o Delivroo ?
              </Text>
              <AccordionIcon fontSize="24px" />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text color="gray.600">
                Não. Nós lhe forneceremos um link exclusivo para a sua loja online.
              </Text>
            </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
            <AccordionButton  display="flex" alignItems="center" justifyContent="space-between" p={4} _hover={{ bg: 'gray.100' }}>
              <Text fontWeight='600' fontSize="md" >
                Preciso de um computador para utilizar o Delivroo em minha loja ?
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
                Como faço para criar o meu cardápio ?
              </Text>
              <AccordionIcon fontSize="24px" />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text color="gray.600">
                Não se preocupe, nós criamos o seu cardáio inicial sem custo algum.
              </Text>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionButton  display="flex" alignItems="center" justifyContent="space-between" p={4} _hover={{ bg: 'gray.100' }}>
              <Text fontWeight='600' fontSize="md" >
                Recebo muitos pedidos diariamente. Terei que pagar algo a mais por isto ?
              </Text>
              <AccordionIcon fontSize="24px" />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text color="gray.600">
                Não. Nós não cobramos comissões ou taxas por pedidos. Você só paga a mensalidade do seu plano para utilizar o Delivroo.
              </Text>
            </AccordionPanel>
          </AccordionItem>
 
          <AccordionItem>
            <AccordionButton  display="flex" alignItems="center" justifyContent="space-between" p={4} _hover={{ bg: 'gray.100' }}>
              <Text fontWeight='600' fontSize="md" >
                Como o meu cliente pode fazer um pedido em minha loja ?
              </Text>
              <AccordionIcon fontSize="24px" />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text color="gray.600">
                Seu cliente pode utilizar o navegador do celular,computador ou o aplicativo Android exclusivo da sua loja para realizar pedidos em sua loja online.
              </Text>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionButton  display="flex" alignItems="center" justifyContent="space-between" p={4} _hover={{ bg: 'gray.100' }}>
              <Text fontWeight='600' fontSize="md" >
                O meu cliente precisa se cadastrar para fazer pedidos ?
              </Text>
              <AccordionIcon fontSize="24px" />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text color="gray.600">
                Não. Seu cliente precisa apenas informar o nome e o telefone para realizar um pedido no Delivroo.
              </Text>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionButton  display="flex" alignItems="center" justifyContent="space-between" p={4} _hover={{ bg: 'gray.100' }}>
              <Text fontWeight='600' fontSize="md" >
                Como sei que chegou um novo pedido ?
              </Text>
              <AccordionIcon fontSize="24px" />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text color="gray.600">
                Sempre que um novo pedido chegar, você receberá uma notificação em seu telefone.
              </Text>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionButton  display="flex" alignItems="center" justifyContent="space-between" p={4} _hover={{ bg: 'gray.100' }}>
              <Text fontWeight='600' fontSize="md" >
                Vocês também fornecem o serviço de entrega com Motoboys ?
              </Text>
              <AccordionIcon fontSize="24px" />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text color="gray.600">
                Não. Atualmente nós apenas conectamos o seu cliente a sua loja. A responsabilidade pela entrega do pedido é exclusiva do ponto de venda.
              </Text>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionButton  display="flex" alignItems="center" justifyContent="space-between" p={4} _hover={{ bg: 'gray.100' }}>
              <Text fontWeight='600' fontSize="md" >
                O Delivroo serve apenas para delivery de comida ?
              </Text>
              <AccordionIcon fontSize="24px" />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text color="gray.600">
                Não. O Delivroo está preparado para atender a qualquer tipo de comércio.
              </Text>
            </AccordionPanel>
          </AccordionItem>


        </Accordion>
        </VStack>

    </Box>
  )
}

export default Faq

