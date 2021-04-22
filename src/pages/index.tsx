import Header from '../components/Header'
import ProjectList from '../components/RepositoryList'

import api from '../services/github_api'


export default function Home({repositories}) {
  return (
    <>
      <Header />
      <ProjectList repositories={repositories} />
    </>
  )
}

export const getStaticProps = async () => {
  const { data } = await api.get( '/users/Fernandosilvasc/repos?type=public&sort=pushed&direction=desc')

  return {
    props: {
      repositories: data,
    },
  }
}
