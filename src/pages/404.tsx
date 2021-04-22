import Link from 'next/link'
import Image from 'next/image'
import PageNotFoundStyles from '../styles/PageNotFound.module.css'

const pageNotFound = () => {
  return (
    <div className={PageNotFoundStyles.container}>
       <Image
        src="/warnIllustration.png"
        alt="404 illustration"
        width={300}
        height={300}
      />
      <p className={PageNotFoundStyles.warn}>Sorry, something gets wrong!</p>
      <Link href='/'>Go Back</Link>

    </div>
  )
}

export default pageNotFound
