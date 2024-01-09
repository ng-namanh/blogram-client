import { Button, Input } from '@/shared/ui'
import { SearchIcon } from 'lucide-react'

function HeaderInput() {
  return (
    <Input
      className='hidden md:block lg:w-[400px]'
      placeholder='Search...'
      Slot={
        <Button
          variant='ghost'
          className='hidden md:block px-2 py-0 my-0 h-9 bg-transparent scale-4'
        >
          <SearchIcon size={20} />
        </Button>
      }
    />
  )
}
export default HeaderInput
