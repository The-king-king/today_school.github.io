import React, { useEffect, useState } from 'react'
import classnames from 'classnames'
import { ItemWrapper,HeaWrapper,BodyWrapper,FootWrapper,Wrapper,Plus,
        QueWrapper,LittleBox,QueTab,LittleModal} from './style'
import Operation from '@/components/common/Operation'
import Share from '@/components/common/Share'
import { Link,useNavigate } from 'react-router-dom'

export default function ListItem(props) {
    const {
        focusData,
        schoolData,
        queData,
        tab,
        Ltab,
        changeLtab,
        getChangeZanDispatch,
        getAnswerCountAgreeDispatch,
        getAnswerCountOpposeDispatch
    } =props
    const [visiable,setVisiable]=useState(false)
    const [show,setShow]=useState(false)
    const [loading,setLoading]=useState(false)
    const [text,setText]=useState('');
    const navigate = useNavigate();
    // const [middle,setMiddle]=useState('');
    const data = tab=='focus'?focusData : schoolData
    useEffect(()=>{

    },[focusData,schoolData])
    const onModalClose=()=>{
        setVisiable(false)
    }
    const onCancel=()=>{
        setShow(false)
    }
 const Lmodal=()=>{
    return(
     loading&&<LittleModal>
        <i className={classnames('fa','fa-check-circle-o')}></i>
          <span>{text}</span>
      </LittleModal>
    )
  }
  const setState = () =>{
    setTimeout(()=>{
      setLoading(false)
    },3000)
  }
    const renderItem=()=>{
        return data.map(({id,HeaPic,Nm,Desc,Pic,Sch,Focus,Comment,Dianzan,DianzanState})=>{
            return (<ItemWrapper key={id}>
            <HeaWrapper>
                <div>
                    <img src={HeaPic} alt="" />
                    <p className='title'>{Nm}</p>
                    <p className='time'>3小时前</p>   
                </div>
                <a href='#' onClick={()=>setVisiable(true)}>···</a>
            </HeaWrapper>
            <BodyWrapper>
                <Link
                   to={`detail/${id}`}
                >
                <p>{Desc}</p>
               {Pic.map((item,index)=>
               <img src={item} key={index}/>)
                 }
                 </Link>
            </BodyWrapper>
            <FootWrapper>
                <Wrapper>
                    <i className='fa fa-share-square-o'></i>
                    <span  onClick={()=>setShow(true)}>分享</span>
                </Wrapper>
                <Wrapper>
                    <i className='fa fa-commenting-o'></i>
                    <span ><Link
                   to={{pathname:`detail/${id}`}}
                >{Comment.length==0?'抢评论':Comment.length}</Link></span>
                </Wrapper>
                <Wrapper 
                    className={classnames({active:DianzanState})} 
                    onClick={()=>{getChangeZanDispatch(id)}} 
                >
                    <i className="fa fa-thumbs-o-up" ></i>
                    <span>点赞<span >{Dianzan}</span></span>
                </Wrapper>
            </FootWrapper>
        </ItemWrapper>)
        })
    }
    const queList=()=>{
        return(
            <QueTab>
                <ul>
                    <li className={classnames({active:Ltab=='hot'})} onClick={()=>{changeLtab('hot')}}>最热</li>
                    <li className={classnames({active:Ltab=='new'})} onClick={()=>{changeLtab('new')}}>最新</li>
                </ul>
            </QueTab>
        )
    }
    const renderQue=()=>{
        return queData.map(({id,topic,answer,answerState,agreeCount,agree,oppose},index)=>{ 
            console.log(agreeCount,'11111111')
            return(
             <QueWrapper key={index}>
                 <p className='title'>{topic}</p>
                 <p className='ansAccount'>已有人<font style={{color:"#fe888f"}}>{answer.length}</font>回答</p>
                 {
                     answer.map((item,index)=>
                     <div key={index}>
                        <img src={item[0]} alt="" />
                        <p className='heaName'>{item[1]}</p>
                        <p className='heaContext'>{item[2]}</p>
                        <p className='heaDate'>{item[3]}</p>
                     </div>    
                     )
                 }
                 <LittleBox 
                    answerState={answerState} 
                    index={index}
                    agree={agree}
                    oppose={oppose}
                >
                     <div 
                        className={classnames({agree:!agree},{done:agree})}
                        onClick={()=>getAnswerCountAgreeDispatch(id)}
                     >
                        <i className='fa fa-caret-up'/>
                         <span >赞同{agreeCount}</span>
                     </div>
                     <div 
                        className={classnames({oposition:!oppose},{done:oppose})}
                        onClick={()=>getAnswerCountOpposeDispatch(id)}
                    >
                         <i className='fa fa-caret-down'/>
                         <span >{oppose?"已反对":'反对'}</span>
                     </div>
              </LittleBox>
             </QueWrapper>
            )
        })
    }
    const ShowData =()=>{
        if(tab!='question'){
            return(
                <div>
                    {Lmodal()}
                    {renderItem()}
                    <Plus onClick={()=>navigate('newListItem')}>
                    <li className='fa fa-plus'></li>
                    </Plus>
                </div>
            )
        }
        else{
            return(
                <div>
                    {queList()}
                    {renderQue()}
                    <Plus onClick={()=> navigate('newQue')}>                    
                         <p>提问</p> 
                    </Plus>
                </div>
            )
        }
    }

  return (
      <>
       {Lmodal()}
        <Operation 
            visiable={visiable}
            text={text}
            onModalClose={onModalClose}
            setState={setState}
            setText={setText}
            setLoading={setLoading}
            />
        <Share 
            show={show}
            onCancel={onCancel}
            />
        <div style={{paddingBottom:"3rem"}}>
            {ShowData()}
        </div>
        
    </>
  )
}
