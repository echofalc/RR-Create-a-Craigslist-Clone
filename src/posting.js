import React from "react";


export const Posting = (props) => {
    console.log(props.data)
    return (
        <div>
            <h1> { props.data.title }</h1>
            <h2>{ props.data.price }</h2>
            <img src={ props.data.imageURL }></img>
            <a>{ props.data.description }</a>
        </div>
    )
}

