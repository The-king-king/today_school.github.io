import React from "react";
import { LittleModal } from'./style.js'

export default function Lmodal(props){
    const { text } = props
    return(
   <LittleModal>
        <i className='fa fa-check-circle-o'></i>
          <span>{text}</span>
      </LittleModal>
    )
}