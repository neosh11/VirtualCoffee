import { pageRoutes } from '../../../lib/routes'
import WhoWeAre from '../../About/WhoWeAre'

export default function HomeIntro() {
  return (
    <div>
      <div className='mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-24 lg:text-left'>
        <div className='px-4 lg:w-1/2 sm:px-8 xl:pr-16'>
          <h1 className='text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl'>
            Virtual Coffee
          </h1>
          <h2 className='block text-greenie xl:inline'>HBS CORe</h2>

          <p className='mt-3 max-w-md mx-auto text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl'>
            Sign up to meet some people from your cohort on Harvard CORe!
          </p>
          <div className='mt-10 sm:flex sm:justify-center lg:justify-start'>
            <div className='rounded-md shadow'>
              <a
                href={pageRoutes.about}
                className='w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-greenie hover:bg-greenie md:py-4 md:text-lg md:px-10'
              >
                Learn More
              </a>
            </div>
            <div className='mt-3 rounded-md shadow sm:mt-0 sm:ml-3'>
              <a
                href={pageRoutes.contact}
                className='w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-greenie bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10'
              >
                Start!
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
