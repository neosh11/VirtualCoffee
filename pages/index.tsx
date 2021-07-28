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
      description='LifeCorp connects you to carers'
      canonical={pageRoutes.home}
    >
      <HomeIntro />
      {/* <Partners /> */}
    </BaseLayout>
  )
}
