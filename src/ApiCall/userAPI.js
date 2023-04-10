import { toast } from 'react-toastify'

import axios from './axios'
import { API_ROOT } from '~/utils/Constants'
import { assign } from 'lodash'

export const fetchLogin = async (data) => {
    try {
        const request = await axios.post(`${API_ROOT}/v1/user/login`, data)
        return request.data
    } catch (error) {
        toast.error(error.response.data.message)
    }
}
export const fetchLogout = async () => {
    try {
        const request = await axios.post(`${API_ROOT}/v1/user/logout`)
        return request.data
    } catch (error) {
        toast.error(error.response.data.message)
    }
}
export const fetchFullUser = async () => await axios.get(`${API_ROOT}/v1/user`)
export const fetchReadComics = async (page) => await axios.get(`${API_ROOT}/v1/user/history?page=${page}`)
export const addHistory = async (data) => await axios.post(`${API_ROOT}/v1/user/history`, data)
export const fetchLikedComics = async (page) => await axios.get(`${API_ROOT}/v1/user/comics/liked?page=${page}`)
export const fetchFollowedComics = async (page) => await axios.get(`${API_ROOT}/v1/user/comics/followed?page=${page}`)
export const removeReadComic = async (comicID, chap) =>
    await axios.delete(`${API_ROOT}/v1/user/remove-history?comicID=${comicID}&chap=${chap}`)
export const updateUser = async (data) => await axios.put(`${API_ROOT}/v1/user`, data)
export const likeComic = async (comicID) => {
    try {
        const res = await axios.put(`${API_ROOT}/v1/user/like?comicID=${comicID}`)
        return res.data
    } catch (error) {
        console.error(error)
    }
}
export const likeStatusComic = async (comicID) => {
    try {
        const res = await axios.get(`${API_ROOT}/v1/user/like?comicID=${comicID}`)
        return res.data
    } catch (error) {
        console.error(error)
    }
}

export const followComic = async (comicID) => {
    try {
        const res = await axios.put(`${API_ROOT}/v1/user/follow?comicID=${comicID}`)
        return res.data
    } catch (error) {
        console.error(error)
    }
}

export const getQuantityPageLiked = async () => {
    try {
        const res = await axios.get(`${API_ROOT}/v1/user/comics/quantity-page-liked`)
        return res.data
    } catch (error) {
        console.error(error)
    }
}
export const getLikedComics = async (page) => {
    try {
        const res = await axios.get(`${API_ROOT}/v1/user/comics/liked?page=${page}`)
        return res.data
    } catch (error) {
        console.error(error)
    }
}
export const getQuantityPageFollowed = async () => {
    try {
        const res = await axios.get(`${API_ROOT}/v1/user/comics/quantity-page-followed`)
        return res.data
    } catch (error) {
        console.error(error)
    }
}
export const getFollowedComics = async (page) => {
    try {
        const res = await axios.get(`${API_ROOT}/v1/user/comics/followed?page=${page}`)
        return res.data
    } catch (error) {
        console.error(error)
    }
}
export const removeHistory = async (comicID, chap) => {
    try {
        await axios.delete(`${API_ROOT}/v1/user/remove-history?comicID=${comicID}&chap=${chap}`)
        toast.success('Đã xóa')
    } catch (error) {
        toast.error(error.message)
    }
}

export const postComment = async (data) => {
    try {
        const res = await axios.post(`${API_ROOT}/v1/user/comment`, data)
        return res.data
    } catch (error) {
        console.error(error)
    }
}

export const deleteComment = async (id) => {
    try {
        const res = await axios.delete(`${API_ROOT}/v1/user/comment?id=${id}`)
        return res.data
    } catch (error) {
        console.error(error)
    }
}

export const followStatusComic = async (comicID) => {
    try {
        const res = await axios.get(`${API_ROOT}/v1/user/follow?comicID=${comicID}`)
        return res.data
    } catch (error) {
        console.error(error)
    }
}
