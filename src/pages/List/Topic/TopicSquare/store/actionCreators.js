import * as actionTypes from './constants'
import { getContextTopic } from '@/api/request'

export const changeTopic =(data)=>({
    type:actionTypes.CHANGE_TOPIC,
    data
})

export const getTopic = () =>{
    return (dispatch) =>{
        getContextTopic().then(data=>{
            dispatch(changeTopic(data.data))
        })
    }
}