/* import { motion } from 'framer-motion' */
import React from 'react'
import styles from './about.module.css'
const AboutPage = () => {
  return (
    <div
      className={styles.container}
      /* initial={{ scale: 0, x: -3000 }}
      animate={{
        scale: 1,
        x: 0,
        transition: { duration: 1.5, type: "spring", },
      }} */
    >
      <h1 className={styles.title}>About</h1>
    </div>
  )
}

export default AboutPage