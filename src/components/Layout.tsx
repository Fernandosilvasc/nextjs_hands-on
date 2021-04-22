import Meta from './Meta'
import Nav from './Nav'
import styles from '../styles/Layout.module.css'




const Layout = ({children}) => {
  return (
    <>
    <Meta />
    <div className={styles.container}>
      <Nav />
      <main className={styles.main}>
        {children}
      </main>
    </div>
    </>
  )
}

export default Layout
