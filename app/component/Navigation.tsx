import Link from 'next/link'
import React from 'react'


const links = [{
  label: 'Home',
  route: '/'
},{
  label: 'About',
  route: '/about'
}]
const Navigation = () => {
  return (
    <header>
      <nav>

        <ul>
          <li>
            {
              links.map(({label, route}) => (
                <li key={route}>
                  <Link href={route}>
                    {label}
                  </Link>
                </li>
              ))
            }
          </li>
        </ul>

      </nav>
    </header>
  )
}

export default Navigation