 import styled from "styled-components";
 import style from '@/assets/global-style'

 export const NewTopicWrapper=styled.div`
  padding:0 0.4rem;
    .nav{
        border-bottom: 0.1rem solid ${style['border-color']};
        padding: 0;
        margin: 0;
    }
    .text1{
        border-bottom: 0.1rem solid ${style['border-color']};
        margin-top: 1rem;
        height: 2.75rem;
        
    }
    .text2{
        border-bottom: 0.1rem solid ${style['border-color']};
        margin-top: 1rem;
    }
    .topic-classify{
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 14px;
        border-bottom: 0.1rem solid ${style['border-color']};
        padding: 0.7rem 0;
       
    }
    .topic-bandage{
        margin-top: 2rem;
        p{
            font-weight: bold;
            font-size: 14px;
            &.suggest{
                font-size: 12px;
                color: #C6C6C6;
            }
        }
        .upload1{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 5rem;
            width: 5rem;
            background-color: #f5f5f5;
            color: #C6C6C6;
            border-radius: 0.1rem;
            i{
                font-size: 40px;
                
            }
            span{
                font-size: 12px;
            }
        }
    }
    .topic-picture{
        margin-top: 2rem;
        p{
            font-weight: bold;
            font-size: 14px;
          span,&.suggest{
                font-size: 12px;
                color: #C6C6C6;
            }
        
        }
        .upload2{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 4.5rem;
            width: 9rem;
            color: #C6C6C6;
            background-color: #f5f5f5;
            border-radius: 0.1rem;
            i{
                font-size: 40px;
                color: #C6C6C6;
            }
            span{
                font-size: 12px;
            }
        }
    }
    .topic-place{
        margin-top: 1.5rem;
        margin-bottom: 6rem;
        p{
            font-weight: bold;
            font-size: 14px;
        }
        .top-radio{
         
        }
    }
    .topic-bottom{
      z-index: 99999999;
      position: fixed;
      left: 0;
      bottom: 0;
      right: 0;
      width: 100%;
      height: 2.4rem;
      background-color:white;
      p{
        margin-top: 0.4rem;
        background-color: grey;
        border-radius: 999em;
        color: white;
        height: 60%;
        text-align: center;
        font-size: 14px;
        letter-spacing: 0.05rem;
        display: flex;
        align-items: center;
        justify-content: center;

      }
  }

 `