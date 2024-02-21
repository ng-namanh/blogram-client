import { Button } from '@/shared/ui';
import { HomeIcon, LayoutDashboard, PlusSquare, TagIcon } from 'lucide-react';

export function LeftSideBar() {
  return (
    <div className="h-full rounded-sm ">
      <aside>
        <ul className="flex w-full flex-col gap-4">
          <Button
            className="w-full items-center justify-start gap-2 text-lg  "
            variant="ghost"
          >
            <HomeIcon size="20px" /> Home
          </Button>
          <Button
            className="w-full items-center justify-start gap-2 text-lg  "
            variant="ghost"
          >
            <TagIcon size="20px" /> Tags
          </Button>
          <Button
            className="w-full items-center justify-start gap-2 text-lg  "
            variant="ghost"
          >
            <PlusSquare size="20px" /> Create
          </Button>
          <Button
            className="w-full items-center justify-start gap-2 text-lg  "
            variant="ghost"
          >
            <LayoutDashboard size="20px" /> Dashboard
          </Button>
        </ul>
      </aside>
    </div>
  );
}
