import React from 'react'
import {
    Box,
    Stack,
    HStack,
    Heading,
    Text,
    VStack,
    useColorModeValue,
    List,
    ListItem,
    ListIcon,
    Button,
  } from '@chakra-ui/react'
  import { FaCheckCircle } from 'react-icons/fa'
  
  const PriceWrapper = ({children}) => {
    return (
      <Box
        mb={4}
        shadow="base"
        borderWidth="1px"
        w={{ base: '340px', lg: '420px' }}
        h={{ base: '', lg: '520px' }}
        alignSelf={{ base: 'center', lg: 'flex-start' }}
        borderColor={useColorModeValue('gray.200', 'gray.500')}
        borderRadius={'xl'}>
        {children}
      </Box>
    )
  }
  

const Planos = () => {
    return (
        <Box py={6}>
          <VStack spacing={2} textAlign="center">
            <Heading as="h1" fontSize={['2xl','2xl','3xl']}>Conheça Nossos Planos</Heading>
            <Text fontSize={['lg','lg','xl']} color={'gray.500'}>
              Teste por 7 dias gratuitamente. Não solicitamos cartão de crédito. Cancele a qualquer momento.
            </Text>
          </VStack>
          <Stack direction={{ base: 'column', md: 'row' }}  textAlign="center" justify="center" spacing={{ base: 4, lg: 10 }} py={10}> 
            <PriceWrapper>
              <Box bg={useColorModeValue('gray.50', 'gray.700')} py={4} px={6}>
                <Text fontWeight="500" fontSize="2xl">
                  Básico
                </Text>
                <HStack justifyContent="center">
                  <Text fontSize="3xl" fontWeight="600">
                    R$
                  </Text>
                  <Text fontSize="5xl" fontWeight="900">
                    59,90
                  </Text>
                  <Text fontSize="3xl" color="gray.500">
                    /mês
                  </Text>
                </HStack>
              </Box>
              <VStack   py={4} borderBottomRadius={'xl'}>
              <Box w="80%" pb={7}>
                  <Button w="full"  colorScheme='blue' >
                    Quero este plano !
                  </Button>
                </Box>
                <Text fontWeight="900" mb='20px'>Detalhes do Plano Básico</Text>
                <List spacing={3} textAlign="start" px={6}>
                  <ListItem>
                    <ListIcon as={FaCheckCircle} color="blue.500" />
                    Loja personalizada na web.
                  </ListItem>
                  <ListItem>
                    <ListIcon as={FaCheckCircle} color="blue.500" />
                    Aplicativo Gestor Android.
                   </ListItem>
                   <ListItem>
                    <ListIcon as={FaCheckCircle} color="blue.500" />
                    Cardápio ilimitado.
                   </ListItem>
                  <ListItem>
                    <ListIcon as={FaCheckCircle} color="blue.500" />
                    Pedidos ilimitados.
                  </ListItem>
                   <ListItem>
                    <ListIcon as={FaCheckCircle} color="blue.500" />
                    Impressão de Pedidos.
                   </ListItem>
                  <ListItem>
                    <ListIcon as={FaCheckCircle} color="blue.500" />
                    Sem taxas ou comissões.
                   </ListItem>
                </List>
                
                
              </VStack>
             
            </PriceWrapper>

            <PriceWrapper>
              <Box bg={useColorModeValue('gray.50', 'gray.700')} py={4} px={6}>
                <Text fontWeight="500" fontSize="2xl">
                  Plus
                </Text>
                <HStack justifyContent="center">
                  <Text fontSize="3xl" fontWeight="600">
                    R$
                  </Text>
                  <Text fontSize="5xl" fontWeight="900">
                    89,90
                  </Text>
                  <Text fontSize="3xl" color="gray.500">
                    /mês
                  </Text>
                </HStack>
              </Box>
              <VStack   py={4} borderBottomRadius={'xl'}>
              <Box w="80%" pb={7}>
                  <Button w="full"  colorScheme='blue' >
                    Em Breve !
                  </Button>
                </Box>
                <Text fontWeight="900" mb='20px'>Detalhes do Plano Plus</Text>
                <List spacing={3} textAlign="start" px={6}>
                  <ListItem>
                    <ListIcon as={FaCheckCircle} color="blue.500" />
                    Todos os recursos do Plano Básico
                  </ListItem>
                  <ListItem>
                    <ListIcon as={FaCheckCircle} color="blue.500" />
                    Aplicativo exclusivo publicado na Play Store.
                  </ListItem>
                  
                </List>
                
                
              </VStack>
             
            </PriceWrapper>
             
    
            
          </Stack>
        </Box>
      )
    
}

export default Planos

