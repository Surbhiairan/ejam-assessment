import { DEPLOYMENT_CONST } from '../constants/deployment.const'

const initialState = {
    loading: false,
    deployments: [],
    error: null,
    newDeployment: false,
    deleteDeployment: false
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case DEPLOYMENT_CONST.GET_DEPLOYMENT_LOADING:
            return {
                ...state,
                loading:true
            }
        case DEPLOYMENT_CONST.GET_DEPLOYMENT_SUCCESS:
            return {
                ...state,
                loading: false,
                deployments: action.payload
            }

        case DEPLOYMENT_CONST.GET_DEPLOYMENT_FAILURE:
            return {
                ...state,
                loading: false,
                deployments: [],
                error: action.payload
            }

        case DEPLOYMENT_CONST.ADD_DEPLOYMENT_LOADING: 
            return {
                ...state,
                loading: true
            }

        case DEPLOYMENT_CONST.ADD_DEPLOYMENT_SUCCESS:
            return {
                ...state,
                loading: false,
                newDeployment: true
            }

        case DEPLOYMENT_CONST.ADD_DEPLOYMENT_FAILURE:
            return {
                ...state,
                loading: false,
                newDeployment: false,
                error: action.payload
            }

        case DEPLOYMENT_CONST.DELETE_DEPLOYMENT_LOADING:
            return {
                ...state,
                loading: true
            }

        case DEPLOYMENT_CONST.DELETE_DEPLOYMENT_SUCCESS:
            return {
                ...state,
                loading: false,
                deleteDeployment: true
            }

        case DEPLOYMENT_CONST.DELETE_DEPLOYMENT_FAILURE:
            return {
                ...state,
                loading: false,
                deleteDeployment: false,
                error: action.payload
            }

        case 'reset_new_deployment':
            return {
                ...state,
                newDeployment: false
            }

        case 'reset_delete_deployment': 
            return {
                ...state,
                deleteDeployment: false
            }
    

        default:
            return state
    }
}

export default reducer