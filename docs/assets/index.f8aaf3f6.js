import{s as a,l as u,_ as n,d as o,j as e,N as s}from"./index.6f8307b2.js";import{T as t}from"./index.e36303d4.js";import{s as r}from"./global-style.694aa35e.js";const c=a.div`
  padding:0 0.4rem;
    .nav{
        border-bottom: 0.1rem solid ${r["border-color"]};
        padding: 0;
        margin: 0;
    }
    .text1{
        border-bottom: 0.1rem solid ${r["border-color"]};
        margin-top: 1rem;
        height: 2.75rem;
        
    }
    .text2{
        border-bottom: 0.1rem solid ${r["border-color"]};
        margin-top: 1rem;
    }
    .topic-classify{
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 14px;
        border-bottom: 0.1rem solid ${r["border-color"]};
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

 `;function m(){const i=u();return n.exports.useState(),o(c,{children:[e(s,{back:"",onBack:()=>i(-1),className:"nav",children:"\u7533\u8BF7\u8BDD\u9898"}),e(t,{placeholder:"#\u7ED9\u8BDD\u9898\u8D77\u4E00\u4E2A\u597D\u542C\u7684\u540D\u5B57#",showCount:!0,rows:1,maxLength:15,className:"text1"}),e(t,{placeholder:"\u7ED9\u8BDD\u9898\u52A0\u4E00\u6BB5\u63CF\u8FF0\uFF0C\u5438\u5F15\u66F4\u591A\u7528\u6237\u53C2\u4E0E",showCount:!0,rows:4,maxLength:45,className:"text2"}),o("div",{className:"topic-classify",children:[e("span",{children:"\u8BF7\u9009\u62E9\u5206\u7C7B"}),e("span",{children:">"})]}),o("div",{className:"topic-bandage",children:[e("p",{children:"\u8BDD\u9898\u56FE\u6807"}),o("div",{className:"upload1",children:[e("i",{className:"fa fa-camera"}),e("span",{children:"\u4E0A\u4F20\u56FE\u7247"})]}),e("p",{className:"suggest",children:"\u5EFA\u8BAE\u56FE\u7247\u6BD4\u4F8B1:1"})]}),o("div",{className:"topic-picture",children:[o("p",{children:["\u8BDD\u9898\u80CC\u666F",e("span",{children:"\uFF08\u9009\u586B\uFF09"})]}),o("div",{className:"upload2",children:[e("i",{className:"fa fa-camera"}),e("span",{children:"\u4E0A\u4F20\u56FE\u7247"})]}),e("p",{className:"suggest",children:"\u5EFA\u8BAE\u56FE\u7247\u6BD4\u4F8B16:9"})]}),o("div",{className:"topic-place",children:[e("p",{children:"\u9002\u7528\u8303\u56F4"}),o("div",{className:"topic-radio",children:[e("input",{type:"radio",name:"contry"}),e("label",{for:"contry",children:"\u5168\u56FD"})]}),o("div",{children:[e("input",{type:"radio",name:"school"}),e("label",{for:"school",children:"\u4EC5\u9650\u672C\u6821"})]}),e("div",{className:"topic-bottom",children:e("p",{children:"\u63D0\u4EA4\u7533\u8BF7"})})]})]})}export{m as default};
