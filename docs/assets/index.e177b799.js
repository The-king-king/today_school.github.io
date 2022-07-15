import{s as p,k as h,l as m,j as e,c as g,d as n,N as b,H as f,I as w}from"./index.6f8307b2.js";import{T as E}from"./lodash.cfa28356.js";import{T as o}from"./index.e36303d4.js";import{s as u}from"./global-style.694aa35e.js";import{R as x}from"./style.736a42a3.js";const F=p.div`
    background-color: ${u["border-color"]};
    height: 33.5rem;
    textarea{
        font-size: 14px;
    }
    .nav{
        border-bottom: 0.1rem solid ${u["border-color"]};
        background-color: white;
    }
    .que-context{
        padding: 0.4rem;
        background-color: white;
        p{
            margin-top: 0;
            font-weight: bold;
            font-size: 14px;
        }
        margin-bottom: 0.3rem;
    }
    .que-describe{
        padding: 0.4rem;
        background-color: white;
        p{
            margin-top: 0;
            font-weight: bold;
            font-size: 14px;
        }
        margin-bottom: 0.3rem;
    }
    .que-way{
       padding-left: 0.4rem;
       padding-right: 0.4rem;
       display: flex;
       justify-content: space-between;
       background-color: white;
       height: 2.5rem;
       align-items: center;
       span{
            font-weight: bold;
            font-size: 14px;
       }
       margin-bottom: 0.5rem;
    }
    .que-circle{
        padding-left: 0.4rem;
       padding-right: 0.4rem;
       display: flex;
       justify-content: space-between;
       background-color: white;
       border-bottom: 0.1rem solid ${u["border-color"]};
       height: 2.5rem;
       align-items: center;
       span{
            font-weight: bold;
            font-size: 14px;
       }
       
    }
    .que-tag{
      padding-left: 0.4rem;
       padding-right: 0.4rem;
       display: flex;
       justify-content: space-between;
       background-color: white;
       height: 2.5rem;
       align-items: center;
       span{
            font-weight: bold;
            font-size: 14px;
       }
    }
`;function B(t){const a=m(),{submit:r,queInputValue:i}=t,{changeQueInputValueDispatch:s,getAddQueDispatch:c}=t,l=e(x,{children:e("button",{className:g("f-color",{active:r}),onClick:()=>{c(),E.show("\u53D1\u5E03\u6210\u529F\uFF01")},children:"\u53D1\u5E03"})});return console.log(i,"------------"),n(F,{children:[e(b,{back:"",onBack:()=>a(-1),right:l,className:"nav",children:"\u63D0\u95EE"}),n("div",{className:"que-context",children:[e("p",{children:"\u95EE\u9898\u5185\u5BB9"}),e(o,{placeholder:"\u8BF7\u5199\u4E0B\u4F60\u7684\u95EE\u9898~,\u96504~45\u5B57",showCount:!0,maxLength:45,onChange:d=>s(d)})]}),n("div",{className:"que-describe",children:[e("p",{children:"\u95EE\u9898\u63CF\u8FF0"}),e(o,{placeholder:"\u9009\u586B~\u5BF9\u95EE\u9898\u7684\u7B80\u77ED\u63CF\u8FF0,\u53EF\u66F4\u5FEB\u83B7\u5F97\u56DE\u7B54",showCount:!0,row:9,maxLength:200})]}),n("div",{className:"que-way",children:[e("span",{children:"\u63D0\u95EE\u65B9\u5F0F"}),e("span",{children:"\u514D\u8D39\u63D0\u95EE >"})]}),n("div",{className:"que-circle",children:[e("span",{children:"\u5708\u5B50"}),e("span",{children:">"})]}),n("div",{className:"que-tag",children:[e("span",{children:"\u6807\u7B7E"}),e("span",{children:">"})]})]})}const v=t=>({queInputValue:t.college.queInputValue,submit:t.college.submit}),D=t=>({changeQueInputValueDispatch(a){t(f(a))},getAddQueDispatch(){t(w())}});var I=h(v,D)(B);export{I as default};
