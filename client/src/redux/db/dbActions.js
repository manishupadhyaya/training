import {
    ADD_TO_DB_REQUEST, ADD_TO_DB_SUCCESS, ADD_TO_DB_FAILURE, 
    UPDATE_TO_DB_REQUEST, UPDATE_TO_DB_SUCCESS, UPDATE_TO_DB_FAILURE
} from './dbTypes'
import axios from 'axios'
const addToDbRequest = (name, wishes) =>{
    return {
        type: ADD_TO_DB_REQUEST,
        payload:{
            name, wishes
        }
    }
}

const addToDbSuccess = (successMessage)=>{
    return{
        type: ADD_TO_DB_SUCCESS,
        payload: successMessage
    }
}
const addToDbFailure = (errorMessage)=>{
    return{
        type: ADD_TO_DB_FAILURE,
        payload: errorMessage
    }
}

const updateToDbRequest = (name, wishes) =>{
    return {
        type: UPDATE_TO_DB_REQUEST,
        payload:{
            name, wishes
        }
    }
}

const updateToDbSuccess = (successMessage)=>{
    return{
        type: UPDATE_TO_DB_SUCCESS,
        payload: successMessage
    }
}
const updateToDbFailure = (errorMessage)=>{
    return{
        type: UPDATE_TO_DB_FAILURE,
        payload: errorMessage
    }
}

export const updateToDb = (name, wishes) => {
    const payload = {
        name, wishes
    }
    return (dispatch) => {
        dispatch(updateToDbRequest(payload))
        return axios.put('/update', payload)
        .then(res=>{
            console.log("Success", res)
            dispatch(updateToDbSuccess("Successful"))
        })
        .catch(error=>{
            console.log("Error: ", error.message)
            dispatch(updateToDbFailure("Error Found"))
        })
    }
}

export const addToDb = (name, wishes) => {
    const payload = {
        name, wishes
    }
    return (dispatch) => {
        dispatch(addToDbRequest(payload))
        return axios.post('/wishes', payload)
        .then(res=>{
            console.log("Sucess", res)
            dispatch(addToDbSuccess("Successful"))
        })
        .catch(error=>{
            console.log("Error: ", error.message)
            dispatch(addToDbFailure("Error Found"))
        })
    }
}