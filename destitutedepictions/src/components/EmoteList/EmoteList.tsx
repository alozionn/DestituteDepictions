import { SimpleGrid } from '@chakra-ui/react'

import { Emote } from '../../interfaces/emote'
import { useEmotesStore } from '../../stores/emotes.store'
import { EmoteCard } from '../EmoteCard/EmoteCard'

export const EmoteList = () => {
    const emotes = useEmotesStore((state) => state.emotes)

    return (
        <SimpleGrid columns={{ sm: 4, md: 6, lg: 8, xl: 12 }} spacing={2} autoFlow="row dense">
            {emotes.map((emote, index) => {
                return <EmoteCard key={index} data={emote} />
            })}
        </SimpleGrid>
    )
}
