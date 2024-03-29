import axios from './axios'
import { API_ROOT } from '~/utils/Constants'

axios.defaults.withCredentials = true

export const fetchAllComic = async (page) => await axios.get(`${API_ROOT}/v1/comics/?page=${page}`)

export const fetchDetailComic = async (id) => await axios.get(`${API_ROOT}/v1/comics/detail/${id}`)

export const fetchQuantityPage = async (query) => {
    let request = null
    if (query === '') request = await axios.get(`${API_ROOT}/v1/comics/quantity-page`)
    else if (query === null) request = await axios.get(`${API_ROOT}/v1/comics/quantity-page?tagID=0`)
    else request = await axios.get(`${API_ROOT}/v1/comics/quantity-page?tagID=${query}`)
    return request
}

export const fetchAllComicOfTag = async (tagID, page) =>
    await axios.get(`${API_ROOT}/v1/comics/tag?tagID=${tagID}&page=${page}`)

export const fetchAllCommentOfComic = async (comicID, page) =>
    await axios.get(`${API_ROOT}/v1/comics/comments?comicID=${comicID}&page=${page}`)

export const fetchInteractions = async (comicID) =>
    await axios.get(`${API_ROOT}/v1/comics/number-follow-like/${comicID}`)

export const updateComics = async (comicID, data) => await axios.put(`${API_ROOT}/v1/comics/${comicID}`, data)

export const fetchUnfinishedComic = async () => await axios.get(`${API_ROOT}/v1/comics/unfinished-comics`)

export const searchComic = async (key, page) => await axios.get(`${API_ROOT}/v1/comics/search?key=${key}&page=${page}`)

export const fetchGetComments = async (comicID, page) => {
    try {
        const res = await axios.get(`${API_ROOT}/v1/comics/comments?comicID=${comicID}&page=${page}`)
        return res.data
    } catch (error) {
        console.log(error)
    }
}
