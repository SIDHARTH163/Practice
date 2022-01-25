import React from 'react'

export default function News_row(props) {
    return (
        <div className=''>
            <h1 onClick={()=>{props.changestate(props.title)}}>News row , {props.title}</h1>
        </div>
    )
}
