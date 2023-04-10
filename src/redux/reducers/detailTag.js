import * as types from '../constant/ActionTypes'
const initialState = []

const detailTag = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_DETAIL_TAG:
            state = action.data
            return state
        default:
            return state
    }
}
export default detailTag
