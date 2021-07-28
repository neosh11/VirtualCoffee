/* This example requires Tailwind CSS v2.0+ */
import { Fragment, ReactNode, useState } from 'react'
import { Popover, Transition } from '@headlessui/react'

import Image from 'next/image'
import VirtualCoffeeLogo from '../../images/LifeCorpusLogo.png'

import {
  BookmarkAltIcon,
  CalendarIcon,
  ChartBarIcon,
  CursorClickIcon,
  MenuIcon,
  PhoneIcon,
  PlayIcon,
  RefreshIcon,
  ShieldCheckIcon,
  SupportIcon,
  ViewGridIcon,
  XIcon
} from '@heroicons/react/outline'
import { ChevronDownIcon } from '@heroicons/react/solid'
import { pageRoutes } from '../../../lib/routes'
import { headerText } from '../../../lib/constants/headers'
import { navKeys } from '../../../lib/types'
import CustomModal from '../CustomModal'
import RegistrationDialogue from '../Registration'

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}

export default function HeaderTW(props: { selectedNavKey: navKeys }) {
  const [open, setOpen] = useState(false)

  const DesktopHref = (p: { name: string; href: string; navKey: navKeys }) => {
    return (
      <a
        href={p.href}
        className={`inline-flex items-center text-base font-medium text-white hover:text-gray-100 ${
          props.selectedNavKey === p.navKey ? 'text-greenie' : 'text-white'
        }`}
      >
        {p.name}
      </a>
    )
  }

  return (
    <>
      <Popover className='relative shadow bg-greenie'>
        {({ open }) => (
          <>
            <div className='max-w-7xl mx-auto px-4 sm:px-6'>
              <div className='flex justify-between items-center py-6 md:justify-start md:space-x-10'>
                <div className='flex justify-start lg:w-0 lg:flex-1'>
                  <a href={pageRoutes.home}>
                    <span className='sr-only'>Harvard Virtual Coffee Coffee</span>
                    <div className='flex-shrink-0 w-20 text-greenie'>
                      <Image
                        // className='flex-shrink-0 h-6 w-6 text-greenie'
                        // height={500}
                        layout='responsive'
                        src={VirtualCoffeeLogo}
                        alt='VirtualCoffee'
                      />
                    </div>
                  </a>
                </div>
                <div className='-mr-2 -my-2 md:hidden'>
                  <Popover.Button className='bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-greenie'>
                    <span className='sr-only'>Open menu</span>
                    <MenuIcon className='h-6 w-6' aria-hidden='true' />
                  </Popover.Button>
                </div>

                <Popover.Group as='nav' className='hidden md:flex space-x-10'>
                  <DesktopHref href={pageRoutes.about} name={headerText.about} navKey='about' />
                  <DesktopHref href={pageRoutes.contact} name={headerText.contact} navKey='contact' />
                </Popover.Group>

                <div className='hidden md:flex items-center cursor-pointer justify-end md:flex-1 lg:w-0'>
                  <a
                    onClick={() => setOpen(true)}
                    className='bg-white p-2 rounded-md whitespace-nowrap text-base font-medium text-greenie hover:text-white hover:bg-greenie'
                  >
                    Sign in
                  </a>
                </div>
              </div>
            </div>

            <Transition
              show={open}
              as={Fragment}
              enter='duration-200 ease-out'
              enterFrom='opacity-0 scale-95'
              enterTo='opacity-100 scale-100'
              leave='duration-100 ease-in'
              leaveFrom='opacity-100 scale-100'
              leaveTo='opacity-0 scale-95'
            >
              <Popover.Panel
                focus
                static
                className='absolute top-0 inset-x-0 z-20 p-2 transition transform origin-top-right md:hidden'
              >
                <div className='rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50'>
                  <div className='py-6 px-5 space-y-6'>
                    <div className='grid grid-cols-2 gap-y-4 gap-x-8'>
                      <a href={pageRoutes.about} className='text-base font-medium text-gray-900 hover:text-gray-700'>
                        {headerText.about}
                      </a>
                      <a href={pageRoutes.contact} className='text-base font-medium text-gray-900 hover:text-gray-700'>
                        {headerText.contact}
                      </a>
                    </div>
                    <div>
                      <a
                        href='#'
                        className='w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-greenie hover:bg-greenie'
                      >
                        Sign up
                      </a>
                      <p className='mt-6 text-center text-base font-medium text-gray-500'>
                        Existing User?
                        <a onClick={() => setOpen(true)} className='text-greenie hover:text-greenie'>
                          Sign in
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>

      <CustomModal title="Get In!" open={open} setOpen={setOpen}>
        <RegistrationDialogue />


      </CustomModal>
    </>
  )
}
