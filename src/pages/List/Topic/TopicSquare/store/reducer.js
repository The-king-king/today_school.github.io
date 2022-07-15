import * as actionTypes from './constants'

let defaultState={
    topic:[]
}

export default (state=defaultState,action)=>{
    switch(action.type){
        case actionTypes.CHANGE_TOPIC:
            return{
                ...state,
                topic:action.data
            }
        default:
            return state
    }
}