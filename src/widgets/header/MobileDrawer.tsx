// import { Button } from '@/shared/ui'
import NavItem from '@/shared/ui/button-with-icon'
import { X as CloseDrawer, HomeIcon } from 'lucide-react'

type Props = {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

function MobileDrawer({ setIsOpen }: Props) {
  return (
    <div className='block md:hidden'>
      <div className='bg-white max-w-[300px] w-[90%] z-[999] fixed overflow-y-auto h-[100%] left-0 top-0'>
        <div className='px-4 min-h-14 flex justify-between items-center'>
          <p className='text-primary font-bold text-lg'>DEV Community</p>
          <CloseDrawer
            color='black'
            onClick={() => {
              setIsOpen(false)
            }}
          />
        </div>

        <ul className='w-full'>
          <NavItem to='/' icon={<HomeIcon />} text='Home' />
          <NavItem to='/' icon={<HomeIcon />} text='Home' />
          <NavItem to='/' icon={<HomeIcon />} text='Home' />
          <NavItem to='/' icon={<HomeIcon />} text='Home' />
          <NavItem to='/' icon={<HomeIcon />} text='Home' />
        </ul>
      </div>

      <div className='bg-black opacity-50 absolute inset-0 rounded-sm'></div>
    </div>
  )
}
export default MobileDrawer
