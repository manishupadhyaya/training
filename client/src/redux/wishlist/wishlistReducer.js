import {ADD_WISHLIST} from './wishlistTypes'
const initialState = {
    name: '',
    wishes: [],
}

const wishlistReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_WISHLIST:
            return {
                ...state,
                name: action.name,
                wishes: action.wishes
            }
        default:
            return state
    }
}

export default wishlistReducer