import * as types from '../constant/ActionTypes'
const initialState = false

const statusFollowed = (state = initialState, action) => {
    switch (action.type) {
        case types.STATUS_FOLLOW_COMIC:
            console.log(action)
            state = action.data
            return state
        default:
            return state
    }
}

export default statusFollowed
