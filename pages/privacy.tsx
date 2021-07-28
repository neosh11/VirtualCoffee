import Head from 'next/head'

import HomeIntro from '../components/Home/Intro'

import Partners from '../components/Home/Partners'
import BaseLayout from '../layouts/Base'
import { pageRoutes } from '../lib/routes'

export default function Home() {
  return (
    <BaseLayout
      title='Virtual Coffee'
      selectedNavKey='home'
      iconHref='/ico/wave.ico'
      description='Privacy + Deletion'
      canonical='/privacy'
    >
      Contact neosh11@gmail.com to delete data. Only your name/id is stored with us.
    </BaseLayout>
  )
}
