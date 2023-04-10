import * as types from '../constant/ActionTypes'

const initialState = []
const listChapter = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_ALL_CHAPTERS_OF_COMICS:
            state = action.data
            return state
        default:
            return state
    }
}

export default listChapter
