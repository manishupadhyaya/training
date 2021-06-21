import axios from 'axios'
import{
    FETCH_REQUEST,
    FETCH_SUCCESS,
    FETCH_FAILURE
} from './showallTypes'


const fetchRequest = () =>{
    return {
        type: FETCH_REQUEST
    }
}

const fetchSuccess = (data) =>{
    return {
        type: FETCH_SUCCESS,
        payload: data
    }
}

const fetchFailure = (error) =>{
    return {
        type: FETCH_FAILURE,
        payload: error
    }
}

export const fetchDatas = () => {
    return (dispatch) => {
        dispatch(fetchRequest())
        axios.get('/wishes')
        .then(res=>{
            const data = res.data
            dispatch(fetchSuccess(data))
        })
        .catch(error=>{
            console.log("Error: ", error.message)
            dispatch(fetchFailure(error.message))
        })
    }
}