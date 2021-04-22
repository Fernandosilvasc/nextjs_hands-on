import Link from 'next/link'
import repositoryStyles from '../styles/Repository.module.css'

const RepositoryItem = ({ repository }) => {
  return (
    <Link href={`/repository/${repository.name}`}>
      <a className={repositoryStyles.card}>
        <h3>{repository.name} &rarr;</h3>
        {repository.description ? (
          <p>{repository.description}</p>
        ) : (
          <p>
          I am working on it, the description will be provided
          soon.
        </p>
        )} 
      </a>
    </Link>
  )
}

export default RepositoryItem
