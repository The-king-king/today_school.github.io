import styled from'styled-components'

export const Detail =styled.div`
    background: white;
    position:relative;
    background-color:#f9f9f9;
    margin-bottom: 0.5rem;
    .navbar{
        border-bottom: 0.05rem #eee solid;
        background-color: white;
    }
`
export const ThreeDots=styled.div`
    .shares{
        background: #f9f9f9;
        display:grid;
        grid-template-columns:1fr 1fr 1fr 1fr 1fr ;
        padding: 0.2rem 0.2rem 0.2rem 0.2rem;
        border-bottom: 0.08rem #f5f5f5 solid;
    }
    .share{
        text-align: center;
            img{
                border-radius: 50%;
                height: 1.5rem;
                width: 1.5rem;
                display:block;
                transform: translateX(1.2rem);
            }
            span{
                color: #6a6a6a;
                font-size: 8px;
            }
        }
   
`
export const ItemWrapper = styled.div`
    background-color:white;
    margin-top:0.5rem;
    padding:0.7rem;
    z-index: 996;
`
export const HeaWrapper=styled.div`
    position: relative;
    img{
        border-radius: 50%;
        position: absolute;
        height:2.5rem;
        width: 2.5rem
    }
    div{
        &.headTitle{
            display: flex;
            justify-content: space-between;
            color: red;
        }
        p{
            margin: 0;
            margin-left:3.5rem;
            padding-top:0.1rem;
            &.title{
                color: black;
                font-size:13px;
                font-weight: 600;
                span{
                    margin-left: 0.5rem;
                }
            }
            &.time{
                color:grey;
                font-size: 11px;
            }

         }
        div{
            &.focus{
             border: 0.03rem solid red;
             border-radius: 999em;
             width: 2.5rem;
             height: 1rem;
             text-align: center;
             }
             &.on-focus{
                 color: grey;
                 border: 0.03rem solid grey;
             }
           
        } 
}
`
export const BodyWrapper=styled.div`
    p{
        font-size: 14px;
        padding-top: 1rem;
    }
    img{
        height: 6rem;
        width: 6rem;
        border-radius: 5%;
        margin-right: 0.01rem;
    }
`
export const Wrapper =styled.div`
 background-color:#f9f9f9;
`
export const CommentList =styled.div`
     background-color: white;
     padding:0.7rem;
    .title{
        display: flex;
        justify-content: space-between;
    }
    p{
        &.comment{
            color: black;
            font-size: 14px;
            font-weight: bold;
        }
        &.dianzan{
            color:grey;
            font-size: 11px;
        }
    }
    .no-comment{
        color:grey;
        font-size: 13px;
        text-align: center;
        padding-top: 2rem;
    }
`
export const CommentBar=styled.div`
    background-color: white;
    display: flex;
    justify-content: center;
    border-top: 0.06rem solid #f9f9f9;
    padding-top: 0.5rem;
   
    .input{
        width: 14rem;
        height: 1.5rem;
        border-radius:999em;
        background-color: #f9f9f9;
    }
    i{
        margin-top: 0.3rem;
        margin-left: 0.2rem;
        font-size: 1rem;
        color:grey;
        &.active{
            color: #ff4044;
        }
    }
    position: fixed;
    bottom: 1rem;
    left: 0;
    right: 0;
    margin: auto;
`
export const Content=styled.div`
    background-color: white;
    width: 18rem;
    padding: 0.8rem;
    position: fixed;
    bottom: 0; 
    left: 0;
    right: 0;
    margin: auto;
    overflow: hidden;
    text-align: center;
    z-index: 9999;
    color: grey;
 .input{
        background-color: #f9f9f9;
        border-radius: 0.5rem;
        width: 95%;
        outline: 0;
    }
 .operation{
     display: flex;
     justify-content: space-between;
     border: 0;
 }
   i{
       margin-right: 0.5rem;
   }
   span{
       margin-right: 0.7rem;
   }
`
export const Mask =styled.div`
    position:fixed;
    left: 0;
    top:0;
    right: 0;
    bottom: 0;
    background-color: #000;
    opacity: .6;
    z-index: 990;
`
export const Lists =styled.div`
    img{
        border-radius: 50%;
        width: 1.2rem;
        height: 1.2rem;
        float: left;
        margin-right:0.25rem;
    }
    span{
        &.list-heaName{
            color:grey;
            font-size: 12px;
            font-weight: bold;
        }
        &.list-dianzan{
            float: right;
        }
        &.list-reply{
            margin-left: 1.5rem;
            font-size: 9px;
        }
    }
    p{
     
        margin: 0; 
        /* margin-top: 0.2rem; */
        &.list-comment{
            margin-left: 1.5rem;
        }
    }
    margin-top:0.1rem
`

export const Photo=styled.div`
    .upload{
        /* background-color: white; */
        color: #0b76e6;
        font-size:14px;
        text-align: center;
      
        p{
            &.title{
                color: #949494;
                font-size: 12px;
            }
            border-bottom:0.06rem #f6f6f6 solid;
           line-height: 1.2rem;
           
        }
        
    }  
    .cancel{
        margin:0;
      p{
        color: #949494;
          margin: 0;
          padding: 0;
      }
    }   
   
`