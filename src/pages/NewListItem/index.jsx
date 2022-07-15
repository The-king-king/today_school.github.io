import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {  NavBar,TextArea } from 'antd-mobile'
import { NewListWrapper,RightWrapper } from './style'

export default function NewListItem() {
    const navigate = useNavigate()
    const right=(
        <RightWrapper>
            <button className='f-color'>发布</button>
        </RightWrapper>
    )
  return (
    <NewListWrapper>
        <NavBar 
            back=''
            onBack={()=>navigate(-1)}
            right={right}
            className='nav'
        >
            发动态
        </NavBar>
        <div className='add-topic'>
            <p className='topic-title'>添加话题</p>
            <div className="topic-choose">
                <div className='topic'>#一人一句最爱的电影</div>
                <div className="topic">#暑假日记</div>
                <div className="topic">#暑假日记</div>
                <div className="topic">#暑假日记</div>
                <div className="topic">#暑假日记</div>
                <div className="topic">#暑假日记</div>
                <div className="topic">#暑假日记</div>
                <div className="topic">#暑假日记</div>
                <div className="topic">#暑假日记</div>
                <div className="topic">#暑假日记</div>
                <div className="topic">#暑假日记</div>
                <div className="topic">#暑假日记</div>
                <div className="topic">#暑假日记</div>

            </div>
            <p className='topic-square' onClick={()=>navigate('/topicSquare')}>&gt;</p>
        </div>
        <div className="add-context">
            <TextArea
                row={3}
                placeholder="记录你此刻的心情~"
                className='text'
            >
            </TextArea>
        </div>
        <div className="oposition">
            <span>所在位置</span>
            <span className='place'>请选择地点&gt;</span>
        </div>
        <div className='checkbox1'>
        <input type="checkbox" className='checkbox'/><span>已同意<Link to='#'>《今日校园内容管理规范》</Link></span>
        </div>
        
    </NewListWrapper>
  )
}
