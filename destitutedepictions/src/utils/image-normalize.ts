import { BTTV_EMOTE } from '../interfaces/api/bttv'
import { CDN_BTTV } from './constants'

//used to convert images from api specific format to app format
export const IMAGE_NORMALIZE = {
    bttv: (emotes: BTTV_EMOTE[]) => {
        return emotes.map((emote) => {
            return {
                id: emote.id,
                name: emote.code,
                url: CDN_BTTV + emote.id + `/3x`,
            }
        })
    },
}
