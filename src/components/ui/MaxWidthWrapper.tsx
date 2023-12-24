import { ReactNode } from 'react'
import { cn } from '@/lib/utils'
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
      className={cn(
        'relative md:pt-24 pt-20 mx-auto w-full max-w-[1480px] px-4 md:px-10',
        className
      )}
    >
      {children}
    </div>
  )
}

export default MaxWidthWrapper
