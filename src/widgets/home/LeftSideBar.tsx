import NavItem from "@/shared/ui/button-with-icon";
import { HomeIcon } from "lucide-react";

export function LeftSideBar() {
  return (
    <div className="h-full">
      <aside>
        <ul className="w-full">
          <NavItem to="/" icon={<HomeIcon size="20px" />} text="Home" />
          <NavItem to="/" icon={<HomeIcon size="20px" />} text="Home" />
          <NavItem to="/" icon={<HomeIcon size="20px" />} text="Home" />
          <NavItem to="/" icon={<HomeIcon size="20px" />} text="Home" />
          <NavItem to="/" icon={<HomeIcon size="20px" />} text="Home" />
        </ul>
      </aside>
    </div>
  );
}
