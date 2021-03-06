import React, { useState,useRef,useEffect } from 'react'
import {  NavBar,Space, TextArea, Toast,Popup} from 'antd-mobile'
import { MoreOutline } from 'antd-mobile-icons'
import _ from 'lodash'
import moment from "moment"
import zhcn from '@/api/zhcn'
moment.locale('zh-cn',zhcn)

import classnames from "classnames"
import {Detail,Wrapper,CommentList,ItemWrapper,
        HeaWrapper, BodyWrapper,CommentBar,
      Content,Mask,Lists,ThreeDots, Photo} from './style'
// import {LittleModal} from '@/pages/ListItem/style'  
// import Share from '../../../../components/common/Share'
import Lmodal from '@/components/common/Lmodal'
import Share from '@/components/common/Share'
import Operation from '@/components/common/Operation'
import messages from '@/assets/images/messages.jpg'
import friends from '@/assets/images/friends.png'
import friendcircle from '@/assets/images/friendcircle.jpg'
import qq from '@/assets/images/qq.png'
import qqspace from '@/assets/images/qqspace.png'
import collect from '@/assets/images/collect.png'
import copy from '@/assets/images/copy.png'
import jubao from '@/assets/images/jubao.png'


export default function CommentDetails(props) {
  const {
    source,
    navigate,
    inputValue,
    getChangeZanDispatch,
    getInputValueDispatch,
    getAddCommentDispatch,
    getAddFocusDispatch
  } = props
  const {id,HeaPic,Nm,Desc,Pic,Sch,Focus,Dianzan,DianzanState,Comment}=source
  const commentRef = useRef()
  const [focus_,setFocus_]=useState(Focus)
  const [text1,setText1]=useState(false)
  const [comments,setComments]=useState(Comment)
  const [complain_,setComplain_]=useState(false)
  const [visible1,setVisible1]=useState(false)
  const [visible2,setVisible2]=useState(false)
  const [show,setShow]=useState(false)
  const [loading,setLoading]=useState(false)
  const [text,setText]=useState('');
  const [opreation,setOpreation]=useState('')

  useEffect(()=>{
    commentRef.current.focus();
  },[])
  useEffect(() => {
    setComments(Comment)
    setFocus_(Focus)
  }, [id])
  const time=()=>{
    return  moment(new Date()).fromNow();
  }
  const allComments ={
         pic:'https://img0.baidu.com/it/u=1246206694,3592233997&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
         nm:'???????????????',
         comments
  }
  const renderList=()=>{
    return comments.map((item,index) =>{
      return(
        <Lists key={index}>
          <img src={allComments.pic} alt="" />  
          <span className='list-heaName'>{allComments.nm}</span>
          <span className='list-dianzan'><i className='fa fa-thumbs-o-up'></i></span>
          <p className='list-comment'>{item}</p>
          <span className='list-reply'>{time()}</span><span style={{marginLeft:"0.5rem"}}>??????</span>
        </Lists>
      )
    })
  }
  const right= (
      <div style={{fontSize:"16px"}}>
        <Space>
        <MoreOutline onClick={()=>setVisible1(true)}/>
          <Popup
            visible={visible1}
            onMaskClick={()=>setVisible1(false)}
          >
            <ThreeDots>
                <div className="shares">
                    <div className="share">
                        <img src={messages}/>
                        <span>??????</span>
                      </div>
                      <div className="share">
                        <img src={friendcircle}/>
                        <span>???????????????</span>
                      </div>
                      <div className="share">
                        <img src={friends}/>
                        <span>????????????</span>
                      </div>
                      <div className="share">
                        <img src={qq}/>
                        <span>&nbsp;QQ</span>
                      </div>
                      <div className="share">
                        <img src={qqspace}/>
                        <span>QQ??????</span>
                      </div>
                  </div>
                  <div className="shares" >
                    <div className="share">
                        <img src={collect}/>
                        <span 
                            onClick={()=>collect2()}
                        >{opreation?opreation:'??????'}</span>
                      </div>
                      <div className="share">
                        <img src={copy}/>
                        <span 
                        onClick={()=>{
                          setVisible1(false)
                          setText('????????????')
                          setLoading(true)
                          setState()
                        }}>??????</span>
                      </div>
                      <div className="share">
                        <img src={jubao}/>
                        <span onClick={()=>{
                            setComplain_(true)
                            setVisible1(false)}}>??????</span>
                      </div>
                    </div> 
                    <p className='cancel' onClick={()=>setVisible1(false)}>??????</p>
                 </ThreeDots>
          </Popup>
        </Space>
      </div>
    )
  const renderDeatail = () =>{
             return (<ItemWrapper key={id}>
                        <HeaWrapper>
                            <img src={HeaPic} alt="" />
                            <div className='headTitle'>
                              <div>
                                  <p className='title'>{Nm}</p>
                                  <p className='time'>3?????????<span>{Sch}</span></p>
                              </div>
                              <div 
                                  className={classnames('focus',{'on-focus':focus_=='yes'})}
                                  onClick={()=>{
                                    setFocus_('yes')
                                    getAddFocusDispatch(id)
                                  }}
                                  >{focus_=='yes'?"?????????":"??????"}<i className={classnames('fa',{"fa-plus":focus_!='yes'})}></i></div> 
                           </div>
                        </HeaWrapper>
                        <BodyWrapper>
                            <p>{Desc}</p>
                            {
                                Pic.map((item,index)=>
                                <img src={item} key={index}/>) 
                            }
                        </BodyWrapper>
                     </ItemWrapper>)
   }
  const modal=()=>{
  return(
    <Popup
    visible={text1}
    onMaskClick={()=>setText1(false)}
    >
          <Content>
            <TextArea
                placeholder={inputValue}
                className='input'
                rows="4"
                off='true'
                autoFocus
                onChange={
                  _.debounce(getInputValueDispatch,500)}
            />
            <div className='operation'>
                    <div>
                        <i className='fa fa-smile-o'></i>
                        <i className='fa fa-picture-o'
                          onClick={()=>setVisible2(true)}></i>
                  </div>
                  <span onClick={()=>{
                    setText1(false)
                  getAddCommentDispatch(id)
                    Toast.show({
                      icon:'success',
                      content: '????????????'
                    })
                    }}>??????</span>
            </div>
          </Content>
          <Mask onClick={()=>setText1(false)}/>
    </Popup>
  )
  }
  const changeShare =()=>{
    setShow(true)
  }

  const dianZan = () =>{
    if(DianzanState){
      setText('??????????????????')
    }
    else{
    setText('????????????')
    }
    setLoading(true)
    setState()
  }
  const onCancel=()=>{
      setShow(false)
  }
  // const Lmodal=()=>{
  // return(
  // loading&&<LittleModal>
  //     <i className='fa fa-check-circle-o'></i>
  //       <span>{text}</span>
  //   </LittleModal>
  // )
  // }
  const setState = () =>{
  setTimeout(()=>{
    setLoading(false)
  },3000)
  }
  const collect2 = () =>{
      setVisible1(false)
      if(!opreation){
          setText('????????????')
          setOpreation('????????????')
      }
      else{
        setText('??????????????????')
        setOpreation('??????')
      }
      setLoading(true)
      setState()
    
  }
  const photo =() =>{
    return(
      <Popup
      visible={visible2}
      onMaskClick={()=>setVisible2(false)}
      bodyStyle={{  borderTopLeftRadius: '8px',
                  borderTopRightRadius: '8px'}}
        >
          <Photo>
            <div className='upload'>
              <p className='title'>????????????</p>
              <p>??????</p>
              <p>???????????????</p>
            </div>
            <div className='cancel'>
                <p onClick={()=>setVisible2(false)}>??????</p>  
            </div>
          </Photo>
      </Popup>
    )
  }
  return (
    <Wrapper>
        <Detail>
            <NavBar
                back=''
                onBack={()=>navigate(-1)}
                className="navbar"
                right={right}
                >
                ??????
            </NavBar>
            {renderDeatail()}
        </Detail>
        <CommentList>
              <div className='title'>
                <p className='comment'>????????????</p>
                <p className='dianzan'>??????{Dianzan}</p> 
            </div>
            {comments.length==0&&<div className='no-comment'>
                  ???????????????????????????????????????~
            </div>}
           {renderList()}
         </CommentList>
         <CommentBar>
           <Space>
            <TextArea
              placeholder='????????????????????????...'  
              ref={commentRef}
              className='input'
              rows={2}
              onFocus={()=>{
                setText1(true)
              }
              
            }
            />
                  <i className='fa fa-share-square-o'
                      onClick={()=>changeShare()}></i>
                  <i className={classnames('fa','fa-thumbs-o-up',{active:DianzanState})}
                      onClick={()=>{
                        dianZan()
                        getChangeZanDispatch(id)
                        }}></i>
            </Space>
         </CommentBar>


         {text1&&modal()}
         {visible2&&photo()}
         {loading&&<Lmodal text={text}/>}
        <Operation 
            complain_={complain_}
            setComplain_={setComplain_}
            text={text}
            // onModalClose={onModalClose}
            setState={setState}
            setText={setText}
            setLoading={setLoading}
            />
        <Share 
            show={show}
            onCancel={onCancel}
            />
    </Wrapper>
  )
}
