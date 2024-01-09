import { Button, Input } from '@/shared/ui'
import { SearchIcon, BellIcon } from 'lucide-react'
import { Link } from 'react-router-dom'
import { DropdownMenuHeader } from './Dropdown'
import { useAppSelector } from '@/shared/model/hook'
import Logo from '@/shared/ui/logo/Logo'
import { selectedUser } from '@/entities/auth/model/slice'

function Header() {
  // const token = useAppSelector((state) => state.auth.accessToken)
  const user = useAppSelector(selectedUser)

  return (
    <div className='border-b shadow-sm w-full'>
      <div className='max-w-screen-sm lg:max-w-[1240px] mx-auto my-auto py-2 flex'>
        <div className='flex gap-2 items-center justify-center'>
          <Logo width={50} />
          <Input
            className=' w-[400px]'
            placeholder='Search...'
            Slot={
              <Button
                variant='ghost'
                className='px-2 py-0 my-0 h-9 bg-transparent scale-4'
              >
                <SearchIcon size={20} />
              </Button>
            }
          />
        </div>

        {user ? (
          <div className='flex flex-1 items-end justify-end gap-3'>
            <Button variant='outline'>Create Post</Button>
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
