import { SearchIcon } from '@chakra-ui/icons'
import { Box, IconButton, Input, InputGroup, InputRightElement } from '@chakra-ui/react'
import React, { useCallback, useState } from 'react'

import { useEmotesStore } from '../../stores/emotes.store'
import { BTTV_API_CALLS } from '../../utils/api/bttv.api'
import { IMAGE_NORMALIZE } from '../../utils/image-normalize'

export const SearchBar = () => {
    const [searchString, setSearchString] = useState('')
    const setEmotes = useEmotesStore((state) => state.setEmotes)

    const handleTyping = useCallback(
        async (event: React.KeyboardEvent) => {
            if (event.key === 'Enter') {
                const emotes = await BTTV_API_CALLS.getSharedByQuery(searchString).get('')

                if (emotes.status !== 200) return

                const normalizedEmotes = IMAGE_NORMALIZE.bttv(emotes.data)

                setEmotes(normalizedEmotes)
            }
        },
        [searchString]
    )

    return (
        <Box py={4} onKeyDown={handleTyping}>
            <InputGroup>
                <Input
                    placeholder="Search for emote"
                    type="search"
                    onChange={(e) => setSearchString(e.target.value)}
                />
                <InputRightElement width="5rem">
                    <IconButton width="5rem" aria-label="search emote" icon={<SearchIcon />} />
                </InputRightElement>
            </InputGroup>
        </Box>
    )
}
