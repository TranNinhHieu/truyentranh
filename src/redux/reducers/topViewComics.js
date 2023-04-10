import * as types from '../constant/ActionTypes'
const initialState = []

const topViewComics = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_GET_TOP_VIEW_COMICS:
            const topViewData = action.data.comics
            topViewData?.sort((a, b) => (a.views > b.views ? -1 : 1))
            const cloneState = []
            for (let i = 0; i < 4; i++) {
                cloneState.push(topViewData[i])
            }
            state = cloneState
            return state
        default:
            return state
    }
}

export default topViewComics
