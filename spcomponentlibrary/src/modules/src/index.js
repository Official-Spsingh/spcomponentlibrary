import React from 'react'

const Test1 = (props) => {
    return (
        <div style={{ background: props.bgColor ? props.bgColor : "yellow" }}>
            <h1>{props?.title}</h1>
            <p>{props?.paragraph}</p>
        </div>
    )
}

export default Test1
