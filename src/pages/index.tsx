import type { NextPage } from 'next'
import Head from 'next/head' 
import UpcomingReleases from 'src/views/LatestRelease/'

const Home: NextPage = () => {
 
  return (
    <div>
      <Head>
        <title>Halogenn</title>
      </Head>
      <main>
        <UpcomingReleases  />
      </main>
    </div>
  )
}

export default Home
