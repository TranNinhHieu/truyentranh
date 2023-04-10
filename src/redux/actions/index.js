import * as types from '../constant/ActionTypes'
import { fetchAllComic } from '~/ApiCall/comicsAPI.js'
import { fetchAllChapterOfComic } from '~/ApiCall/chapters'
import {
    fetchAllComicOfTag,
    fetchDetailComic,
    fetchGetComments,
    updateComics,
    searchComic,
} from 'src/ApiCall/comicsAPI'
import { fetchAllTag, fetchDetailTag } from 'src/ApiCall/tagsAPI'
import { fetchFullChapter } from '~/ApiCall/chapters'

import {
    fetchFullUser,
    fetchReadComics,
    getLikedComics,
    getFollowedComics,
    likeStatusComic,
    getQuantityPageLiked,
    getQuantityPageFollowed,
    followStatusComic,
} from 'src/ApiCall/userAPI'

export const actFetchAllComicsRq = (page) => {
    return (dispatch) => {
        return fetchAllComic(page).then((res) => {
            dispatch(actFetchAllComics(res.data))
        })
    }
}
export const actFetchAllComics = (data) => {
    return {
        type: types.FETCH_ALL_COMICS,
        data,
    }
}

export const actFetchAllChapterOfComicRq = (comicId) => {
    return (dispatch) => {
        return fetchAllChapterOfComic(comicId).then((res) => {
            dispatch(actFetchAllChapterOfComic(res.data))
        })
    }
}

export const actFetchAllChapterOfComic = (data) => {
    return {
        type: types.FETCH_ALL_CHAPTERS_OF_COMICS,
        data,
    }
}

export const actFetchDetailComic = (data) => {
    return {
        type: types.FETCH_DETAIL_COMICS,
        data,
    }
}

export const actFetchAllTagRq = () => {
    return (dispatch) => {
        return fetchAllTag().then((res) => {
            dispatch(actfetchAllTag(res.data))
        })
    }
}

export const actfetchAllTag = (data) => {
    return {
        type: types.FETCH_ALL_TAGS,
        data,
    }
}
export const actFetchAllComicOfTagRq = (tagId) => {
    return (dispatch) => {
        return fetchAllComicOfTag(tagId).then((res) => {
            dispatch(actfetchAllComicOfTag(res.data))
        })
    }
}

export const actfetchAllComicOfTag = (data) => {
    return {
        type: types.FETCH_ALL_COMIC_OF_TAG,
        data,
    }
}

export const actFetchDetailTagRq = (tagId) => {
    return (dispatch) => {
        return fetchDetailTag(tagId).then((res) => {
            dispatch(actFetchDetailTag(res.data))
        })
    }
}
export const actFetchDetailTag = (data) => {
    return {
        type: types.FETCH_DETAIL_TAG,
        data,
    }
}

export const actFetchFullChapterRq = (comicId, chapter) => {
    return (dispatch) => {
        return fetchFullChapter(comicId, chapter).then((res) => {
            dispatch(actFetchFullChapter(res.data))
        })
    }
}
export const actFetchFullChapter = (data) => {
    return {
        type: types.FETCH_FULL_CHAPTER,
        data,
    }
}

export const actFetchUpdateComicRq = (comicId, { ...data }) => {
    return () => updateComics(comicId, { ...data })
}

export const actFetchDetailComicRq = (comicId, reading, chap, userId, token) => {
    return async (dispatch) => {
        const res = await fetchDetailComic(comicId)
        await dispatch(actFetchDetailComic(res.data))
        const data = { views: res.data.views + 1 }
        if (reading === true) {
            await dispatch(actFetchUpdateComicRq(comicId, { ...data }))
        }
    }
}

export const actFetchFullUserRq = (token) => {
    return (dispatch) => {
        return fetchFullUser(token).then((res) => {
            dispatch(actFetchFullUser(res.data))
        })
    }
}

export const actFetchFullUser = (data) => {
    return {
        type: types.FETCH_FULL_USER,
        data,
    }
}
export const actFetchReadComicRq = (page, token) => {
    return (dispatch) => {
        fetchReadComics(page, token).then((res) => {
            dispatch(actFetchReadComics(res.data))
        })
    }
}
export const actFetchReadComics = (data) => {
    return {
        type: types.FETCH_READ_COMICS,
        data,
    }
}

export const actGetLikedComicsRq = (page, token) => {
    return async (dispatch) => {
        const res = await getLikedComics(page, token)
        dispatch(actGetLikedComics(res))
    }
}

export const actGetLikedComics = (data) => {
    return {
        type: types.FETCH_LIKED_COMICS,
        data,
    }
}

export const actGetQuantityPageLikedRq = (token) => {
    return async (dispatch) => {
        const res = await getQuantityPageLiked(token)
        dispatch(actGetQuantityPageLiked(res))
    }
}

export const actGetQuantityPageLiked = (data) => {
    return {
        type: types.FETCH_QUANTITY_PAGE_LIKED,
        data,
    }
}
export const actGetFollowedComicsRq = (page, token) => {
    return async (dispatch) => {
        const res = await getFollowedComics(page, token)
        dispatch(actGetFollowedComics(res))
    }
}

export const actGetFollowedComics = (data) => {
    return {
        type: types.FETCH_FOLLOWED_COMICS,
        data,
    }
}

export const actGetQuantityPageFollowedRq = (token) => {
    return async (dispatch) => {
        const res = await getQuantityPageFollowed(token)
        await dispatch(actGetQuantityPageFollowed(res))
    }
}

export const actGetQuantityPageFollowed = (data) => {
    return {
        type: types.FETCH_QUANTITY_PAGE_FOLLOWED,
        data,
    }
}

export const actFetchGetCommentsRq = (comicId, page) => {
    return async (dispatch) => {
        const res = await fetchGetComments(comicId, page)
        await dispatch(actFetchGetComments(res))
    }
}

export const actFetchGetComments = (data) => {
    return {
        type: types.FETCH_GET_COMMENTS,
        data,
    }
}

export const actStatusLikeComicRq = (comicId, token) => {
    return async (dispatch) => {
        const res = await likeStatusComic(comicId, token)
        await dispatch(actStatusLikeComic(res))
    }
}

export const actStatusLikeComic = (data) => {
    return {
        type: types.STATUS_LIKE_COMIC,
        data,
    }
}

export const actStatusFollowComicRq = (comicId, token) => {
    return async (dispatch) => {
        const res = await followStatusComic(comicId, token)
        await dispatch(actStatusFollowComic(res))
    }
}

export const actStatusFollowComic = (data) => {
    return {
        type: types.STATUS_FOLLOW_COMIC,
        data,
    }
}

export const actGetTopViewComicsRq = () => {
    return async (dispatch) => {
        const res = await fetchAllComic(0)
        await dispatch(actGetTopViewComics(res.data))
    }
}
export const actGetTopViewComics = (data) => {
    return {
        type: types.FETCH_GET_TOP_VIEW_COMICS,
        data,
    }
}

export const actFetchSearchComicsRq = (contentSearch) => {
    return async (dispatch) => {
        const res = await searchComic(contentSearch, 0)
        await dispatch(actFetchSearchComics(res.data))
    }
}

export const actFetchSearchComics = (data) => {
    return {
        type: types.FETCH_SEARCH_COMICS,
        data,
    }
}
