import RepositoryItem from './RepositoryItem'
import repositoryStyles from '../styles/Repository.module.css'

const RepositoryList = ({ repositories }) => {
  return (
    <div className={repositoryStyles.grid}>
      {repositories.map((repository) => (
        <RepositoryItem repository={repository} key={repository.id} />
      ))}
    </div>
  )
}

export default RepositoryList
