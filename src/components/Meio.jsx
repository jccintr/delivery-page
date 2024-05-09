import React from 'react'
import { Button,Heading,  Link,Image,Flex,Text } from '@chakra-ui/react'
import imagem from '../assets/duplo.png'


const Meio = () => {
  return (
    <Flex as='section' direction={{ base: 'column', lg: 'row' }} align='center' justify='center' bg='blue.600' pt='50px' pb='50px' px={['0','200px']}>
        
            


            <Flex  w={['350px','600px']}   direction='column' align='center' justify='flex-start'>
              <Heading as="h1" color={'whitesmoke'} fontSize={['2xl','2xl','3xl']}>
                 Turbine o seu delivery com os nossos aplicativos !
              </Heading>
              <Text fontSize={['lg','lg','xl']} color={'whitesmoke'} mt={10}>
                 Agilize o atendimento e obtenha maior satisfação de seus clientes utilizando nossos aplicativos de vendas web e gestor android.
            </Text>
              <Link href='#contato'  textDecoration={'none'}>
                  <Button as='a' w={['full','200px']} mt={10} mb={10} colorScheme='green' _hover={{textDecoration: 'none',bg:'green.600'}}>Quero Experimentar</Button>
              </Link>
                
            </Flex>

            <Flex  w={['350px','600px']} direction='column' align='center' justify='center' mb={[10,0]}>
               <Image w={['350px','600px']}   src={imagem} alt="versão pc" />
            </Flex>


    </Flex>
  )
}

export default Meio