import headerStyles from '../styles/Header.module.css'

const Header = () => {
  return (
    <div className={headerStyles.container}>
      <h1 className={headerStyles.title}>
        Welcome to <span><a href="https://nextjs.org" target="_blank">Next.js!</a></span>
      </h1>
      <h3 className={headerStyles.subTitle}>
        GitHub Repos by <span>FCS</span>
      </h3>
    </div>
  )
}

export default Header
