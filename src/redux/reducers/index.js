import { combineReducers } from 'redux'
import comics from './comics'
import listChapter from './listChapter'
import detailComic from './detailComic'
import tags from './tags'
import detailTag from './detailTag'
import chapter from './chapter'
import user from './user'
import history from './history'
import statusLiked from './statusLiked'
import statusFollowed from './statusFollowed'

import likedOrFollowedComics from './likedOrFollowedComics'
import pageQuatity from './pageQuatity'
import comments from './comments'
import topViewComics from './topViewComics'
const rootReducer = combineReducers({
    user,
    comics,
    listChapter,
    detailComic,
    tags,
    detailTag,
    chapter,
    history,
    statusLiked,
    likedOrFollowedComics,
    pageQuatity,
    comments,
    statusFollowed,
    topViewComics,
})

export default rootReducer
