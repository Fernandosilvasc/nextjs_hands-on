import Link from 'next/link'

import Login from './Login'
import navStyles from '../styles/Nav.module.css'

const Nav = () => {
  return (
    <nav className={navStyles.nav}>
      <ul>
        <li>
          <Link href='/'>Home</Link>
        </li>
        <li>
          <Link href='/blog'>Blog</Link>
        </li>
        <li>
          <Link href='/about'>About</Link>
        </li>
      </ul>
      <Login />
    </nav>
  )
}

export default Nav
