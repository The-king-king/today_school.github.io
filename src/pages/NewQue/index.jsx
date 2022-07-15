import React from 'react'
import _ from 'lodash'
import { NavBar, TextArea, Toast } from 'antd-mobile'
import { NewQuewrapper } from './style'
import { RightWrapper } from '../NewListItem/style'
import { useNavigate } from 'react-router-dom'
import { connect } from 'react-redux'
import { actionCreators } from '../CollegeCircle/store'
import classnames from 'classnames'


 function NewQue(props) {
 
  const navigate = useNavigate()
  const { submit,queInputValue } =props
  const { changeQueInputValueDispatch,getAddQueDispatch } =props
  const right = (
    <RightWrapper >
        <button 
          className={classnames('f-color',{active:submit})} 
          onClick={()=>{
            getAddQueDispatch()
            Toast.show('发布成功！')
          
          }}
        >发布</button>
    </RightWrapper>
)
console.log(queInputValue,'------------')
  return (
    <NewQuewrapper>
      <NavBar
        back=''
        onBack={()=>navigate(-1)}
        right={right}
        className='nav'
      >
        提问
      </NavBar>
    <div className="que-context">
      <p>问题内容</p>
      <TextArea
        placeholder='请写下你的问题~,限4~45字'
        showCount
        maxLength={45}
        onChange={(value)=>changeQueInputValueDispatch(value)}
      />
    </div>
    <div className="que-describe">
      <p>问题描述</p>
      <TextArea
        placeholder='选填~对问题的简短描述,可更快获得回答'
        showCount
        row={9}
        maxLength={200}
      />
    </div>
    <div className='que-way'>
      <span>提问方式</span>
      <span>免费提问 &gt;</span>
    </div>
    <div className="que-circle">
        <span>圈子</span>
        <span>&gt;</span>
    </div>
    <div className="que-tag">
        <span>标签</span>
        <span>&gt;</span>
    </div>
        
    </NewQuewrapper>
  )
}
const mapStateToProps = (state) =>{
  return{
    queInputValue:state.college.queInputValue,
    submit:state.college.submit
  }
}
const mapDispatchToProps = (dispatch) =>{
  return{
    changeQueInputValueDispatch(value){
      dispatch(actionCreators.changeQueInputvalue(value))
    },
    getAddQueDispatch(){
      dispatch(actionCreators.changeAddQue())
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(NewQue)