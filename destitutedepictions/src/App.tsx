import { ChakraProvider } from '@chakra-ui/react'

import './App.css'
import { Container, EmoteList, FloatingActionButton, SearchBar } from './components'
import { EXAMPLE_EMOTE } from './utils/constants'

const emoteList = [EXAMPLE_EMOTE, EXAMPLE_EMOTE, EXAMPLE_EMOTE]

function App() {
    return (
        <ChakraProvider>
            <div className="App">
                <Container>
                    <SearchBar />
                    <EmoteList emoteList={emoteList} />
                    <FloatingActionButton />
                </Container>
            </div>
        </ChakraProvider>
    )
}

export default App
