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
         nm:'青桃小丸子',
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
          <span className='list-reply'>{time()}</span><span style={{marginLeft:"0.5rem"}}>回复</span>
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
                        <span>私信</span>
                      </div>
                      <div className="share">
                        <img src={friendcircle}/>
                        <span>微信朋友圈</span>
                      </div>
                      <div className="share">
                        <img src={friends}/>
                        <span>微信好友</span>
                      </div>
                      <div className="share">
                        <img src={qq}/>
                        <span>&nbsp;QQ</span>
                      </div>
                      <div className="share">
                        <img src={qqspace}/>
                        <span>QQ空间</span>
                      </div>
                  </div>
                  <div className="shares" >
                    <div className="share">
                        <img src={collect}/>
                        <span 
                            onClick={()=>collect2()}
                        >{opreation?opreation:'收藏'}</span>
                      </div>
                      <div className="share">
                        <img src={copy}/>
                        <span 
                        onClick={()=>{
                          setVisible1(false)
                          setText('复制成功')
                          setLoading(true)
                          setState()
                        }}>复制</span>
                      </div>
                      <div className="share">
                        <img src={jubao}/>
                        <span onClick={()=>{
                            setComplain_(true)
                            setVisible1(false)}}>举报</span>
                      </div>
                    </div> 
                    <p className='cancel' onClick={()=>setVisible1(false)}>取消</p>
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
                                  <p className='time'>3小时前<span>{Sch}</span></p>
                              </div>
                              <div 
                                  className={classnames('focus',{'on-focus':focus_=='yes'})}
                                  onClick={()=>{
                                    setFocus_('yes')
                                    getAddFocusDispatch(id)
                                  }}
                                  >{focus_=='yes'?"已关注":"关注"}<i className={classnames('fa',{"fa-plus":focus_!='yes'})}></i></div> 
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
                      content: '发送成功'
                    })
                    }}>发送</span>
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
      setText('取消点赞成功')
    }
    else{
    setText('点赞成功')
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
          setText('收藏成功')
          setOpreation('取消收藏')
      }
      else{
        setText('取消收藏成功')
        setOpreation('收藏')
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
              <p className='title'>上传图片</p>
              <p>拍照</p>
              <p>从相册选择</p>
            </div>
            <div className='cancel'>
                <p onClick={()=>setVisible2(false)}>取消</p>  
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
                详情
            </NavBar>
            {renderDeatail()}
        </Detail>
        <CommentList>
              <div className='title'>
                <p className='comment'>全部评论</p>
                <p className='dianzan'>点赞{Dianzan}</p> 
            </div>
            {comments.length==0&&<div className='no-comment'>
                  还没有人评论咧，点击抢沙发~
            </div>}
           {renderList()}
         </CommentList>
         <CommentBar>
           <Space>
            <TextArea
              placeholder='发条友善的评论吧...'  
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
