'use client'

import { useState } from 'react';
import { motion } from 'framer-motion';


export const LikeButton = ({ id }) => {
    const [liked, setLiked] = useState(false)
    return (
        <motion.button
            initial={{ opacity: 0}}
            animate={{
                opacity:1,
                transition: { duration: 4000, type: "spring", },
            }}
            onClick={() => setLiked(!liked)}>
            {liked ? 'Ta lendoo' : 'Meh'}
        </motion.button>
    )
}

