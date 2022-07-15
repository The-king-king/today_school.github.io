import{s as o}from"./index.6f8307b2.js";import{s as e}from"./global-style.694aa35e.js";const i=o.div`
    textarea{
        font-size: 14px;
    }
    a{
        text-decoration: none;
    }
    .nav{
        border-bottom:0.1rem solid ${e["border-color"]};
        font-size: 12px;
    }
    .add-topic{
        padding-left: 0.3rem;
        display: flex;
        .topic-title{
            position: fixed;
            top:2rem;
            font-weight: bold;
            font-size: 14px;
            z-index: 9999;
            overflow: hidden;
            background-color: white;
        }
        .topic-choose{
            margin-left:2.5rem;
            display: flexbox;
            align-items: center;
            overflow: auto;
            color: grey;
            font-size: 12px;
            z-index: 9998;
            background-color:white;
            padding: 0.3rem;
            margin-right: 1rem;
            .topic{
                border-radius: 999em;
                border: 1px #f5f5f5 solid;
                background-color: #f5f5f5;
                margin-left: 0.3rem;
                padding:0 0.5rem;
                
            }
        }
        .topic-square{
          box-sizing: border-box;
           padding-left: 0.3rem;
           padding-right: 0.3rem;
            position: fixed;
            right: 0;
            top: 2rem;
            z-index: 9999;
            font-weight: bolder;
            font-size: 14px;
            box-shadow:-0.15rem 0 0.1rem #888888;
            height: 1.1rem;
            background-color: white;
        }
    }
    .add-context{
        padding-left:0.3rem;
        border-bottom:0.1rem solid ${e["border-color"]};
        .text{
            height: 10rem;
        }
    }
    .oposition{
        padding-left:0.3rem;
        padding-right:0.3rem;
        border-bottom:0.1rem solid ${e["border-color"]};
        font-size:14px;
        font-weight: bold;
        display: flex;
        justify-content: space-between;
        height: 2rem;
        align-items: center;
        margin-bottom: 0.5rem;
        .place{
            font-size: 13px;
            color: #C6C6C6;
            font-weight:normal;
        }
    }
    .checkbox1{
        display: flex;
        position: relative;
        span{
            margin-left: 0.1rem;
            padding: 0;
        }
    }
`,d=o.div`
   width: 2.5rem;
   line-height: 1.1rem;
   text-align: center;
   border-radius: 999em;
   margin-left: 1.8rem;
   color: white;
   font-size: 13px;
   font-weight: normal;
  button{
     &.f-color{
            color: turquoise;
            border-radius: 999em;
            border: 0;
            background-color:#f5f5f5 ;
    }
     &.active{
        background-color: turquoise;
        color: white;
       /* font-weight: bold; */
     }
  } 

`;export{i as N,d as R};
