import React from "react";
import { Posting } from './posting.js'

let craigPost = require('./postings')

let postList = craigPost.postings.map((data, i) => {
  return <Posting data={data} key={i} />
})
// console.log(postList[0].props.data)

export const Gallery = () => {
    return (
        <div>
            <h1>Gallery</h1>
            { postList }
        </div>
    )
}