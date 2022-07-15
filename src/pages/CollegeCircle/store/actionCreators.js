//接口请求
import {
        getContextData,
        getContextQue,
      } from '@/api/request'
import * as actionTypes from './constants'

 const changeFocus = (data) =>({
    type:actionTypes.VIEW_FOCUS,
    data
})
 const changeSchool = (data) =>({
    type:actionTypes.VIEW_SCHOOL,
    data
})
 const changeQue = (data) =>({
    type:actionTypes.VIEW_QUE,
    data
})
 const changeZan = (id) =>({
    type:actionTypes.CHANGE_DIANZAN,
    id

})

//  export const changeDianzanStateID =() =>({
//     type:actionTypes.CHANGE_DIANZAN_STATE_ID
// })
 const changeInputValue =(value)=>({
    type:actionTypes.CHANGE_INPUT_VALUE,
    value
})
 const changeDetailById =(ID)=>({
  type:actionTypes.VIEW_DETAILDATA_BYID,
  ID
})
export const changeComments = (ID) => ({
    type:actionTypes.ADD_COMMENTS,
    ID
})
export const changeAnswerCountAgree = (ID) =>({
    type:actionTypes.CHANGE_ANSWER_COUNT_AGREE,
    ID
})
export const changeAnswerCountOppose = (ID) =>({
    type:actionTypes.CHANGE_ANSWER_COUNT_OPPOSE,
    ID
})
export const changeQueInputvalue= (value) =>({
    type:actionTypes.CHANGE_QUE_INPUT_VALUE,
    value
})
export const changeAddQue = () =>({
    type:actionTypes.Add_QUE
})
export const changeAddFocus = (ID) =>({
    type:actionTypes.ADD_FOCUS,
    ID
})

export const getComments = () =>{
    return (dispatch) => {
        getContextData().then(data => {
            let newdata=data.data.filter(item=>item.Focus=='yes')
            dispatch(changeFocus(newdata))
            dispatch(changeSchool(data.data))
        })
        
    }
}
export const getQue = () =>{
    return (dispatch) => {
        getContextQue().then(data=>{
            dispatch(changeQue(data.data))
        })
    }
}
export const getZan = (id) =>{
    return(dispatch) =>{
         dispatch(changeZan(id))
     }
}
export const getDetailById =(ID)=>{
    return(dispatch) =>{
        // console.log(ID,'------------')
        dispatch(changeDetailById(ID))
    }
}
export const getInputValue = (value) =>{
    return(dispatch) =>{
        dispatch(changeInputValue(value))
    }
}

export const getAnswerCountAgree = (ID) =>{
    return(dispatch) =>{
        console.log(ID,'----------------')
        dispatch(changeAnswerCountAgree(ID))
    }
}
export const getAnswerCountOppose = (ID) =>{
    return(dispatch) =>{
        dispatch(changeAnswerCountOppose(ID))
    }
}
export const getAddFocus = (ID) =>{
    return(dispatch) =>{
        dispatch(changeAddFocus(ID))
    }
}

