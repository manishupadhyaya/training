import { ADD_TO_DB_FAILURE, ADD_TO_DB_REQUEST, ADD_TO_DB_SUCCESS } from "./dbTypes"

const initialState = {
    loading: false,
    successMessage: '',
    errorMessage: ''
}

const dbReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_TO_DB_REQUEST:
            return{
                ...state,
                loading: true
            }
        case UPDATE_TO_DB_REQUEST:
            return {
                ...state,
                loading: true
            }
        case ADD_TO_DB_SUCCESS: {
            return{
                loading: false,
                successMessage: action.payload,
                error: ''
            }
        }
        case UPDATE_TO_DB_SUCCESS: {
            return{
                loading: false,
                successMessage: action.payload,
                error: ''
            }
        }
        case ADD_TO_DB_FAILURE:
            return{
                loading: false,
                successMessage: '',
                error: action.payload
            }
        case UPDATE_TO_DB_SUCCESS: {
            return{
                loading: false,
                successMessage: action.payload,
                error: ''
            }
        }
        case ADD_TO_DB_FAILURE:
            return{
                loading: false,
                successMessage: '',
                error: action.payload
            }
        default:
            return state
    }
}

export default dbReducer