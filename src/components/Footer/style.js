import styled from 'styled-components'

export const FooterWrapper=styled.div`
    width:100%;
    height:2.5rem;
    background:#e9d8d8;
    position:fixed;
    bottom: 0;
    left:0;
    display:flex;
    a{
        //弹性布局 文字 图标
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        text-decoration: none;
        color: grey;
        font-size:12px;
        line-height: 0.1rem;
        //父级选择器
        &.active{
            color: #fe5553;
            font-weight: bold;
        }
        //会影响到i span 标签
        i{
            font-size: 1.2em;
        }
    }

`