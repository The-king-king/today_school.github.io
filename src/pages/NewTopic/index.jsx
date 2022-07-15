import React from 'react'
import { NavBar, TextArea } from 'antd-mobile'
import { useNavigate } from 'react-router-dom'
import { NewTopicWrapper } from './style'
// import { ImageUploader } from 'antd-mobile'
import { useState } from 'react'
// import { mockUpload} from '@/api/utils'

export default function NewTopic() {
  const navigate = useNavigate()
  const [fileList,setFileList] = useState()
  return (
    <NewTopicWrapper>
        <NavBar
          back=''
          onBack={()=>(navigate(-1))}
          className='nav'
        >
          申请话题
        </NavBar>
        <TextArea
          placeholder='#给话题起一个好听的名字#'
          showCount
          rows={1}
          maxLength={15}
          className='text1'
        />
          <TextArea
          placeholder='给话题加一段描述，吸引更多用户参与'
          showCount
          rows={4}
          maxLength={45}
          className='text2'
        />
        <div className='topic-classify'>
          <span>请选择分类</span>
          <span>&gt;</span>
        </div>
        <div className='topic-bandage'>
          <p>话题图标</p>
          {/* <ImageUploader value={fileList} onChange={setFileList} upload={mockUpload}> */}
              <div className="upload1">
                <i className='fa fa-camera'></i>
                <span>上传图片</span>
              </div>
           {/* </ImageUploader> */}
            <p className='suggest'>建议图片比例1:1</p>
        </div>
        <div className="topic-picture">
          <p>话题背景<span>（选填）</span></p>
          <div className="upload2">
            <i className='fa fa-camera'></i>
            <span>上传图片</span>
          </div>
            <p className='suggest'>建议图片比例16:9</p>
        </div>
        <div className="topic-place">
          <p>适用范围</p>
       <div className='topic-radio'>
          <input type='radio' name='contry'/>
         <label for="contry">全国</label>
       </div>
       <div>
          <input type='radio' name='school'/>
          <label for="school">仅限本校</label>
       </div>
       <div className="topic-bottom">
                 <p>提交申请</p>
             </div>
        </div>

    </NewTopicWrapper>
  )
}
