import { TEMPLATE_CONST } from '../constants/template.const'

const initialState = {
    loading: false,
    templates: [],
    error: null,
    versions: [] 
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case TEMPLATE_CONST.GET_TEMPLATE_LOADING:
            return {
                ...state,
                loading:true
            }
        case TEMPLATE_CONST.GET_TEMPLATE_SUCCESS:
            return {
                ...state,
                loading: false,
                templates: action.payload
            }

        case TEMPLATE_CONST.GET_TEMPLATE_FAILURE:
            return {
                ...state,
                loading: false,
                templates: [],
                error: action.payload
            }

        case 'update_version':
            return {
                ...state,
                versions: state.templates.find(
                    template => template.name === action.payload
                ).versions
            }
        default:
            return state
    }
}

export default reducer