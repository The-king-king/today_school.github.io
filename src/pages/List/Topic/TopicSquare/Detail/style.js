import styled from "styled-components";

export const Wrapper =styled.div`
  position: relative;
  .topic-header{
    position: sticky;
    background-color: white;
     z-index: 9999;
     top:0
  }
  .navbar{
      font-size: 14px;
  }
    .topic-search{
        border-top: 0.08rem #f5f5f5 solid;
        border-bottom: 0.08rem #f5f5f5 solid;
        background-color: white;
       padding:0.2rem 0.5rem;
        .searchbar{
            width: 99%
        }
    }
    .loading{
        z-index: 999;
        font-size: 35px;
        width:100%;
        height:25rem;
        display: flex;
        justify-content: center;
        align-items: center;
       }
   .main{ 
       width: 100%;
       display: flex;
       height: 28rem;
       overflow: hidden;
       .topic-left{
         position: fixed;
         top: 4.5rem;
           ul{  
               position: relative;
               margin: 0;
               padding: 0;
               .topic-list{
                   height: 2.2rem;
                   line-height: 2.2rem;
                  text-align: center;
                  position: relative;
                  &.active{
                      background-color: white; 
                      font-weight: bolder;
                      ::before{
                        content: '';
                        width: 0.2rem;
                        height: 1rem;
                        position: absolute;
                        left: 0;
                        top:0.65rem;
                        background-color: red;
                      }  
                  }
                    a{
                        display: block;
                        color:#666;
                        font-size: 15px;
                        margin: 0;
                        padding: 0;
                   }
               }
              
           }
          width: 5rem; 
          height: 100%;
          -webkit-overflow-scrolling: touch;
          overflow-y: auto;
          background-color: #f9f9f9;
       }
       .topic-right{
           margin-left: ${props => props.visible?'5rem':0};
           flex: 1;
           overflow-y: auto;
          -webkit-overflow-scrolling: touch;
       }
     
       .topic-wrapper{
         .topic-top{
             .topic-classify{
                margin-right: .05rem;
                margin-right: 0.5vw;
                font-weight: 700;
                font-size: .128rem;
                color: #666;
             }
         }
         .topic-context{
                 .topic-box{
                    .topic-item{
                        border-bottom: 0.03rem #f5f5f5 solid;
                        display: flex;
                        height: 2rem;
                        padding: 0.5rem;
                        .img-box{
                            img{
                                width: 2rem;
                                height: 2rem;
                                border-radius: 0.5rem;
                            }
                        }
                        section{
                            margin-left: 0.5rem;
                            .topic-info{
                                margin: 0;
                                padding: 0;
                                font-size: 12px;
                                font-weight: bold;
                                line-height: 0.75rem;
                            }
                            .topic-data{
                                margin-top:0.5rem;
                                font-size: 10px;
                                color:grey
                            }
                        }
                    }
             }
         }

       }
   }
  .no-img{
      width: 11rem;
      height: 11rem;
      position: fixed;
      left: 0;
      right: 0;
      top:0;
      bottom:0;
      margin: auto;
  }
  .topic-bottom{
      z-index: 99999999;
      position: fixed;
      left: 0;
      bottom: 0;
      right: 0;
      width: 100%;
      height: 2.4rem;
      background-color:white ;
      p{
        margin-top: 0.4rem;
        background-color: red;
        border-radius: 999em;
        color: white;
        height: 60%;
        text-align: center;
        font-size: 15px;
        font-weight: bold;
        letter-spacing: 0.05rem;
        display: flex;
        align-items: center;
        justify-content: center;

      }
  }
`