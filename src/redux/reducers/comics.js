import * as types from '../constant/ActionTypes'
const initialState = []
const comics = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_ALL_COMICS:
            state = action.data.comics
            return state
        case types.FETCH_ALL_COMIC_OF_TAG:
            state = action.data
            return state
        case types.FETCH_SEARCH_COMICS:
            state = action.data.comics
            console.log(state)
            return state
        default:
            return state
    }
}

export default comics
