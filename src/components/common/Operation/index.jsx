import React, { useEffect, useState } from 'react'
import './operation.css'

export default function Operation(props) {
  const {visiable:show,text,complain_}=props;
  const {onModalClose,setText,setState,setLoading,setComplain_}=props
  const [visiable,setVisiable]=useState(false)
  const [operation,setOperation]=useState('收藏')
  const [complain,setComplain]=useState(false)
  //父子组件
  useEffect(()=>{
    setVisiable(show)
  },[show])
//点击遮罩层消失
  const maskClick = () =>{
 
   setVisiable(false)
   onModalClose&&onModalClose()
  }
//点击收藏
  const collectionOperate = (str) =>{
    setVisiable(false)
    onModalClose&&onModalClose()
    if(operation=='取消收藏'){
      setText('取消收藏成功')
      setOperation('收藏')
    }
    else
    {
      setText(str);
      setOperation('取消收藏')
    }
    setLoading(true)
    setState()
  }
//点击复制
  const copyOperate = (str) =>{
    setVisiable(false)
    onModalClose&&onModalClose()
    setText(str);
    setLoading(true)
    setState()
  }
  //点击举报操作
  const complainOperation = () =>{
    setComplain(true);
    setVisiable(false);
    onModalClose&&onModalClose();
  }
  //第二模态框的操作 点击取消和点击遮罩层消失操作函数一样
  const maskComplainClick = () =>{
    setComplain_(false)
    setComplain(false)
  }
///第二模态框的操作点击其他举报原因操作函数
const complainOpeartions = () =>{
  setComplain_(false)
  setComplain(false)
  setText('举报成功')
  setLoading(true)
  setState()
}
  const firstModal = () =>{
    return(
      visiable&&<div className='modalWrapper'>
      <div className='modal' >
        {/* {Lmodal('收藏成功')}
        {setState()} */}
        <div className='modal_'>
          <p className='modalTitle'>动态操作</p>
          <p className='operation' onClick={collectionOperate.bind(null,'收藏成功')}>{operation}</p>
          <p className='operation' onClick={copyOperate.bind(null,'复制成功')}>复制动态内容</p>
          <p className='operation' onClick={()=>complainOperation()}>举报</p>
        </div>
        <p className='cancel_'  onClick={maskClick}>取消</p>
      </div>
      <div className="mask" onClick={maskClick}></div>
  </div>
    )
  }
  const secondModal = () =>{
    return(
     (complain_||complain)&&<div className="second-modal">
         <div className="modal">
           <div className='modal_'>
              <p className='modalTitle'>举报原因</p>
              <p className="operation" onClick={complainOpeartions}>色情低俗</p>
              <p className="operation"  onClick={complainOpeartions}>政治敏感</p>
              <p className="operation"  onClick={complainOpeartions}>违法</p>
              <p className="operation"  onClick={complainOpeartions}>广告</p>
              <p className="operation"  onClick={complainOpeartions}>病毒木马</p>
              <p className="operation"  onClick={complainOpeartions}>其他</p>
           </div>
           <p className="cancel_" onClick={maskComplainClick}>取消</p>
         </div>
         <div className="mask" onClick={maskComplainClick}></div>
      </div>
    )
  }
  return (
    <>
     {firstModal()}
     {secondModal()}
    </>
  ) 
}
