import { Button } from "@/shared/ui";
import { HomeIcon } from "lucide-react";

export function LeftSideBar() {
  return (
    <div className="h-full rounded-sm ">
      <aside>
        <ul className="flex w-full flex-col gap-4">
          <Button
            className="w-full items-center justify-start gap-2 text-lg hover:text-primary "
            variant="ghost"
          >
            <HomeIcon size="20px" /> Home
          </Button>
          <Button
            className="w-full items-center justify-start gap-2 text-lg hover:text-primary "
            variant="ghost"
          >
            <HomeIcon size="20px" /> Home
          </Button>
          <Button
            className="w-full items-center justify-start gap-2 text-lg hover:text-primary "
            variant="ghost"
          >
            <HomeIcon size="20px" /> Home
          </Button>
          <Button
            className="w-full items-center justify-start gap-2 text-lg hover:text-primary "
            variant="ghost"
          >
            <HomeIcon size="20px" /> Home
          </Button>
        </ul>
      </aside>
    </div>
  );
}
