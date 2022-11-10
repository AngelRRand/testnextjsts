import React from 'react'

const Post = ({params}:any) => {

    const {id} = params
  return (
    <div>Post {id}</div>
  )
}

export default Post