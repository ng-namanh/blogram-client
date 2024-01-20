import Layout from '@/shared/ui/layouts/Layout'
import Header from '@/widgets/header/Navbar'

export const defaultLayout = <Layout headerSlot={<Header />} />
export const authLayout = <Layout />
export const newPostLayout = (
  <Layout className=' bg-[#efe9f0]' headerSlot={<Header />} />
)
