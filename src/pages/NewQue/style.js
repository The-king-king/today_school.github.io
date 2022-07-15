import styled from 'styled-components'
import style from '@/assets/global-style'

export const NewQuewrapper = styled.div`
    background-color: ${style["border-color"]};
    height: 33.5rem;
    textarea{
        font-size: 14px;
    }
    .nav{
        border-bottom: 0.1rem solid ${style["border-color"]};
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
       border-bottom: 0.1rem solid ${style["border-color"]};
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
`