import { pageRoutes } from '../../lib/routes'
import { AnnotationIcon, GlobeAltIcon, LightningBoltIcon, ScaleIcon } from '@heroicons/react/outline'
import WhoWeAre from './WhoWeAre'
const metrics = [
  { id: 1, stat: '8K+', emphasis: 'Cares', rest: 'use laoreet amet lacus nibh integer quis.' },
  { id: 2, stat: '25K+', emphasis: 'Users', rest: 'lacus nibh integer quis.' },
  { id: 3, stat: '98%', emphasis: 'Customer satisfaction', rest: 'laoreet amet lacus nibh integer quis.' },
  { id: 4, stat: '12M+', emphasis: 'Sessions', rest: 'lacus nibh integer quis.' }
]

const people = [
  {
    name: 'ABC',
    role: 'Founder/CEO',
    imageUrl: 'https://iconarchive.com/download/i110127/thesquid.ink/free-flat-sample/owl.ico'
  },
  {
    name: 'DEF',
    role: 'Founder/CTO',
    imageUrl: 'https://iconarchive.com/download/i110127/thesquid.ink/free-flat-sample/owl.ico'
  },
  {
    name: 'GHI',
    role: 'Founder/COO',
    imageUrl: 'https://iconarchive.com/download/i110127/thesquid.ink/free-flat-sample/owl.ico'
  }
  // More people...
]

const features = [
  {
    name: 'ABC',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: GlobeAltIcon
  },
  {
    name: 'DEF',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: ScaleIcon
  },
  {
    name: 'HIJ',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: LightningBoltIcon
  },
  {
    name: 'KLM',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: AnnotationIcon
  }
]

const posts = [
  {
    title: 'ABC',
    href: '#',
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16'
  },
  {
    title: 'DEF',
    href: '#',
    description: 'Optio cum necessitatibus dolor voluptatum provident commodi et. Qui aperiam fugiat nemo cumque.',
    date: 'Mar 10, 2020',
    datetime: '2020-03-10'
  },
  {
    title: 'HIJ',
    href: '#',
    description:
      'Cupiditate maiores ullam eveniet adipisci in doloribus nulla minus. Voluptas iusto libero adipisci rem et corporis.',
    date: 'Feb 12, 2020',
    datetime: '2020-02-12'
  }
]

const About = () => (
  <>
    <WhoWeAre />

    <div className='relative bg-gray-900'>
      <div className='h-80 w-full absolute bottom-0 xl:inset-0 xl:h-full'>
        <div className='h-full w-full xl:grid xl:grid-cols-2'>
          <div className='h-full xl:relative xl:col-start-2'>
            <div
              aria-hidden='true'
              className='absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-gray-900 xl:inset-y-0 xl:left-0 xl:h-full xl:w-32 xl:bg-gradient-to-r'
            />
          </div>
        </div>
      </div>
      <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8 xl:grid xl:grid-cols-2 xl:grid-flow-col-dense xl:gap-x-8'>
        <div className='relative pt-12 pb-64 sm:pt-24 sm:pb-64 xl:col-start-1 xl:pb-24'>
          <h2 className='text-sm font-semibold text-red-300 tracking-wide uppercase'>What we have done...</h2>
          <p className='mt-3 text-3xl font-extrabold text-white'>We have transformed lives</p>
          <p className='mt-5 text-lg text-gray-300'>Users all over the country trust us to deliver results.</p>

          <div className='mt-12 grid grid-cols-1 gap-y-12 gap-x-6 sm:grid-cols-2'>
            {metrics.map(item => (
              <p key={item.id}>
                <span className='block text-2xl font-bold text-white'>{item.stat}</span>
                <span className='mt-1 block text-base text-gray-300'>
                  <span className='font-medium text-white'>{item.emphasis}</span> {item.rest}
                </span>
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>

    {/* People */}
    <div className='bg-white'>
      <div className='mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24'>
        <div className='grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-8'>
          <div className='space-y-5 sm:space-y-4'>
            <h2 className='text-3xl font-extrabold tracking-tight sm:text-4xl'>Meet our leadership</h2>
            <p className='text-xl text-gray-500'>
              Libero fames augue nisl porttitor nisi, quis. Id ac elit odio vitae elementum enim vitae ullamcorper
              suspendisse. Vivamus fringilla.
            </p>
          </div>
          <div className='lg:col-span-2'>
            <ul className='space-y-12 sm:grid sm:grid-cols-2 sm:gap-12 sm:space-y-0 lg:gap-x-8'>
              {people.map(person => (
                <li key={person.name}>
                  <div className='flex items-center space-x-4 lg:space-x-6'>
                    <img className='w-16 h-16 rounded-full lg:w-20 lg:h-20' src={person.imageUrl} alt='' />
                    <div className='font-medium text-lg leading-6 space-y-1'>
                      <h3>{person.name}</h3>
                      <p className='text-red-600'>{person.role}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>

    {/* Visoins */}
    <div className='py-12 bg-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='lg:text-center'>
          <h2 className='text-base text-red-600 font-semibold tracking-wide uppercase'>Vision</h2>
          <p className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl'>
            Empower the Vulnerable
          </p>
          <p className='mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto'>
            Our vision is to empower the highly vulnerable in the society and help them fulfil their dreams and attain
            their full potentials.
          </p>
        </div>

        <div className='mt-10'>
          <dl className='space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10'>
            {features.map(feature => (
              <div key={feature.name} className='relative'>
                <dt>
                  <div className='absolute flex items-center justify-center h-12 w-12 rounded-md bg-red-500 text-white'>
                    <feature.icon className='h-6 w-6' aria-hidden='true' />
                  </div>
                  <p className='ml-16 text-lg leading-6 font-medium text-gray-900'>{feature.name}</p>
                </dt>
                <dd className='mt-2 ml-16 text-base text-gray-500'>{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>

    <section className='bg-white overflow-hidden'>
      <div className='relative max-w-7xl mx-auto pt-20 pb-12 px-4 sm:px-6 lg:px-8 lg:py-20'>
        <svg
          className='absolute top-full left-0 transform translate-x-80 -translate-y-24 lg:hidden'
          width={784}
          height={404}
          fill='none'
          viewBox='0 0 784 404'
          aria-hidden='true'
        >
          <defs>
            <pattern
              id='e56e3f81-d9c1-4b83-a3ba-0d0ac8c32f32'
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits='userSpaceOnUse'
            >
              <rect x={0} y={0} width={4} height={4} className='text-gray-200' fill='currentColor' />
            </pattern>
          </defs>
          <rect width={784} height={404} fill='url(#e56e3f81-d9c1-4b83-a3ba-0d0ac8c32f32)' />
        </svg>

        <svg
          className='hidden lg:block absolute right-full top-1/2 transform translate-x-1/2 -translate-y-1/2'
          width={404}
          height={784}
          fill='none'
          viewBox='0 0 404 784'
          aria-hidden='true'
        >
          <defs>
            <pattern
              id='56409614-3d62-4985-9a10-7ca758a8f4f0'
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits='userSpaceOnUse'
            >
              <rect x={0} y={0} width={4} height={4} className='text-gray-200' fill='currentColor' />
            </pattern>
          </defs>
          <rect width={404} height={784} fill='url(#56409614-3d62-4985-9a10-7ca758a8f4f0)' />
        </svg>

        <div className='relative lg:flex lg:items-center'>
          <div className='hidden lg:block lg:flex-shrink-0'>
            <img
              className='h-64 w-64 rounded-full xl:h-80 xl:w-80'
              src='https://i.dailymail.co.uk/i/pix/2015/10/21/13/2D9EA45700000578-0-image-a-17_1445428982842.jpg'
              alt=''
            />
          </div>

          <div className='relative lg:ml-10'>
            <svg
              className='absolute top-0 left-0 transform -translate-x-8 -translate-y-24 h-36 w-36 text-red-200 opacity-50'
              stroke='currentColor'
              fill='none'
              viewBox='0 0 144 144'
              aria-hidden='true'
            >
              <path
                strokeWidth={2}
                d='M41.485 15C17.753 31.753 1 59.208 1 89.455c0 24.664 14.891 39.09 32.109 39.09 16.287 0 28.386-13.03 28.386-28.387 0-15.356-10.703-26.524-24.663-26.524-2.792 0-6.515.465-7.446.93 2.327-15.821 17.218-34.435 32.11-43.742L41.485 15zm80.04 0c-23.268 16.753-40.02 44.208-40.02 74.455 0 24.664 14.891 39.09 32.109 39.09 15.822 0 28.386-13.03 28.386-28.387 0-15.356-11.168-26.524-25.129-26.524-2.792 0-6.049.465-6.98.93 2.327-15.821 16.753-34.435 31.644-43.742L121.525 15z'
              />
            </svg>
            <blockquote className='relative'>
              <div className='text-2xl leading-9 font-medium text-gray-900'>
                <p>LifeCorp has my my life amazing!.</p>
              </div>
              <footer className='mt-8'>
                <div className='flex'>
                  <div className='flex-shrink-0 lg:hidden'>
                    <img
                      className='h-12 w-12 rounded-full'
                      src='https://i.dailymail.co.uk/i/pix/2015/10/21/13/2D9EA45700000578-0-image-a-17_1445428982842.jpg'
                      alt=''
                    />
                  </div>
                  <div className='ml-4 lg:ml-0'>
                    <div className='text-base font-medium text-gray-900'>John Doe</div>
                    <div className='text-base font-medium text-red-600'>User</div>
                  </div>
                </div>
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>

    {/* Reports + News Letters */}
    <div className='bg-white pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8'>
      <div className='relative max-w-lg mx-auto divide-y-2 divide-gray-200 lg:max-w-7xl'>
        <div>
          <h2 className='text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl'>Reports + Newsletters</h2>
          <div className='mt-3 sm:mt-4 lg:grid lg:grid-cols-2 lg:gap-5 lg:items-center'>
            <p className='text-xl text-gray-500'>Get weekly reports in your inbox.</p>
            <form className='mt-6 flex flex-col sm:flex-row lg:mt-0 lg:justify-end'>
              <div>
                <label htmlFor='email-address' className='sr-only'>
                  Email address
                </label>
                <input
                  id='email-address'
                  name='email-address'
                  type='email'
                  autoComplete='email'
                  required
                  className='appearance-none w-full px-4 py-2 border border-gray-300 text-base rounded-md text-gray-900 bg-white placeholder-gray-500 focus:outline-none focus:ring-red-500 focus:border-red-500 lg:max-w-xs'
                  placeholder='Enter your email'
                />
              </div>
              <div className='mt-2 flex-shrink-0 w-full flex rounded-md shadow-sm sm:mt-0 sm:ml-3 sm:w-auto sm:inline-flex'>
                <button
                  type='button'
                  className='w-full bg-red-600 px-4 py-2 border border-transparent rounded-md flex items-center justify-center text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:w-auto sm:inline-flex'
                >
                  Notify me
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className='mt-6 pt-10 grid gap-16 lg:grid-cols-2 lg:gap-x-5 lg:gap-y-12'>
          {posts.map(post => (
            <div key={post.title}>
              <p className='text-sm text-gray-500'>
                <time dateTime={post.datetime}>{post.date}</time>
              </p>
              <a href='#' className='mt-2 block'>
                <p className='text-xl font-semibold text-gray-900'>{post.title}</p>
                <p className='mt-3 text-base text-gray-500'>{post.description}</p>
              </a>
              <div className='mt-3'>
                <a href={post.href} className='text-base font-semibold text-red-600 hover:text-red-500'>
                  Read full story
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </>
)

export default About
