import styled  from "styled-components";

export const Wrapper=styled.div`

`
export const TabWrapper=styled.div`
    margin-top: 0.1rem;
    z-index: 997;
    background: white;
    border-bottom:0.05rem solid #f9f9f9;
    height:2rem;
    line-height: 2rem;
    width: 100%;
    position: sticky;
    top: 3.1rem;
`
export const Tab =styled.ul`
    font-size: 14px;
    color: grey;
    list-style-type:none;
    margin: 0;
    padding-left: 0.5rem;
`
export const TabList=styled.li`
    float: left;
    margin-right: 0.75rem;
    position: relative;
    &.active{
        color: black;
        font-weight:bold
    }
    &.active:after{
        content: '';
        width: 50%;
        position: absolute;
        height: 0.2rem;
        background: red;
        border-radius: 30%;
        top: 1.6rem;
        left: 15%;
    }
`