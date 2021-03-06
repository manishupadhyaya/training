import { FETCH_FAILURE, FETCH_REQUEST, FETCH_SUCCESS } from "./showallTypes"

const initialState = {
    loading: false,
    data: [],
    error: ''
}

const showallReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_REQUEST:
            return{
                ...state,
                loading: true
            }
        case FETCH_SUCCESS: {
            return{
                loading: false,
                data: action.payload,
                error: ''
            }
        }
        case FETCH_FAILURE:
            return{
                loading: false,
                data:[],
                error: action.payload
            }
        default:
            return state
    }
}

export default showallReducer