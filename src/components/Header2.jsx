import React from 'react';
import logo from '../assets/logo-delivroo-branco-tranparente.png';
import {Box,Flex,HStack,Text,IconButton,useDisclosure,Stack,Image} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'

const links = [{id:1,title: 'CARACTERÍSTICAS'},{id:2,title: 'FAQ'},{id:3,title: 'PLANOS'},{id:4,title: 'EXEMPLOS'},{id:5,title: 'ASSINAR'}];

const NavLink = ({children}) => {
  
  return (
    <Box display='flex' alignItems={'center'} justifyContent={'center'} as="a" p={2} py={1}  _hover={{textDecoration: 'none', borderBottomWidth:1,borderTopWidth:1}} href={'#contato'}>
       <Text color={'#ffffff'} as='b' >{children}</Text>
    </Box>
  )
}

const NavLink2 = ({children}) => {
  
  return (
    <Box display='flex' alignItems={'center'} justifyContent={'flex-start'} as="a" p={2} py={1}  _hover={{textDecoration: 'none', borderBottomWidth:1,borderTopWidth:1}} href={'#contato'}>
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
               <Image my={1} h='100px' w='100px' src={logo} alt="Logo Delivroo" />
          </HStack>

          <Flex alignItems={'center'} >
              <HStack  as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }} marginRight={50}>
                  {links.map((link) => (<NavLink key={link.id}>{link.title}</NavLink>))}
              </HStack>
          </Flex>

          <IconButton
            bg={'blue.600'}
            size={'md'}
            icon={isOpen ? <CloseIcon w={4} h={4} color='#ffffff'/> : <HamburgerIcon w={6} h={6} color='#ffffff'/>}
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
