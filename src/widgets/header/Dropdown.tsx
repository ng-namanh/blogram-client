import {
  LogOut,
  Plus,
  Settings,
  User,
  LayoutDashboard,
  ListIcon
} from 'lucide-react'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  Avatar,
  AvatarFallback,
  AvatarImage,
  Button
} from '@/shared/ui/'
import { useAppDispatch } from '@/shared/model/hook'
import { logout } from '@/entities/auth/model/slice'
import { useNavigate } from 'react-router-dom'

export function DropdownMenuHeader() {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar className='hover:cursor-pointer'>
          <AvatarImage src='https://github.com/shadcn.png' alt='@shadcn' />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-56 left-[-91px]'>
        <DropdownMenuItem>
          <User className='mr-2 h-4 w-4' />
          <Button variant='ghost'>
            <span>Profile</span>
          </Button>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <LayoutDashboard className='mr-2 h-4 w-4' />
            <Button variant='ghost'>
              <span>Dashboard</span>
            </Button>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Plus className='mr-2 h-4 w-4' />
            <Button variant='ghost'>
              <span>Create Post</span>
            </Button>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <ListIcon className='mr-2 h-4 w-4' />
            <Button variant='ghost'>
              <span>Reading lists</span>
            </Button>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuItem>
          <Settings className='mr-2 h-4 w-4' />
          <Button variant='ghost'>
            <span>Settings</span>
          </Button>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <LogOut className='mr-2 h-4 w-4' />
          <Button
            variant='ghost'
            onClick={() => {
              dispatch(logout())
              navigate('/auth/login')
            }}
          >
            <span>Log out</span>
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
