import { ReactNode } from 'react'
import Footer from '../../components/utils/Footer'
import HeaderTW from '../../components/utils/HeaderTW'
import SEOMeta from '../../components/utils/SEO'
import { navKeys } from '../../lib/types'

interface Props {
  children: ReactNode
  title: string
  description: string
  selectedNavKey: navKeys
  iconHref?: string
  canonical: string
}

const BaseLayout = ({ children, title, description, selectedNavKey, iconHref, canonical }: Props) => (
  <>
    <SEOMeta title={title} canonical={canonical} description={description} iconHref={iconHref} />
    <div className='relative bg-gray-50'>
      <HeaderTW  selectedNavKey={selectedNavKey}/>
      <main className='lg:relative'>{children}</main>
      <Footer />
    </div>
  </>
)

export default BaseLayout
