import { Button } from '@/shared/ui'
import { AlignJustify, BellIcon } from 'lucide-react'
import { Link } from 'react-router-dom'
import { DropdownMenuHeader } from './Dropdown'
import { useAppSelector } from '@/shared/model/hook'
import Logo from '@/shared/ui/logo/Logo'
import { selectedUser } from '@/entities/auth/model/slice'
import HeaderSearchInput from './SearchInput'
import MobileDrawer from './MobileDrawer'
import { useState } from 'react'

function Header() {
  const user = useAppSelector(selectedUser)
  const [isOpen, setIsOpen] = useState<boolean>(false)

  function handleClick(): void {
    setIsOpen(!isOpen)
  }

  return (
    <div className='border-b shadow-sm w-full'>
      <div className='max-w-screen-sm lg:max-w-[1240px] md:max-w-[960px] mx-auto my-auto py-2 flex px-2'>
        <div className='flex gap-2 items-center justify-center'>
          <AlignJustify
            width={40}
            onClick={handleClick}
            className='block md:hidden'
          />

          <Logo width={50} />
          <HeaderSearchInput />
        </div>
        {isOpen && <MobileDrawer setIsOpen={setIsOpen} />}
        {user ? (
          <div className='flex flex-1 items-end justify-end gap-3'>
            <Link to='/new'>
              <Button variant='outline' className='hidden md:block'>
                Create Post
              </Button>
            </Link>
            <Button variant='ghost' className='p-2'>
              <BellIcon />
            </Button>
            <DropdownMenuHeader />
          </div>
        ) : (
          <div className='flex flex-1 items-end justify-end'>
            <Link to='/auth/login'>
              <Button variant='ghost'>Log in</Button>
            </Link>
            <Link to='/auth/register'>
              <Button variant='outline'>Create account</Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}
export default Header
