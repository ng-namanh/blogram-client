import Logo from '@/shared/ui/logo/Logo'

export function AuthHeader() {
  return (
    <div className='flex justify-center items-center flex-col'>
      <Logo width={100} />
      <h1 className='text-center font-bold text-2xl md:text-3xl mt-4'>
        Join the DEV Community
      </h1>
      <p className='text-center mt-2'>
        DEV Community is a community of 1,218,824 amazing developers
      </p>
    </div>
  )
}
