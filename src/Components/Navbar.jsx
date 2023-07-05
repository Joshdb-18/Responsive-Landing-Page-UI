import React from 'react';
import { 
    Box,
    Flex,
    Button,
    HStack
} from '@chakra-ui/react'

export default function Navbar() {
    return (
        <div>
            <Box
                bg='#130123'
            >
                <Flex h='90px' alignItems="center" justifyContent="space-between" bg='#130123'>
                    <Button fontSize='lg' color= '#FFFFFF' colorScheme ='#ECF1F0' fontWeight= "700" className="btnRes" bg='#130123'>Crypto<span style={{color :'#0FAE96'}}>Cap</span></Button>

                    <Flex h={16} alignItems={"center"} justifyContent={"space-between"} ml='-160px'>
                        <HStack spacing={8} alignItems={"center"}>
                            <HStack
                            as={"nav"}
                            spacing={4}
                            display={{ base: "none", md: "flex" }}
                            id="myDIV"
                            >
                            <Button fontSize='16px' color= '#0FAE96' colorScheme ='#ECF1F0' fontWeight= "600" className="navOptsBtn" bg='#130123'>
                                <p className="changeOpts">Home</p>
                            </Button>
            
                            <Button fontSize='16px' color= '#ECF1F0' colorScheme ='#ECF1F0' fontWeight= "500" className="navOptsBtn" bg='#130123' _hover={{color: '#0FAE96', fontWeight : "600"}}>
                                <p className="changeOpts">Businesses</p>
                            </Button>
                            <Button fontSize='16px' color= '#ECF1F0' colorScheme ='#ECF1F0' fontWeight= "500" className="navOptsBtn" bg='#130123' _hover={{color: '#0FAE96', fontWeight : "600"}}>
                            
                                <p className="changeOpts">Trade</p>
                            </Button>
            
                            <Button fontSize='16px' color= '#ECF1F0' colorScheme ='#ECF1F0' fontWeight= "500" className="navOptsBtn" bg='#130123' _hover={{color: '#0FAE96', fontWeight : "600"}}>
                                <p className="changeOpts">Market</p>
                            </Button>
            
                            <Button fontSize='16px' color= '#ECF1F0' colorScheme ='#ECF1F0' fontWeight= "500" className="navOptsBtn" bg='#130123' _hover={{color: '#0FAE96', fontWeight : "600"}}>
                                <p className="changeOpts">Learn</p>
                            </Button>
                            </HStack>
                    </HStack>
                    </Flex>
                    
                </Flex>
            </Box>
        </div>
    )
}