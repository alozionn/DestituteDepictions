import axios from 'axios'

import { API_BTTV, BTTV_TABS } from '../constants'

export const BTTV_API_CALLS = {
    getSharedByQuery: (query: string) => {
        return axios.create({
            baseURL: API_BTTV + BTTV_TABS.SHARED + '/search',
            params: {
                query,
                offset: 0,
                limit: 50,
            },
        })
    },

    getTop: () => {
        return axios.create({
            baseURL: API_BTTV + BTTV_TABS.TOP,
            params: {
                offset: 0,
                limit: 50,
            },
        })
    },

    getGlobal: () => {
        return axios.create({
            baseURL: API_BTTV + BTTV_TABS.GLOBAL,
            params: {
                offset: 0,
                limit: 50,
            },
        })
    },

    getTrending: () => {
        return axios.create({
            baseURL: API_BTTV + BTTV_TABS.TRENDING,
            params: {
                offset: 0,
                limit: 50,
            },
        })
    },
}
