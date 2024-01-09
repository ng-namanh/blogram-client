import React from 'react'
import { Link } from 'react-router-dom'
import { cn } from '../lib/utils'
import { Button } from './button'

interface ButtonWithIconProps {
  icon: JSX.Element
  text: string
  to: string
  className?: string
}

const NavItem: React.FC<ButtonWithIconProps> = ({
  icon,
  text,
  to,
  className
}) => {
  return (
    <Link
      to={to}
      className={
        cn(
          'w-full justify-start inline-flex items-start px-4 py-2 text-sm font-medium rounded-md shadow-sm text-white '
        ) + className
      }
    >
      <Button
        variant='link'
        className='w-full items-center text-lg gap-2 justify-start text-primary'
      >
        {icon}
        {text}
      </Button>
    </Link>
  )
}

export default NavItem
