import React from 'react'
import { FooterWrapper } from './style'
import {Link,useLocation} from 'react-router-dom'
import classnames from 'classnames'

export default function Footer() {
    const {pathname} =useLocation()
  return (
    <FooterWrapper>
      <Link to='/collegeCircle'>
        <i className='fa fa-home'></i>
        <span>今选</span>
      </Link>
      <Link to='/collegeCircle' className={classnames({active:pathname=='/collegeCircle'})}>
        <i className='fa fa-university' ></i>
        <span>大学圈</span>
      </Link>
      <Link to='/collegeCircle'>
        <i className='fa fa-server'></i>
        <span>服务</span>
      </Link>
      <Link to='/collegeCircle'>
        <i className='fa fa-commenting-o'></i>
        <span>消息</span>
      </Link>
      <Link to='/collegeCircle'>
        <i className='fa fa-user'></i>
        <span>我的</span>
      </Link>
    </FooterWrapper>
  )
}
