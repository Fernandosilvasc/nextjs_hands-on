import { useEffect } from 'react'

import { GetStaticProps, GetStaticPaths } from 'next';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/client'

import api from '../../services/github_api'

import Link from 'next/link'

import Meta from '../../components/Meta'

import repositoryStyles from '../../styles/Repository.module.css'

const repository = ({ repository }) => {
  const { isFallback } = useRouter()
  const router = useRouter()
  const [ session ] = useSession()

  if (isFallback) {
    return <p>Loading...</p>;
  }

  useEffect(() => {
    !session && router.push('/')
  },[])

  if (session) {
    return (
      <>
        <Meta title={repository.name} description={repository.description} />
        <div className={repositoryStyles.card}>
          <h1>{repository.name}</h1>
          {repository.description ? (
            <p>{repository.description}</p>
          ) : (
            <p>
            I am working on it, the description will be provided
            soon.
          </p>
          )} 
        </div>
        <div className={repositoryStyles.link_box}>
          <a href={repository.html_url} target="_blank" className={repositoryStyles.link_repo}>GitHub source</a>
          <Link href='/'>Go Back</Link>
        </div>
      </>
    )
  }
  
  return (
    <div>
      <p>Loading...</p>
    </div>
  )
}


export const getStaticPaths: GetStaticPaths = async () => {

  const { data } = await api.get( '/users/Fernandosilvasc/repos')

  const paths = data.map(repo => {
    return { params: { id: repo.name } }
  });

  return {
    paths,
    fallback: true, 
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { id: repositoryName } = context.params;

  const { data } = await api.get( `/repos/Fernandosilvasc/${repositoryName}`)
  
  return {
    props: {
      repository: data,
    },
    revalidate: 10,
  }
}


export default repository
