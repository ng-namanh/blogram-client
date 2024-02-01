import { cn } from "@/shared/lib/utils";
import { type ReactNode } from "react";
import { Outlet as ArticleList } from "react-router-dom";

type Props = {
  headerSlot?: ReactNode;
  className?: string;
  itemStart?: boolean;
  rightSidebar?: ReactNode;
  leftSidebar?: ReactNode;
  isHomePage?: boolean;
};

function Layout(props: Props) {
  return (
    <div
      className={cn(
        `flex min-h-screen flex-col items-start justify-center ${props.className}`,
      )}
    >
      {props.headerSlot}
      <div
        className={`mx-auto my-0 ${props.isHomePage ? "grid-cols-layout grid gap-4" : "flex justify-center"} max-w-screen-sm flex-1 p-4 lg:max-w-[1280px] ${
          props.itemStart ? "items-start" : "items-center"
        }`}
      >
        {props.leftSidebar}
        <ArticleList />
        {props.rightSidebar}
      </div>
    </div>
  );
}

export default Layout;
