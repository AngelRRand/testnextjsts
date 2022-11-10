import React from 'react'
import axios from 'axios'
import { Photos } from '../../interface/types'
function getPosts() {
  return axios.get<Photos>('https://jsonplaceholder.typicode.com/photos')
}

interface Arrayy{
  id: number
  albumId:number
  url: string
  title: string
  thumbnailUrl: string
}
const Postpage = async () => {
  const posts = await getPosts()
  return (
    <div>
      {posts.slice(0, 5).map(post => (
          <article key={post.id}>
            <h2>{post.title}</h2>
          </article>
        ))}
    </div>
  )
}

export default Postpage