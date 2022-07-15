import styled from "styled-components";

export const Container =styled.div`
    
    //变形的基点
    transform-origin: right bottom;
    //csstransition 过渡类型给children
    &.fly-enter,&.fly-appear{
        opacity: 0;
        //translate3d的z轴会使用GPU 加速
        transform: translate3d(100%,0,0);
    }
    &.fly-enter-active,&.fly-apply-active{
        opacity: 1;
        transition: all .3s;
        transform: translate3d(0,0,0);
    }
    &.fly-exit{
        opacity: 1;
        transform: translate3d(0,0,0);
    }
    &.fly-exit-active{
        opacity: 0;
        transition: all .3s;
        transform: translate3d(100%,0,0);
    }
`