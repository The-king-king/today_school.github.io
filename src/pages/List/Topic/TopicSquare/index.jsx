import React, { useEffect,useState,useCallback } from 'react'
import {  connect } from 'react-redux'
import { actionCreators } from './store'
import { CSSTransition } from 'react-transition-group'
import Detail from './Detail'
import { useNavigate } from 'react-router-dom'
import { Container } from './style'

 function TopicSquare(props) {
     const { topicData } = props
    const { getTopicDataDispatch } = props
    const [show,setShow]=useState(false);
    const navigate =useNavigate()
    const searchBack = useCallback(()=>{
        setShow(false)
    })
     useEffect(()=>{
         setShow(true)
        getTopicDataDispatch()
     },[])
  return (
    <CSSTransition
        in={show}
        timeout={300}
        appear={true}
        classNames="fly"
        unmountOnExit
        onExit={()=>{navigate(-1)}}
    >
        <Container> 
            <Detail topicData={topicData} back={searchBack} />
        </Container>
    </CSSTransition>
  )
}
const mapStateToProps =(state)=>{
    return{
        topicData:state.topicSquare.topic
    }

}
const mapDispatchToProps =(dispatch) =>{
    return{
        getTopicDataDispatch(){
            dispatch(actionCreators.getTopic())
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(React.memo(TopicSquare))