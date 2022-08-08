import create from 'zustand'

import { Emote } from '../interfaces/emote'

interface EmotesStore {
    emotes: Emote[]
    setEmotes: (emotes: Emote[]) => void
}

export const useEmotesStore = create<EmotesStore>((set) => ({
    emotes: [],
    setEmotes: (emotes) =>
        set(() => {
            return { emotes }
        }),
}))
