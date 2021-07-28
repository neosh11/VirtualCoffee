import Sun from '@heroicons/react/solid/SunIcon'

const LoadingOverlay = () => {
  return (
    <div className='flex w-screen h-screen fixed z-50'>
      <span className='m-auto'>
        <Sun className='animate-spin-slow' height={6} width={6} />
      </span>
    </div>
  )
}

export default LoadingOverlay
