import * as types from '../constant/ActionTypes'
const initialState = []

const likedOrFollowedComics = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_LIKED_COMICS:
            state = action.data
            return state
        case types.FETCH_FOLLOWED_COMICS:
            state = action.data
            return state
        default:
            return state
    }
}
export default likedOrFollowedComics
