import * as types from '../constant/ActionTypes'

const initialState = []

const history = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_READ_COMICS:
            state = action.data.comics
            return state
        default:
            return state
    }
}

export default history
