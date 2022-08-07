import { SimpleGrid } from '@chakra-ui/react'

import { Emote } from '../../types/emotes'
import { EmoteCard } from '../EmoteCard/EmoteCard'

interface EmoteListProps {
    emoteList: Emote[]
}

export const EmoteList = ({ emoteList }: EmoteListProps) => {
    return (
        <SimpleGrid columns={{ sm: 4, md: 6, lg: 8, xl: 12 }} spacing={2} autoFlow="row dense">
            {emoteList.map((emote, index) => {
                return <EmoteCard key={index} data={emote} />
            })}
        </SimpleGrid>
    )
}
