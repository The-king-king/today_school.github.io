import React,{useState} from 'react'

// const Tour = ({id,name,image,info,price}) => {
    
//     const [readMore,setReadMore] = useState(false)

//     return (
//         <article className="single-tour">
//             <img src={image} alt={name}/>
//             <footer>
//                 <div className="tour-info">
//                     <h4>{name}</h4>
//                     <h4 className="tour-price">￥{price}</h4>
//                 </div>

//                 <p> { readMore ? info : `${info.substring(0,200)}...` }

//                     <button onClick={() => setReadMore(!readMore)}> { readMore ? '隐藏内容' : '了解更多' }</button>
//                 </p>
//             </footer>
//         </article>
//     )
// }

const Tour = () => {
    
    const [readMore,setReadMore] = useState(false)
    let info='jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj'
    return (
        <article className="single-tour" style={{width:'50px'}}>
            {/* <img src={image} alt={name}/> */}
            <footer >
                <div className="tour-info">
                    {/* <h4>{name}</h4> */}
                    {/* <h4 className="tour-price">￥{price}</h4> */}
                </div>

                <p style={{whiteSpace:'break-all'}}> { readMore ? info : `${info.substring(0,200)}...` }

                    <button onClick={() => setReadMore(!readMore)}> { readMore ? '隐藏内容' : '了解更多' }</button>
                </p>
            </footer>
        </article>
    )
}

export default Tour