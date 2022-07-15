import React,{useState,useEffect}from 'react'
import { actionCreators } from "@/pages/CollegeCircle/store/index";
import { connect } from 'react-redux'
import CommentDetails from './comment-detail'
import { useNavigate,useParams } from 'react-router-dom'


function Detials(props) {

  const navigate = useNavigate()
  //要解构
  const { id } =useParams()
  const ID = parseInt(id)
  const { 
    detailData, 
    inputValue 
  } = props
  const { 
    getDetailDataDispatch,
    getInputValueDispatch,
    getAddCommentDispatch,
    getChangeZanDispatch,
    getAddFocusDispatch
  } = props
  useEffect(() =>{
    console.log(ID, '/////////////////////////////////////')
      getDetailDataDispatch(ID)
  },[ID])
  console.log(typeof ID,detailData,'111111111111')
  return (
    <div>
      {
        detailData.map((item,index)=>
          (<CommentDetails 
              source={item} 
              key={index} 
              navigate={navigate}
              inputValue={inputValue}
              getChangeZanDispatch={getChangeZanDispatch}
              getInputValueDispatch={getInputValueDispatch}
              getAddCommentDispatch={getAddCommentDispatch}
              getAddFocusDispatch={getAddFocusDispatch}
            />))
      }
    </div>
  )
}
const mapStateToProps = (state)=>{
  return{
    detailData:state.college.detailDataById,
    inputValue:state.college.inputValue,
  }
}
const mapDispatchToProps = (dispatch) =>{
  return{
    getChangeZanDispatch(ID){
      dispatch(actionCreators.getZan(ID))
    },
    getDetailDataDispatch(ID){
      dispatch(actionCreators.getDetailById(ID))
    },
    getInputValueDispatch(value){
      dispatch(actionCreators.getInputValue(value))
    },
    getAddCommentDispatch(ID){
      dispatch(actionCreators.changeComments(ID))
    },
   getAddFocusDispatch(ID){
      dispatch(actionCreators.getAddFocus(ID))
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Detials)