import React, {useState,useEffect} from 'react';
import {Box,Button,FormControl,FormLabel,Heading,Input,InputGroup,InputLeftElement,Text,Textarea,useColorModeValue,VStack,useToast,} from '@chakra-ui/react';
import { BsPerson,  } from 'react-icons/bs';
import { MdOutlineEmail } from 'react-icons/md';
import {FaWhatsapp} from 'react-icons/fa';
import emailjs from '@emailjs/browser';


const insertPhoneMask = (phone) => {

  const noMask = phone.replace(/\D/g, '');
  const { length } = noMask;
  if (length <= 11) {
    return noMask
      .replace(/(\d{2})(\d)/, '($1) $2')
      .replace(length === 11 ? /(\d{5})(\d)/ : /(\d{4})(\d)/, '$1-$2');
  }
  return phone;

}

const Form = () => {
    const [nome,setNome] = useState('');
    const [telefone,setTelefone] = useState('');
    const [email,setEmail] = useState('');
    const [tipo,setTipo] = useState('');
    const [mensagem,setMensagem] = useState('');
    const toast = useToast();
    const [isLoading,setIsLoading] = useState(false);

    useEffect(() => {
         setTelefone(insertPhoneMask(telefone));
      }, [telefone]);

  const onEnviar = async () => {
    
   if (nome.trim().length===0 || email.trim().length===0 || telefone.trim().length===0 || tipo.trim().length===0 ){
      
    toast({
      title: 'Atenção !',
      description: "Por favor, informe o seu nome, email, telefone e tipo de negócio.",
      status: 'error',
      duration: 3000,
      isClosable: true,
    })
       
       return
   }

   setIsLoading(true);

   const templateParams = {
      from_name: nome,
      from_email: email,
      from_phone: telefone,
      from_tipo : tipo,
      message: mensagem
   }

   
   emailjs.send('service_kr87iur', 'template_tmo311e', templateParams,'9Fk204d4daU3I1Y6n') // delivroo
  .then(function(response) {
     console.log('SUCCESS!', response.status, response.text);
     setNome('');
     setEmail('');
     setTelefone('');
     setTipo('');
     setMensagem('');
     toast({title: 'Mensagem Enviada !', description: "Recebemos a sua mensagem. Em breve entraremos em contato.",status: 'success', duration: 3000, isClosable: true,});
     setIsLoading(false);
  }, function(error) {
     console.log('FAILED...', error);
     setIsLoading(false);
  });
    
  }
  
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
                      <Input type="text" name="nome" placeholder="Seu nome" value={nome} onChange={e => setNome(e.target.value)} />
                    </InputGroup>
                  </FormControl>

                  <FormControl isRequired>
                    <FormLabel>Telefone</FormLabel>
                    <InputGroup>
                      <InputLeftElement>
                        <FaWhatsapp />
                      </InputLeftElement>
                      <Input type="text" name="telefone" placeholder="Seu telefone" value={telefone} onChange={e => setTelefone(e.target.value)} />
                    </InputGroup>
                  </FormControl>

                  <FormControl isRequired>
                    <FormLabel>Email</FormLabel>
                    <InputGroup>
                      <InputLeftElement>
                        <MdOutlineEmail />
                      </InputLeftElement>
                      <Input type="text" name="email" placeholder="Seu email" value={email} onChange={e => setEmail(e.target.value)} />
                    </InputGroup>
                  </FormControl>

                  <FormControl isRequired>
                    <FormLabel>Tipo de Negócio</FormLabel>
                    <InputGroup>
                      <Input type="text" name="tipo" placeholder="Pizzaria, hamburgueria, lanchonete" value={tipo} onChange={e => setTipo(e.target.value)}/>
                    </InputGroup>
                  </FormControl>

                  <FormControl>
                    <FormLabel>Mensagem (opcional)</FormLabel>
                    <Textarea
                      name="mensagem"
                      placeholder="Sua mensagem"
                      rows={6}
                      resize="none"
                      value={mensagem} onChange={e => setMensagem(e.target.value)}
                    />
                  </FormControl>

                  <Button onClick={onEnviar} w="full" mt='20px' colorScheme='blue' isLoading={isLoading}>ENVIAR</Button>
            
          </VStack>
          </Box>
          </VStack>
          
        </Box>
      )
  
}

export default Form

