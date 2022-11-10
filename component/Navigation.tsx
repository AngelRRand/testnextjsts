import Link from 'next/link'
import React from 'react'
import { Container } from '../interface/types'
import styles from './Navigation.module.css'

const links = [{
  label: 'Home',
  route: '/'
},{
  label: 'About',
  route: '/about'
},{
  label: 'Post',
  route: '/post'
}]
const Navigation:React.FC<Container> = ({a}) => {
  return (
    <header className={`${styles.container} ${styles[a]}`}>
      <nav>
        <ul className={styles.ulList}>
            {
              links.map(({label, route}) => (
                <li key={route}>
                  <Link className={styles.text} href={route}>
                    {label}
                  </Link>
                </li>
              ))
            }
        </ul>

      </nav>
    </header>
  )
}

export default Navigation