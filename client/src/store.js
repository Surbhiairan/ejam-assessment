import { combineReducers } from 'redux';
import templateReducer from './reducers/template.reducer'
import deploymentReducer from './reducers/deployment.reducer'

const rootReducer = combineReducers({
    template: templateReducer,
    deployment: deploymentReducer
})

export default rootReducer