import React from 'react'
import { Button,Heading,  Text,Image,Flex } from '@chakra-ui/react'
import notebook from '../assets/delivroo-note-celular.png'



const Topo = () => {
  return (
    <Flex as='section' direction={{ base: 'column', lg: 'row' }} align='center' justify='center' bg='#F0EAFB' pt='50px' pb='50px' px={['0','200px']}>
        
            <Flex  w={['350px','600px']} direction='column' align='center' justify='center' mb={[10,0]}>
               <Image w={['350px','600px']}   src={notebook} alt="versão pc" />
            </Flex>


            <Flex  w={['350px','600px']}   direction='column' align='center' justify='flex-start'>
              <Heading as="h1" fontSize={['2xl','2xl','3xl']}>Tenha o seu próprio aplicativo de delivery, sem taxas ou comissões, a partir de R$59,90 mensais. Teste grátis por 15 dias.</Heading>
               
                <Button w={['full','200px']} mt={10} colorScheme='blue'>Quero Assinar</Button>
            </Flex>


    </Flex>
  )
}

export default Topo