import React, { useEffect, useState } from "react";
import { connect } from 'react-redux'
import { actionCreators } from "./store/index";
import { CircleWrapper } from "./style";
import Header from "@/components/Header";
import List from "../List";
import Footer from '@/components/Footer'
import { useNavigate } from "react-router-dom";
import{ PullToRefresh } from 'antd-mobile'


 function CollegeCircle(props) {
  const { 
      focusData,
      schoolData,
      queData,
      // DianzanId,
      // DianzanState 
  } = props
  const { 
      getCommentsDataDispatch,
      getQueDataDispatch,
      getChangeZanDispatch,
      getAnswerCountAgreeDispatch,
      getAnswerCountOpposeDispatch
  } = props
  const navigate= useNavigate()
  const [tab,setTab] =useState('focus')
  const [Ltab,setLtab] =useState('hot')
  const changeTab =(t)=>{
    setTab(t)
  }
  const changeLtab=(t)=>{
    setLtab(t)
  }

useEffect (()=>{
  if(!focusData.length&&!schoolData.length){
 getCommentsDataDispatch()
  getQueDataDispatch()
  }
 
},[])
useEffect(()=>{
  navigate('/collegeCircle')
},[])
  return (
 
      <CircleWrapper>
        <Header/>
        <PullToRefresh  
            onRefresh={()=>{
              getCommentsDataDispatch()
            }}
            headHeight={40}
        >
          <List 
            tab={tab} 
            changeTab={changeTab} 
            focusData={focusData} 
            schoolData={schoolData} 
            queData={queData}  
            Ltab={Ltab} 
            changeLtab={changeLtab}
            // DianzanState={DianzanState}
            // DianzanId={DianzanId}
            getChangeZanDispatch={ getChangeZanDispatch }
            getAnswerCountAgreeDispatch={ getAnswerCountAgreeDispatch }
          getAnswerCountOpposeDispatch={ getAnswerCountOpposeDispatch }
          />
      </PullToRefresh>
        <Footer/>
    </CircleWrapper>

  )
}

const mapStateToProps = (state) =>{
  return{
   focusData:state.college.focus,
   schoolData:state.college.school,
   queData:state.college.que,
  //  DianzanId:state.college.DianzanId,
  //  DianzanState:state.college.DianzanState
  }
}
const mapDispatchToProps = (dispatch) =>{
  return{
    getCommentsDataDispatch(){
      dispatch(actionCreators.getComments())
    },
    getQueDataDispatch(){
      dispatch(actionCreators.getQue())
    },
    // getDianZanStateIDDiapatch(){
    //   dispatch(actionCreators.changeDianzanStateID())
    // },
    getChangeZanDispatch(id){
      dispatch(actionCreators.getZan(id))
    },
    getAnswerCountAgreeDispatch(id){
      dispatch(actionCreators.getAnswerCountAgree(id))
    },
    getAnswerCountOpposeDispatch(id){
      dispatch(actionCreators.getAnswerCountOppose(id))
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(React.memo(CollegeCircle))