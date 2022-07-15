import React,{useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import LazyLoad,{ forceCheck } from 'react-lazyload'
import { Wrapper } from './style'
import { SearchBar,NavBar,DotLoading  } from 'antd-mobile'
import classnames from  "classnames"
import noTopic from '@/assets/images/notopic.png'
import cartoon from '@/assets/images/cartoon.jpeg'



function Detail({topicData,back}) {
    const navigate =useNavigate()
    const [tab,setTab] =useState(0)
    const [topic,setTopic] = useState(topicData)
    const [allTopic,setAllTopic] = useState(topicData)
    const [visible,setVisible]=useState(true)
    const [notopic,setNotopic] =useState(false)
    useEffect(()=>{
        setTopic(topicData)
    },[topicData])
    const renderClassify =()=>{
        return topicData.map((item,index)=>
            <div 
                key={index} 
                className={classnames('topic-list',{active:tab==index})}
            >
                <a onClick={()=>scrollToAnchor(index)}>
                 <span>{item.classify}</span>
                </a>
            </div>
        )
    }
   const scrollToAnchor =(classify)=>{
       if(classify!=undefined){
           let classifyElemment = document.getElementById(classify)
           if(classifyElemment){
                classifyElemment.scrollIntoView({
                    block:'start',
                    behavior: 'smooth'
                })
                setTab(classify)
           }
       }
   }
//    const judgeView = (classify) =>{
//         if(classify!=undefined){
//             let classifyElemment = document.getElementById(classify)
//             if(classifyElemment){
//                 const pageHeight = document.documentElement.clientHeight;
//                 const contentTop = classifyElemment.getBoundingClientRect().top;
//                 const contentHeight = classifyElemment.offsetHeight
//                 if((contentTop<pageHeight && contentTop>=0)  || (contentTop<0 && (contentTop+contentHeight>0))){
//                        setTab(classify)
//                 }
//             } 
//             }
//         }
// judgeView(2);
   const filterTopic =(value)=>{
     setVisible(false)
     let data=[];
       data = allTopic.map(({classify,context})=>context.filter(item=>item.title.includes(value)))
       console.log(data,'----------')
    if(data.length!=0){
      data=data.filter(item=>item.length>0) 
    }
    if(data.length==0){
        console.log(data.length,'++++++')
        setNotopic(true)
    }
    setTopic(data)
   }

    const renderTopic = () =>{
        return topic.map((item,index)=>{
            return (
                <div className='topic-wrapper' key={index}>
                    {visible && <div className="topic-top">
                         <div className='topic-classify' id={index}>-{item.classify}-</div>
                    </div>
                   }
                    <div className="topic-context">
                        {
                            (item.context? item.context : item).map(({pic,title,hot,dis,focus},index)=>{
                                return(
                                    <div className="topic-box" key={index}>
                                            <div className="topic-item">
                                                <div className="img-box">
                                                    <LazyLoad 
                                                    placeholder={<img src={cartoon}/>}
                                                    scroll={true}
                                                >
                                                         <img src={pic}  />
                                                    </LazyLoad>
                                                </div>
                                                <section>
                                                    <p className='topic-info'>
                                                        <span>#{title}#</span>
                                                    </p>
                                                    <p className='topic-data'>
                                                        <span>热度 {hot}</span> ·
                                                        <span> 讨论 {dis}</span> ·
                                                        <span> 关注 {focus}</span>
                                                    </p>
                                                </section>
                                            </div>
                                        </div>
                                )
                            })
                        }
                    </div>
                </div>
            )
        })
    }
  return (
    <Wrapper visible={visible} >
            <div className="topic-box">  
                <div className='topic-header'>  
                    <NavBar
                        back=''
                        onBack={()=>back()}
                        className="navbar"
                        right='我关注的'
                    >话题广场</NavBar>
                    <div className="topic-search">
                        <SearchBar 
                            className='searchbar'
                            placeholder='搜索话题'
                            onSearch={(value)=>filterTopic(value)}
                            onClear={()=>{
                                setVisible(true)
                               setTopic(allTopic)
                               setNotopic(false)
                            }}
                            ></SearchBar>
                    </div>
                </div>      
                {!topicData.length&&
                 <div className='loading'>
                      <DotLoading color='primary' className='loading' />
                </div>
              }          
               <div className='main'>
                  {visible&& <div className="topic-left">
                        <ul>
                            {renderClassify()}
                        </ul>
                        
                    </div> }
                 {!notopic&& <div className="topic-right" onScroll={forceCheck}>
                            {renderTopic()}
                    </div> 
                  }
                    { notopic && <img src={noTopic}  className="no-img"  />}   
                </div>

             <div className="topic-bottom">
                 <p onClick={()=>navigate('newTopic')}>申请话题</p>
             </div>
            </div>
    </Wrapper>
  )
}
export default React.memo(Detail)
