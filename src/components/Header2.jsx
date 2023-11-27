import React from 'react';
import logo from '../assets/logo-delivroo-branco-tranparente.png';
import {Box,Flex,HStack,Text,IconButton,useDisclosure,Stack,Image} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'

const links = [{id:1,title: 'Recursos'},{id:1,title: 'Dúvidas'},{id:1,title: 'Planos'},{id:1,title: 'Modelos'},{id:1,title: 'Contato'}];

const NavLink = ({children}) => {
  
  return (
    <Box display='flex' alignItems={'center'} justifyContent={'center'} as="a" p={2} py={1}  _hover={{textDecoration: 'none', borderBottomWidth:1,borderTopWidth:1}} href={'#'}>
       <Text color={'#ffffff'} as='b' >{children}</Text>
    </Box>
  )
}

const NavLink2 = ({children}) => {
  
  return (
    <Box display='flex' alignItems={'center'} justifyContent={'flex-start'} as="a" p={2} py={1}  _hover={{textDecoration: 'none', borderBottomWidth:1,borderTopWidth:1}} href={'#'}>
       <Text color={'#ffffff'} as='b' >{children}</Text>
    </Box>
  )
}


const Header2 = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Box w={'100%'} bg='blue.600' px={[1,'300px']}>
        <Flex alignItems={'center'} justifyContent={'space-between'} >

          <HStack  spacing={8} alignItems={'center'}>
               <Image h='100px' w='100px' src={logo} alt="Logo Delivroo" />
          </HStack>

          <Flex alignItems={'center'} >
              <HStack  as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }} marginRight={50}>
                  {links.map((link) => (<NavLink key={link.id}>{link.title}</NavLink>))}
              </HStack>
          </Flex>

          <IconButton
            bg={'blue.600'}
            size={'md'}
            icon={isOpen ? <CloseIcon color='#ffffff'/> : <HamburgerIcon color='#ffffff'/>}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {links.map((link) => (
                <NavLink2 key={link.id}>{link.title}</NavLink2>
              ))}
            
            </Stack>
          </Box>
        ) : null}
      </Box>

    </>
  )

}

export default Header2
