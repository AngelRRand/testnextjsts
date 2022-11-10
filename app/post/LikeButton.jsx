'use client'

import { useState } from 'react'

export const LikeButton = ({id}) => {
    const [liked, setLiked] = useState(false)
    console.log('a')
    return (
        <button onClick={()=>setLiked(!liked)}>
            {liked ? 'Ta lendoo' : 'Meh'}
        </button>
    )
}

