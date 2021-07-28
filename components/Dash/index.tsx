import { MailIcon, PhoneIcon } from '@heroicons/react/solid'

import React, { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/outline'

function UserModal({ open, setOpen }: { open: any; setOpen: any }) {
  return (
    <Transition.Root show={open !== -1} as={Fragment}>
      <Dialog
        as='div'
        static
        className='fixed z-10 inset-0 overflow-y-auto'
        open={open !== -1}
        onClose={() => setOpen(-1)}
      >
        <div className='flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0'>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <Dialog.Overlay className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity' />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span className='hidden sm:inline-block sm:align-middle sm:h-screen' aria-hidden='true'>
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
            enterTo='opacity-100 translate-y-0 sm:scale-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100 translate-y-0 sm:scale-100'
            leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
          >

            
            <div className='inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6'>
              <div>
                <div className='mt-3 text-center sm:mt-5'>
                  <img className='w-32 h-32 flex-shrink-0 mx-auto bg-black rounded-full' src={open.image} alt='' />

                  <Dialog.Title as='h3' className='text-lg leading-6 font-medium text-gray-900'>
                    {open.name}
                  </Dialog.Title>
                  <div className='mt-2'>Description</div>
                  <div className='mt-2'>Load Connection Links</div>
                </div>
              </div>
              <div className='mt-5 sm:mt-6'>
                <button
                  type='button'
                  className='inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-bluie text-base font-medium text-white hover:bg-greenie focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-greenie sm:text-sm'
                  onClick={() => setOpen(-1)}
                >
                  Get in touch!
                </button>
                <button
                  type='button'
                  className='inline-flex mt-2 justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-bluie text-base font-medium text-white hover:bg-greenie focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-greenie sm:text-sm'
                  onClick={() => setOpen(-1)}
                >
                  Close
                </button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

const people = [
  {
    name: 'Jane Cooper',
    title: 'Paradigm Representative',
    lastActive: 123,
    imageUrl:
      'https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=4471664219558267&height=50&width=50&ext=1630079212&hash=AeSfwqzFpetmCBf8e2w'
  },
  {
    name: 'ABC',
    title: 'Paradigm Representative',
    lastActive: 123,
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60'
  },
  {
    name: 'TEST',
    title: 'Paradigm Representative',
    lastActive: 123,
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60'
  },
  {
    name: 'HAHA',
    title: 'Paradigm Representative',
    lastActive: 123,
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60'
  },
  {
    name: 'LALA',
    title: 'Paradigm Representative',
    lastActive: 123,
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60'
  },
  {
    name: 'DADA',
    title: 'Paradigm Representative',
    lastActive: 123,
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60'
  },
  {
    name: 'FEGE',
    title: 'Paradigm Representative',
    lastActive: 123,
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60'
  }
  // More people...
]

export default function Dash() {
  const [open, setOpen] = useState<any>(-1)

  return (
    <>
      <UserModal open={open} setOpen={setOpen} />
      <ul className='grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        {people.map((person, i) => (
          <li
            key={person.name + i}
            className='col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200'
          >
            <div className='flex-1 flex flex-col p-8'>
              <img className='w-32 h-32 flex-shrink-0 mx-auto bg-black rounded-full' src={person.imageUrl} alt='' />
              <h3 className='mt-6 text-gray-900 text-sm font-medium'>{person.name}</h3>
              <dl className='mt-1 flex-grow flex flex-col justify-between'>
                <dt className='sr-only'>Title</dt>
                <dd className='text-gray-500 text-sm'>{person.title}</dd>
                <dt className='sr-only'>Role</dt>
                <dd className='mt-3'>
                  <span className='px-2 py-1 text-green-800 text-xs font-medium bg-green-100 rounded-full'>
                    {person.lastActive}
                  </span>
                </dd>
              </dl>
            </div>
            <div>
              <a
                onClick={() => {
                  setOpen({
                    name: person.name,
                    image: person.imageUrl
                  })
                }}
              >
                View Profile
              </a>
            </div>
          </li>
        ))}
      </ul>
    </>
  )
}
