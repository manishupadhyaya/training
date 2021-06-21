import {ADD_WISHLIST} from './wishlistTypes'

export const addWishlist = (name, wishes) =>{
    return {
        type: ADD_WISHLIST,
        name: name,
        wishes: wishes
    }
}