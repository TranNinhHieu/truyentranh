import * as types from '../constant/ActionTypes'

const initialState = []

const chapter = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_FULL_CHAPTER:
            state = action.data
            return state
        default:
            return state
    }
}

export default chapter
