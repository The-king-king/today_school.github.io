import React, { useEffect, useState } from 'react'
import messages from '@/assets/images/messages.jpg'
import friends from '@/assets/images/friends.png'
import friendcircle from '@/assets/images/friendcircle.jpg'
import qq from '@/assets/images/qq.png'
import qqspace from '@/assets/images/qqspace.png'
import './share.css'

export default function share(props) {
  const{show:show_}=props;
  const{onCancel}=props;
  const [show,setShow]=useState(false)
  const Cancel=()=>{
    setShow(false);
    onCancel&&onCancel()
  }
  useEffect(()=>{
    setShow(show_)
  },[show_])
  return (
   show&& <div className="shareModalWrapper">
        <div className="shareModal">
          <div className="options">
             <div className="option">
                <img src={messages}/>
                <span>私信</span>
              </div>
              <div className="option">
                <img src={friendcircle}/>
                <span>微信朋友圈</span>
              </div>
              <div className="option">
                <img src={friends}/>
                <span>微信好友</span>
              </div>
              <div className="option">
                <img src={qq}/>
                <span>&nbsp;QQ</span>
              </div>
              <div className="option">
                <img src={qqspace}/>
                <span>QQ空间</span>
              </div>
          </div>
          <p className='cancel' onClick={Cancel}>取消</p>
        </div>
        <div className="mask" onClick={Cancel}></div>
    </div>
  )
}
