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
  title: 'ITBR-Canada',
  keywords: 'web development, programming, immigration',
  description: 'We are ITBR Canada, a community of Brazilians who work in IT in Canada and we aim to bring together Brazilians who are here or who are planning to migrate here. Our goal is to spread knowledge about the steps to immigration and also to hold technical events to bring the community together.',
}

export default Meta
