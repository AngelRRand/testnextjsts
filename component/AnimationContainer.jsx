'use client'

import { AnimatePresence } from 'framer-motion';

const AnimationContainer = ({children}) => {
  return (
    <AnimatePresence>
        {children}
    </AnimatePresence>
  )
}

export default AnimationContainer