import React from 'react'
import {
    Box,
    Button,
   
    FormControl,
    FormLabel,
    Heading,
   
    Input,
    InputGroup,
    InputLeftElement,
    Text,
  
    Textarea,
    
   
    useColorModeValue,
    VStack,
  } from '@chakra-ui/react'

  import { BsPerson,  } from 'react-icons/bs' 
  import { MdOutlineEmail } from 'react-icons/md' 
  import {FaWhatsapp} from 'react-icons/fa'

const Form = () => {
  
    return (
        <Box py={6} >
          <VStack spacing={2} textAlign="center">
            <Heading as="h1" fontSize={['2xl','2xl','3xl']}>Quero ser Delivroo !</Heading>
            <Text fontSize={['lg','lg','xl']} color={'gray.500'}>
              Entre em contato conosco e torne-se um parceiro Delivroo.
            </Text>
          </VStack>
          <VStack spacing={2} textAlign="center">
          <Box shadow="base" borderWidth="1px" borderColor={useColorModeValue('gray.200', 'gray.500')} borderRadius={'xl'}  mt='20px' w={{base:'340px', lg:'600px'}}  mx={10} p={{ base: 5, lg: 8 }}>
          <VStack spacing={5}>
                  <FormControl isRequired>
                    <FormLabel>Nome</FormLabel>
                    <InputGroup>
                      <InputLeftElement>
                        <BsPerson />
                      </InputLeftElement>
                      <Input type="text" name="nome" placeholder="Seu nome" />
                    </InputGroup>
                  </FormControl>

                  <FormControl isRequired>
                    <FormLabel>Telefone</FormLabel>
                    <InputGroup>
                      <InputLeftElement>
                        <FaWhatsapp />
                      </InputLeftElement>
                      <Input type="text" name="telefone" placeholder="Seu telefone" />
                    </InputGroup>
                  </FormControl>

                  <FormControl isRequired>
                    <FormLabel>Email</FormLabel>
                    <InputGroup>
                      <InputLeftElement>
                        <MdOutlineEmail />
                      </InputLeftElement>
                      <Input type="text" name="email" placeholder="Seu email" />
                    </InputGroup>
                  </FormControl>

                  <FormControl isRequired>
                    <FormLabel>Tipo de Negócio</FormLabel>
                    <InputGroup>
                      
                      <Input type="text" name="tipo" placeholder="Pizzaria, hamburgueria, lanchonete" />
                    </InputGroup>
                  </FormControl>

                  <FormControl>
                    <FormLabel>Mensagem (opcional)</FormLabel>

                    <Textarea
                      name="mensagem"
                      placeholder="Sua mensagem"
                      rows={6}
                      resize="none"
                    />
                  </FormControl>
                  <Button w="full" mt='20px' colorScheme='blue' >Enviar</Button>
          </VStack>
          </Box>
          </VStack>
          
        </Box>
      )
  
}

export default Form

