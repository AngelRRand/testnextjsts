import React from 'react'
import axios from 'axios'
/* import { Photos } from '../../interface/types' */
function getPosts() {
    return fetch('https://jsonplaceholder.typicode.com/photos').then(res => res.json())
}

/* interface Arrayy{
  id: number
  albumId:number
  url: string
  title: string
  thumbnailUrl: string
} */
const ListPost = async () => {
    const posts = await getPosts()
    return posts.slice(0, 5).map(post => (
        <article key={post.id}>
            <h2>{post.title}</h2>

        </article>
    ))

}

export default ListPost