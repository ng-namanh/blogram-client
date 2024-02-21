import Layout from '@/shared/ui/layouts/Layout';
import Header from '@/widgets/header/Navbar';
import { LeftSideBar } from '@/widgets/home/LeftSideBar';
import RightSideBar from '@/widgets/home/RightSideBar';

export const defaultLayout = <Layout headerSlot={<Header />} />;
export const authLayout = <Layout />;
export const newPostLayout = <Layout headerSlot={<Header />} itemStart />;
export const homeLayout = (
  <Layout
    isHomePage
    headerSlot={<Header />}
    leftSidebar={<LeftSideBar />}
    rightSidebar={<RightSideBar />}
  />
);
