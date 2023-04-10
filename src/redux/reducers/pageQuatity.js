import * as types from '../constant/ActionTypes'

const initialState = 0

const pageQuatity = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_QUANTITY_PAGE_LIKED:
            state = action.data
            return state
        case types.FETCH_QUANTITY_PAGE_FOLLOWED:
            state = action.data
            return state
        case types.FETCH_ALL_COMICS:
            state = action.data.quantityComic
            return state
        case types.FETCH_READ_COMICS:
            state = action.data.quatitypage
            return state
        default:
            return state
    }
}

export default pageQuatity
