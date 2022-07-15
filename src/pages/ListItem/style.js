import styled from "styled-components";

export const ItemWrapper=styled.div`
    background-color:white;
    height:14rem;
    margin-top:0.15rem;
    padding:0.7rem;
    z-index: 996;
    a{
        text-decoration: none;
        color: inherit;
    }
`
export const HeaWrapper=styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    img{
        border-radius: 50%;
        position: absolute;
        height:2.5rem;
        width: 2.5rem
    };
    p{
        margin-left:3.5rem;
        line-height: 0.4rem;
        &.title{
            color: black;
            font-size:13px;
            font-weight: 600;
        };
        &.time{
            color:grey;
            font-size: 11px;
        }
    }
    a{
        text-decoration: none;
        color:grey;
        font-weight: 700;
        float: right;
    }

`
export const BodyWrapper=styled.div`
    p{
        font-size: 14px;
    }
    img{
        height: 6rem;
        width: 6rem;
        border-radius: 5%;
        margin-right: 0.01rem;
    }
`
export const FootWrapper=styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 0.5rem;
`
export const Wrapper =styled.div`
    font-size: 12px;
    color: grey;
       &.active{
        color:#ff3836
 } 
`
export const Plus=styled.div`
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    background-color: #ff3836;
    color:white;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    bottom:4rem;
    right: 1rem;
   li{
       font-size:1.2em
   }
   p{
       font-size: 10px;
       font-weight:bold;
   }
`
export const QueWrapper=styled.div`
    background: white;
    padding: 0.3rem 0.6rem 0.6rem 0.6rem;
    border-bottom: 0.05rem #c6c6c6 solid;
    img{
        border-radius: 50%;
        width: 1.2rem;
        height: 1.2rem;
        float: left;
        margin-right:0.25rem;
    }
    p{
        &.title{
            font-weight: bold;
            font-size: 15px;
            line-height: 0.8rem;
        }
        &.ansAccount, &.heaDate{
            color:#a2a2a2;
            font-size: 11px;
        }
        &.heaName{
            color:grey;
            font-size: 12px;
            font-weight: bold;
        }
        &.heaContext{
            color:#686868;
            font-size:12px;
        }
    }
`
export const LittleBox =styled.div`
    color:#ff4044;
    font-size: 12px;
    width: 6rem;
    letter-spacing: 0.06rem;
    border-radius: 999em;
    /* 椭圆！！！ */
    line-height: 0.05rem;
    padding:${props=>props.answerState?0:'0.3rem'};
    background-color:${props=>props.answerState?'#fff':'#feeeec'};
    display: flex;
    justify-content: space-between;
    .agree{
        /* flex:${props=>props.middle=='oposition'+props.index?0:1}; */
        position: relative;
        display:${props=>props.answerState?'none':'block'};
        ::after{
            content: '';
            background-color:#ff4044 ;
            height: 0.5rem;
            width: 0.05rem;
            position: absolute;
            left: 3.4rem;
        }
    }
    .oposition{
        display:${props=>props.answerState?'none':'block'};
        /* display: none; */
    }
   .done{
        background-color: #ff4044;
        color:white;
        height:1.2rem;
        width: 3.2rem;
        text-align: center;
        line-height: 1.2rem;
        border-radius: 999em;  
    }
    /* .oposition_{
        background-color: #ff4044;
        color:white;
        height:1.2rem;
        width: 3rem;
        font-size: 12px;
        text-align: center;
        line-height: 1.2rem;
        border-radius: 999em;  
    } */
`
export const QueTab=styled.div`
    font-size: 12px;
    overflow: hidden;
    background: white;
    position: sticky;
    top:5.4rem;
    height: 2rem;
    display: flex;
    align-items: center;
    /* outline: 1px solid red; */
    ul{
     list-style-type: none;
     margin: 0;
     padding-left:0.65rem;
     color: #a2a2a2;
    }
    li{
        float: left;
        line-height: 0.75rem;
        width: 2rem; 
        padding: 0.08rem;
        text-align: center;
        border-radius: 999em;
        margin-right: 0.6rem;
      
       &.active{ 
            background-color: #feeeec;
            font-weight: bold; 
            color:#ff4044 ;
        }
    }
`
export const LittleModal=styled.div`
    position: fixed;
    top:6rem;
    left: 40%;
    font-size: 10px;
    color: white;
    border-radius: 999em;
    z-index: 999;
    line-height: 1.3rem;
    text-align: center;
    width: 4.5rem;
    background-color: #000;
    opacity: .7; 
`