import {
  LogOut,
  Plus,
  Settings,
  User,
  LayoutDashboard,
  ListIcon,
} from 'lucide-react';

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
  Button,
} from '@/shared/ui/';
import { useAppDispatch } from '@/shared/model/hook';
import { logout } from '@/entities/auth/model/slice';
import { useNavigate } from 'react-router-dom';

export function DropdownMenuHeader() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar className="hover:cursor-pointer">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="left-[-91px] w-56">
        <DropdownMenuItem>
          <User className="mr-2 h-4 w-4" />
          <Button variant="link">
            <span>Profile</span>
          </Button>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <LayoutDashboard className="mr-2 h-4 w-4" />
            <Button variant="link">
              <span>Dashboard</span>
            </Button>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Plus className="mr-2 h-4 w-4" />
            <Button variant="link">
              <span>Create Post</span>
            </Button>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <ListIcon className="mr-2 h-4 w-4" />
            <Button variant="link">
              <span>Reading lists</span>
            </Button>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuItem>
          <Settings className="mr-2 h-4 w-4" />
          <Button variant="link">
            <span>Settings</span>
          </Button>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <LogOut className="mr-2 h-4 w-4" />
          <Button
            variant="link"
            onClick={() => {
              dispatch(logout());
              navigate('/auth/login');
            }}
          >
            <span>Log out</span>
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
