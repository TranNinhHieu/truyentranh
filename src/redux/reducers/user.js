import * as types from '../constant/ActionTypes'

const initialState = {
    userId: '',
    email: '',
    isAdmin: false,
    accessToken: '',
}
const user = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_FULL_USER:
            state = action.data
            return state
        default:
            return state
    }
}

export default user
