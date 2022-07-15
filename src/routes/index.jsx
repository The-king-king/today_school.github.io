// 懒加载路由 加快首页加载出来时间，提高性能
import React,{ lazy } from "react";
import { Routes,Route } from 'react-router-dom'
import CollegeCircle from '@/pages/CollegeCircle'
import TopicSquare from '@/pages/List/Topic/TopicSquare'
const Details = lazy(()=>import('@/pages/ListItem/detail'))
// const TopicSquare = lazy(()=>import('@/pages/List/Topic/TopicSquare'))
const NewQue = lazy(()=>import('@/pages/NewQue'))
const NewListItem = lazy(()=>import('@/pages/NewListItem'))
const NewTopic = lazy(()=>import('@/pages/NewTopic'))

export default function RoutesConfig(){
    return(
            <Routes>
                <Route path='/' element={<CollegeCircle/>}></Route>
                <Route path='/collegeCircle' element={<CollegeCircle/>}></Route>
                <Route path='/collegeCircle/detail/:id' element={<Details/>}></Route>
                <Route path='/collegeCircle/topic' element={<TopicSquare/>}></Route>
                <Route path='/collegeCircle/newListItem' element={<NewListItem/>}></Route>
                <Route path='/collegeCircle/newQue' element={<NewQue/>}></Route>
                <Route path='/collegeCircle/topic/newTopic' element={<NewTopic/>}></Route>
        </Routes>
    )
}
