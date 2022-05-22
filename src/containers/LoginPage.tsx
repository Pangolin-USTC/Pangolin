import * as React from "react"
import {
    ChakraProvider,
    Box,
    Text,
    Link,
    Flex,
    Spacer,
    Center,
    VStack,
    Code,
    Grid,
    theme, HStack, Button, GridItem,
} from "@chakra-ui/react"
import {GrGrid} from "react-icons/all";

export default function LoginPage(){
    return (
        <Grid
            h={'100px'}
            templateColumns={'repeat(12,1fr)'}
            gap={4}
        >
            <Text>
                LoginPaage
            </Text>
        </Grid>

    )
}
