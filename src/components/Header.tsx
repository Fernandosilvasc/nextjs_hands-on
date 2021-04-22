import headerStyles from '../styles/Header.module.css'

const Header = () => {
  return (
    <div>
      <h1 className={headerStyles.title}>
        {/* <span>ITBR</span> CANADA */}
        Welcome to <span><a href="https://nextjs.org" target="_blank">Next.js!</a></span>
      </h1>
      {/* <p className={headerStyles.description}>
        Keep up to date with the latest web dev news
      </p> */}
    </div>
  )
}

export default Header
