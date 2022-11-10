import React from 'react'
import {LikeButton} from './LikeButton'
function getPosts() {
    return fetch('https://jsonplaceholder.typicode.com/photos').then(res => res.json())
}

const ListPost = async () => {
    const posts = await getPosts()

    
    return posts.slice(0, 5).map(post => (
        <article key={post.id}>
            <h2>{post.title}</h2>
            <LikeButton id={post.id}/>
        </article>
    ))

}

export default ListPost