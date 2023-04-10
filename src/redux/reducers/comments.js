import * as types from '../constant/ActionTypes'
const initialState = []

const comments = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_GET_COMMENTS:
            state = action.data
            return state
        default:
            return state
    }
}

export default comments
