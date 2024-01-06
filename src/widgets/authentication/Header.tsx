import logo from '@/shared/assets/logo.png'

function AuthHeader() {
  return (
    <div className='flex justify-center items-center flex-col'>
      <img src={logo} alt='logo' className=' w-[60px]' />
      <h1 className='text-center font-bold text-2xl md:text-3xl mt-4'>
        Join the DEV Community
      </h1>
      <p className='text-center mt-2'>
        DEV Community is a community of 1,218,824 amazing developers
      </p>
    </div>
  )
}
export default AuthHeader
