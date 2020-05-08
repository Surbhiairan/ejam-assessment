import axios from 'axios'
import { TEMPLATE_CONST } from '../constants/template.const'
import { URI } from '../config'

export const getAllTemplates = () => {
    return(dispatch) => {
        dispatch({
            type: TEMPLATE_CONST.GET_TEMPLATE_LOADING
        })
        axios.get(URI.GET_TEMPLATE)
        .then(response => {
            if(response.status === 200) {
                dispatch({
                    type: TEMPLATE_CONST.GET_TEMPLATE_SUCCESS,
                    payload: response.data
                })
            } else {
                dispatch({
                    type: TEMPLATE_CONST.GET_TEMPLATE_FAILURE,
                    payload: response
                })
            }
                
        })
        .catch(err => {
            dispatch({
                type: TEMPLATE_CONST.GET_TEMPLATE_FAILURE,
                payload: err
            })
        })
    }
}

export const getVersionsOfTemplate = (templateName) => {
    return (dispatch) => {
        dispatch({
            type: 'update_version',
            payload: templateName
        })
    }
}