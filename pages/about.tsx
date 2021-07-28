import About from '../components/About'
import BaseLayout from '../layouts/Base'
import { pageRoutes } from '../lib/routes'

export default function AboutPage() {
  return (
    <BaseLayout
      title='Virtual Coffee'
      selectedNavKey='about'
      iconHref='/ico/wave.ico'
      description='LifeCorp connects you to carers'
      canonical={pageRoutes.home}
    >
      <About />
    </BaseLayout>
  )
}
