import * as types from '../constant/ActionTypes'

const initialState = []
const detailComic = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_DETAIL_COMICS:
            state = action.data
            return state
        default:
            return state
    }
}

export default detailComic
