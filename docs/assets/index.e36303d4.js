import{_ as r,m as y,x as _,u as b,w as R,d as j,j as g}from"./index.6f8307b2.js";const A=!1;function P(l,i){A&&console.error(`[antd-mobile: ${l}] ${i}`)}const h="adm-text-area",w={rows:2,showCount:!1,autoSize:!1,defaultValue:""},C=r.exports.forwardRef((l,i)=>{const e=y(w,l),{autoSize:a,showCount:u,maxLength:n}=e,[c,d]=_(Object.assign(Object.assign({},e),{value:e.value===null?"":e.value}));e.value===null&&P("TextArea","`value` prop on `TextArea` should not be `null`. Consider using an empty string to clear the component.");const s=r.exports.useRef(null);r.exports.useImperativeHandle(i,()=>({clear:()=>{d("")},focus:()=>{var t;(t=s.current)===null||t===void 0||t.focus()},blur:()=>{var t;(t=s.current)===null||t===void 0||t.blur()},get nativeElement(){return s.current}})),b(()=>{if(!a)return;const t=s.current;if(!t)return;t.style.height="auto";let o=t.scrollHeight;if(typeof a=="object"){const m=window.getComputedStyle(t),x=parseFloat(m.lineHeight);a.minRows&&(o=Math.max(o,a.minRows*x)),a.maxRows&&(o=Math.min(o,a.maxRows*x))}t.style.height=`${o}px`},[c,a]);const f=r.exports.useRef(!1);let p;const v=[...c].length;return typeof u=="function"?p=u(v,n):u&&(p=g("div",{className:`${h}-count`,children:n===void 0?v:v+"/"+n})),R(e,j("div",{className:h,children:[g("textarea",{ref:s,className:`${h}-element`,rows:e.rows,value:c,placeholder:e.placeholder,onChange:t=>{let o=t.target.value;n&&!f.current&&(o=[...o].slice(0,n).join("")),d(o)},id:e.id,onCompositionStart:t=>{var o;f.current=!0,(o=e.onCompositionStart)===null||o===void 0||o.call(e,t)},onCompositionEnd:t=>{var o;if(f.current=!1,n){const m=t.target.value;d([...m].slice(0,n).join(""))}(o=e.onCompositionEnd)===null||o===void 0||o.call(e,t)},autoComplete:e.autoComplete,autoFocus:e.autoFocus,disabled:e.disabled,readOnly:e.readOnly,name:e.name,onFocus:e.onFocus,onBlur:e.onBlur,onClick:e.onClick}),p]}))});C.defaultProps=w;var T=C;export{T};
