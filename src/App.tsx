import * as React from "react"
import { Routes, Route, Link } from "react-router-dom";
import {
  ChakraProvider,
  Box,
  Text,
  Flex,
  Spacer,
  Center,
  VStack,
  Code,
  Grid,
  theme, HStack,
} from "@chakra-ui/react"
import Header from "./components/header"
import RenderPage from "./containers/RenderPage"
import LoginPage from "./containers/LoginPage"
import IndexPage from "./containers/IndexPage"
import EditorPage from "./containers/EditorPage"
import FilePage from "./containers/FilePage"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import { Logo } from "./Logo"

export const App = () => (
  <ChakraProvider theme={theme}>
    <Header/>
    <Routes>
      <Route path="/" element={<IndexPage />} />
      <Route path="/home" element={<FilePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/editor" element={<EditorPage />} />
      <Route path="/Render" element={<RenderPage />} />
    </Routes>
    <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh" p={3}>
        <ColorModeSwitcher justifySelf="flex-end" />
        <VStack spacing={8}>
          <Logo h="40vmin" pointerEvents="none" />
          <Text>
            Edit <Code fontSize="xl">src/App.tsx</Code> and save to reload.
          </Text>
          <Text
            color="teal.500"
            fontSize="2xl"
          >
            Learn Chakra
          </Text>
        </VStack>
      </Grid>
    </Box>
  </ChakraProvider>
)
