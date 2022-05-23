import * as React from "react"
import { Routes, Route, Link as ReachLink } from "react-router-dom";
import {
    ChakraProvider,
    Box,
    Text,
    Flex,
    Spacer,
    Link,
    Center,
    VStack,
    Code,
    Grid,
    theme, HStack, Button, GridItem,
} from "@chakra-ui/react"
import {GrGrid} from "react-icons/all";

export default function Header(){
    return (
        <Grid
            h={'80px'}
            templateColumns={'repeat(12,1fr)'}
            gap={4}
            borderBottom ={"2px"}
            borderBottomColor={"blackAlpha.200"}
            pr={"20px"}
        >
            <GridItem colSpan={2} >
                <Center
                    h={"100%"}
                >
                    <Link
                        as={ReachLink}
                        to='/'
                        bgGradient='linear(to-l, teal.400, blue.400)'
                        bgClip='text'
                        fontSize={"30px"}
                        fontWeight={"bold"}
                        fontFamily={"sans-serif"}
                        _focus={{
                            boxShadow: "none",
                        }}
                    >
                        Pangolin
                    </Link>
                </Center>
            </GridItem>
            <GridItem colStart={3} >
                <Center
                    h={"100%"}
                >
                    <HStack
                        spacing={"30px"}
                        h={"100%"}
                    >
                        <Link
                            bgColor='teal.600'
                            as={ReachLink}
                            to='/home'
                            fontSize={"20px"}
                            bgClip='text'
                            _focus={{
                                boxShadow: "none",
                            }}
                            _hover={{
                                bgColor: 'blue.400',
                            }}
                        >
                            Home
                        </Link>
                        <Link
                            bgColor='teal.600'
                            bgClip='text'
                            as={ReachLink}
                            to='/editor'
                            fontSize={"20px"}
                            textDecoration='none'
                            _focus={{
                                boxShadow: "none",
                            }}
                            _hover={{
                                bgColor: 'blue.400',
                            }}
                        >
                            Editor
                        </Link>
                        <Link
                            bgColor='teal.600'
                            bgClip='text'
                            as={ReachLink}
                            to='/render'
                            fontSize={"20px"}
                            textDecoration='none'
                            _focus={{
                                boxShadow: "none",
                            }}
                            _hover={{
                                bgColor: 'blue.400',
                            }}
                        >
                            Render
                        </Link>
                    </HStack>
                </Center>
            </GridItem>
            <GridItem colStart={12}>
                <Center
                    h={"100%"}
                >
                    <HStack>
                        <Button colorScheme={'teal'}>
                            <Link
                                as={ReachLink}
                                to='/login'
                                _hover={{
                                    textDecoration:'none',
                                }}
                                _focus={{
                                    boxShadow: "none",
                                }}
                            >
                                Login
                            </Link>
                        </Button>
                        <Button colorScheme={'teal'} variant={'outline'} >
                            <Link
                                as={ReachLink}
                                to='/editor'
                                _hover={{
                                    textDecoration:'none',
                                }}
                                _focus={{
                                    boxShadow: "none",
                                }}
                            >
                                Try -{'>'}
                            </Link>
                        </Button>
                    </HStack>
                </Center>
            </GridItem>
        </Grid>

    )
}
