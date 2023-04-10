import * as types from '../constant/ActionTypes'
const initialState = false

const statusLiked = (state = initialState, action) => {
    switch (action.type) {
        case types.STATUS_LIKE_COMIC:
            console.log(action)
            state = action.data
            return state
        default:
            return state
    }
}

export default statusLiked
