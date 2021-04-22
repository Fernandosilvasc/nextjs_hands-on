import headerStyles from '../styles/Header.module.css'

const Header = () => {
  return (
    <div>
      <h1 className={headerStyles.title}>
        Welcome to <span><a href="https://nextjs.org" target="_blank">Next.js!</a></span>
      </h1>
    </div>
  )
}

export default Header
