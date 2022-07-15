import * as actionTypes from './constants'

const defaultState={
    focus:[],
    school:[],
    que:[],
    // DianzanId:'',
    // DianzanState:false,
    detailDataById:[],
    inputValue:'发条友善的评论吧...',
    queInputValue:'init',
    submit:false
}
let idCount = 4;
 

export default (state=defaultState,action)=>{
    switch(action.type){
        case actionTypes.VIEW_FOCUS:
            return{
                ...state,
                focus:state.focus.length?state.focus:action.data
            }
        case actionTypes.VIEW_SCHOOL:
            return{
                ...state,
                school:state.school.length?state.school:action.data
            }
        case actionTypes.VIEW_QUE:
            return{
                ...state,
                que:action.data
            }
        case actionTypes.VIEW_INPUT_VALUE:
            return{
                ...state,
                inputValue:state.inputValue
            }
        // case actionTypes.CHANGE_DIANZAN_STATE_ID:
        //     return{
        //         ...state,
        //         DianzanState:state.DianzanState,
        //         DianzanId:state.DianzanId
        //     }
        case actionTypes.CHANGE_DIANZAN:
            return{
                ...state,
                school:state.school.map(item=>{
                    if(!item.DianzanState){
                        if(item.id==action.id){
                            item.Dianzan=item.Dianzan+1
                            item.DianzanState=true;
                          } 
                    }
                    else{
                        if(item.id==action.id){
                          item.Dianzan=item.Dianzan-1
                          item.DianzanState=false
                        }
                     }
                     return item
                    }),
        //    DianzanId:!state.DianzanState?action.id:'',
        //    DianzanState:!state.DianzanState
            }
        case actionTypes.VIEW_DETAILDATA_BYID:
            return{
                ...state,
                detailDataById:state.school.filter(item=>item.id==action.ID)
            }
        case actionTypes.CHANGE_INPUT_VALUE:
            return{
                ...state,
                inputValue:action.value
            }
        case actionTypes.ADD_COMMENTS:
            return{
                ...state,
               detailDataById:state.detailDataById.map(item=>{
                   item.Comment.push(state.inputValue)
                   return item
               }),
               inputValue:'发条友善的评论吧...' 

            }
        case actionTypes.CHANGE_ANSWER_COUNT_AGREE:
            return{
                ...state,
              que:state.que.map(item=>{
                if(item.id==action.ID){
                  if(!item.answerState){
                        if(!item.agree){
                            item.agreeCount = item.agreeCount + 1
                        }   
                   }
                else{
                       item.agreeCount = item.agreeCount - 1
                    } 
                item.answerState = !item.answerState
                item.agree = !item.agree
                  }   
                  return item
              }
              ),
            }
        case actionTypes.CHANGE_ANSWER_COUNT_OPPOSE:
            return{
                ...state,
                que:state.que.map(item=>{
                  if(item.id==action.ID){
                     item.answerState=!item.answerState
                     item.oppose=!item.oppose
                  }
                  return item
                })
            }
        case actionTypes.CHANGE_QUE_INPUT_VALUE:
            let fontCount = action.value.length;
            console.log(fontCount,'count')
            return{
                ...state,
                queInputValue:action.value,
                submit: fontCount >= 4 ? true : false
            }
        case actionTypes.Add_QUE:
            state.que.push({
                            "id":idCount++,
                            "topic":state.queInputValue,
                            "answer":[],
                            "answerState":false,
                            "agreeCount":0,
                            "agree":false,
                            "oppose":false
                        });
         
            return{
                ...state,
                que:state.que,
                queInputValue:'init',
            }
        case actionTypes.ADD_FOCUS:
            let item_ = 
                    state.school.map(item =>{
                        if(item.id==action.ID){
                            item.Focus='yes'
                        }
                        return item 
                     })
            return{
                ...state,
                school:item_,
                focus:item_.filter(item => item.Focus == 'yes')
            }
        default:
            return state       
    }
}