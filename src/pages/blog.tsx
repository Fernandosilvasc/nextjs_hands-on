import { server } from '../config'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/client'
import ArticleList from '../components/ArticleList'
import { useEffect } from 'react'

export default function Home({ articles }) {
  const router = useRouter()
  const [session] = useSession();

  useEffect(() => {
    !session && router.push('/')
  }, [])

  if(!session) {
    return (
      <div><p>loading...</p></div>
    )
  }

  return (
    <div>
      <ArticleList articles={articles} />
    </div>
  )
}

export const getServerSideProps = async () => {
  const res = await fetch(`${server}/api/articles`)
  const articles = await res.json()

  return {
    props: {
      articles,
    },
  }
}
