import React from 'react'
import { Link} from 'react-router-dom'
import { TopicWrapper } from './style'
import topic from "@/assets/images/topic.jpg"

export default function Topic() {

  return (
      <TopicWrapper>
          <div className='topic-title'>
              <img src={topic} alt=""/>
             <Link to='/collegeCircle/topic'><span>更多 <i className='fa fa-caret-right'/></span></Link>
          </div>
          <div className='topic'>
              <span>2022毕业季</span>
              <span>折叠的记忆</span>
              <span>避暑小计划<span className='bandge'>热</span></span>
              <span>上半年总结<span className='bandge BR' >新</span></span>
              <span>我要上推荐</span>
              <span>今天你学习了吗</span>
          </div>

      </TopicWrapper>
  )
}
