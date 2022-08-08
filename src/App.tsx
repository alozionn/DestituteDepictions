import { ChakraProvider } from '@chakra-ui/react'

import './App.css'
import { Container, EmoteList, FloatingActionButton, SearchBar } from './components'
import { EXAMPLE_EMOTE } from './utils/constants'

function App() {
    return (
        <ChakraProvider>
            <div className="App">
                <Container>
                    <SearchBar />
                    <EmoteList />
                    <FloatingActionButton />
                </Container>
            </div>
        </ChakraProvider>
    )
}

export default App
