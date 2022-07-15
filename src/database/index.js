import Loki from 'lokijs'
import { useEffect, useState } from 'react'

export const db = new Loki('comments',{
    autoload:true,
    autosaveCallback:databaseInitialize,
    autosave:true,
    autosaveInterval:3000,
    persistenceMethod:'localStorage'
})

function databaseInitialize(){
    //数据库初始化
    const comments = db.getCollection('comments')
    if(comments == null){
        db.addCollection('comments')//创建一个集合
    }
}

export function loadCollection(collection){
    return new Promise(resolve =>{
       db.loadDatabase({},()=>{
        const _collection = db.getCollection(collection)
             || db.addCollection(collection)
         resolve(_collection)
       })
    })
}

// import {db,loadCollection} from '../database/index'

// const [comments,setComments]=useState([
//     {
//         pic:'https://img0.baidu.com/it/u=1246206694,3592233997&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
//         nm:'青桃小丸子',
//         comments:['加油!']
//     }
// ])

// const getInitialData =()=>{
//     loadCollection('comments')
//         .then((collection)=>{
//             const entities = collection.chain()
//                 .find()
//                 .data()
//                 setComments(entities)
//         })
// }
// useEffect(()=>{
//     getInitialData()
// },[])

// const commentsItems = notes.map((comment)=>
//     <List
//         key={comment.$loki}
//         entity={comment}
//        addEnitity={addEnitity}
//     />

// )
// const addEnitity = (event) =>{
//     console.log(event.target.value,'------')
//         for(let item in comments){
//             if(item.$loki == event.$loki)
//             item.comments.push(event.target.value)
//         }
//         const _entities = comments;
//         setComments(_entities);
//         loadCollection('comments')
//             .then((collection)=>{
//                 collection.add(event)
//                 db.saveDatabase();
//             })
// }