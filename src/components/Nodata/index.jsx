import React from 'react'
import blankt from '@/assets/images/blankt.png'

export default function Nodata() {
  return (
    <div style={{textAlign:"center",background:"white",paddingTop:"40px"}}>
      <img src={blankt} alt="" />
      <p style={{color:"#a5a5a5",fontSize:"10px"}}>这里一片空白，啥也么有</p>
    </div>
  )
}
