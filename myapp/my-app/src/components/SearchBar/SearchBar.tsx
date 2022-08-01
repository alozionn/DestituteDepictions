import { SearchIcon } from '@chakra-ui/icons'
import { Box, IconButton, Input, InputGroup, InputRightElement } from '@chakra-ui/react'

export const SearchBar = () => {
    return (
        <Box py={4}>
            <InputGroup>
                <Input placeholder="Search for emote" type="search" />
                <InputRightElement width="5rem">
                    <IconButton width="5rem" aria-label="search emote" icon={<SearchIcon />} />
                </InputRightElement>
            </InputGroup>
        </Box>
    )
}
