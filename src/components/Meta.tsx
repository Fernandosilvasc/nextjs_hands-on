import Head from 'next/head'

const Meta = ({ title, keywords, description }) => {
  return (
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name='keywords' content={keywords} />
      <meta name='description' content={description} />
      <meta charSet='utf-8' />
      <link rel='icon' href='/favicon.ico' />
      <title>{title}</title>
    </Head>
  )
}

Meta.defaultProps = {
  title: 'NextJS_Hands-on',
  keywords: 'web development, programming, immigration',
  description: `In our eleventh meeting we will talk about some of the most used frameworks for front-end development.
  We will see in practice an application with Next.js. An open source React front-end development web framework that enables features such as server-side rendering and generation of static websites for React-based web applications`,
}

export default Meta
