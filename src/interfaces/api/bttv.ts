interface BTTV_EMOTE_USER {
    id: string //'607b9e3264433003f112cc98'
    name: string //'toyota414'
    displayName: string //'toyota414'
    providerId: string //'151111647'
}

export interface BTTV_EMOTE {
    id: string //"62e90bf2d991a3e26c13d93c",
    code: string //'OMEGALUL'
    imageType: string //'png'
    user: BTTV_EMOTE_USER
}

export interface API_INTERFACE_BTTV {
    bttvEmotes: BTTV_EMOTE[]
}
