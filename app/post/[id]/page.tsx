import React from 'react'

const Post = ({ params }: any) => {

    const { id } = params
    let saludo = ''
    if (id === 'horacio') {
        saludo = 'QUE ONDA ORASIOOO'
        return (
            <div>Post {saludo}</div>
        )
    }
    else{
        return (
            <div>Post {id}</div>
        )
    }
}

export default Post