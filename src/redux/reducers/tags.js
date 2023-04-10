import * as types from '../constant/ActionTypes'
const initialState = []
const tags = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_ALL_TAGS:
            state = action.data
            return state
        default:
            return state
    }
}

export default tags
