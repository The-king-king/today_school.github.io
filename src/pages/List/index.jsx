import React, { useEffect } from 'react'
import ListItem from '../ListItem'
import Nodata from '@/components/Nodata'
import Topic from './Topic'
import { Wrapper,TabWrapper,Tab,TabList } from './style'
import classnames from 'classnames'

export default function List(props) {

  const {
      tab,
      changeTab,
      focusData,
      schoolData,
      queData,
      Ltab,
      changeLtab,
      getChangeZanDispatch,
      getAnswerCountAgreeDispatch,
      getAnswerCountOpposeDispatch,
  } =props
  return (
       <Wrapper>
         
        <Topic/>
        <TabWrapper>
          <Tab>
              <TabList className={classnames({active:tab=='focus'})} onClick={()=>changeTab('focus')}>关注</TabList>
              <TabList className={classnames({active:tab=='school'})} onClick={()=>changeTab('school')}>本校</TabList>    
              <TabList  className={classnames({active:tab=='question'})} onClick={()=>changeTab('question')}>问答</TabList>    
          </Tab>
        </TabWrapper>
     { focusData.length &&<ListItem 
                              focusData={focusData} 
                              schoolData={schoolData} 
                              queData={queData} 
                              tab={tab} 
                              Ltab={Ltab} 
                              changeLtab={changeLtab} 
                              getChangeZanDispatch={getChangeZanDispatch}
                              getAnswerCountAgreeDispatch={getAnswerCountAgreeDispatch}
                              getAnswerCountOpposeDispatch={getAnswerCountOpposeDispatch}
                          />}
     {
          (!focusData.length)&&<Nodata/>
          
        }  
    </Wrapper>
  )
}
