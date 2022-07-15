import styled from 'styled-components'

export const TopicWrapper = styled.div`
    padding: 0.6rem;
    line-height: 1.2rem;
    background-color: white;
    margin-top: 2.6rem; 
    a{
            text-decoration: none;
            color: grey;
            font-size: 0.6rem;
        }
    .topic-title{
       
        display: flex;
        justify-content: space-between;
        img{
            width: 3rem;
            height: 1.2rem;
        }
    }
    .topic{
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
    .bandge{
        background-color:blue;
        color: white;
        border-radius: 0.2rem;
        width: 0.8rem;
        height: 0.8rem;
        line-height: 0.8rem;
        text-align: center;
        font-size: 10px;
        display: inline-block;
        margin-left: 0.1rem;
    }
    .BR{
        background-color: red;
    }
`