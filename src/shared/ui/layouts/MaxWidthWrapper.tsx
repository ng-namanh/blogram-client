import { ReactNode } from 'react'
import { cn } from '@/shared/lib/utils'
const MaxWidthWrapper = ({
  className,
  children
}: {
  className?: string
  children: ReactNode
}) => {
  return (
    <div
      id='main'
      className={cn('relative mx-auto w-full max-w-[1480px]', className)}
    >
      {children}
    </div>
  )
}

export default MaxWidthWrapper
