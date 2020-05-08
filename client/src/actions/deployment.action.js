import axios from 'axios'
import { DEPLOYMENT_CONST } from '../constants/deployment.const'
import { URI } from '../config'

export const getAllDeployment = () => {
    return(dispatch) => {
        dispatch({
            type: DEPLOYMENT_CONST.GET_DEPLOYMENT_LOADING
        })
        axios.get(URI.GET_DEPLOYEMNT)
        .then(response => {
            if(response.status === 200 ) {
                dispatch({
                    type: DEPLOYMENT_CONST.GET_DEPLOYMENT_SUCCESS,
                    payload: response.data
                })
            } else {
                dispatch({
                    type: DEPLOYMENT_CONST.GET_DEPLOYMENT_FAILURE,
                    payload: response
                })
            }
            
        })
        .catch(err => {
            dispatch({
                type: DEPLOYMENT_CONST.GET_DEPLOYMENT_FAILURE,
                payload: err
            })
        })
    }
}

export const addDeployment = (payload) => {
    return(dispatch) => {
        dispatch({
            type: DEPLOYMENT_CONST.ADD_DEPLOYMENT_LOADING
        })
        axios.post(URI.GET_DEPLOYEMNT, payload)
        .then(response => {
            if(response.status === 200 ) {
                dispatch({
                    type: DEPLOYMENT_CONST.ADD_DEPLOYMENT_SUCCESS,
                    payload: response.data
                })
                dispatch(getAllDeployment())
            } else {
                dispatch({
                    type: DEPLOYMENT_CONST.ADD_DEPLOYMENT_FAILURE,
                    payload: response
                })
            }
            
        })
        .catch(err => {
            dispatch({
                type: DEPLOYMENT_CONST.ADD_DEPLOYMENT_FAILURE,
                payload: err
            })
        })
    }
}

export const deleteDeployment = (id) => {
    return(dispatch) => {
        dispatch({
            type: DEPLOYMENT_CONST.DELETE_DEPLOYMENT_LOADING
        })
        axios.delete(URI.GET_DEPLOYEMNT + '/' + id)
        .then(response => {
            if(response.status === 200 ) {
                dispatch({
                    type: DEPLOYMENT_CONST.DELETE_DEPLOYMENT_SUCCESS,
                    payload: response.data
                })
                dispatch(getAllDeployment())
            } else {
                dispatch({
                    type: DEPLOYMENT_CONST.DELETE_DEPLOYMENT_FAILURE,
                    payload: response
                })
            }
            
        })
        .catch(err => {
            dispatch({
                type: DEPLOYMENT_CONST.DELETE_DEPLOYMENT_FAILURE,
                payload: err
            })
        })
    }
}

export const resetNewDeployment = () => {
    return(dispatch) => {
        dispatch({
            type: 'reset_new_deployment',
        })
    }
}

export const resetDeleteDeployment = () => {
    return(dispatch) => {
        dispatch({
            type: 'reset_delete_deployment',
        })
    }
}