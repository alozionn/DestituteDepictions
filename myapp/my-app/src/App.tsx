import { ChakraProvider } from '@chakra-ui/react'

import './App.css'
import { Container, EmoteList, SearchBar } from './components'

function App() {
    return (
        <ChakraProvider>
            <div className="App">
                <Container>
                    <SearchBar />
                    <EmoteList />
                </Container>
            </div>
        </ChakraProvider>
    )
}

export default App
