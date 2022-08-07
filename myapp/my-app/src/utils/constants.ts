import { Emote } from '../types/emotes'

export const API_FFZ = 'https://api.frankerfacez.com/v1/emotes?' // q=ayaya&sensitive=false&sort=count&high_dpi=off&page=1&per_page=60
export const CDN_FFZ = 'https://cdn.frankerfacez.com/emote/' // /303899/2 = /{id}/{size}

export const API_BTTV = 'https://api.betterttv.net/3/emotes/'
// top => shared/top?offset=0&limit=50
// trending => shared/trending?offset=0&limit=50
// shared => shared?offset=0&limit=50
// global => https://api.betterttv.net/3/cached/emotes/global

export const CDN_BTTV = 'https://cdn.betterttv.net/emote/' // 5a970ab2122e4331029f0d7e/1x = {id}/{size}; size = 1x | 2x | 3x

export const API_7TV = 'https://7tv.app/emotes?' //sortBy=popularity&page=0&query={search_string}

export const API_DD = 'localhost:6969' //local emotes

export const EXAMPLE_EMOTE: Emote = {
    id: 'some-random-id-123',
    name: 'OMEGALUL',
    url: 'https://cdn.betterttv.net/emote/583089f4737a8e61abb0186b/2x',
    // size: 'large',
}
