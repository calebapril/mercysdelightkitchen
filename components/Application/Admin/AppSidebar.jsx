import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import Image from "next/image"
// import logoBlack from '@/public/mercys_delight_logo'
// import logoWhite from '@/public/mercys_delight_logo'
import { Button } from "@/components/ui/button"
import { LuChevronRight } from "react-icons/lu";
import { IoMdClose } from "react-icons/io";
const AppSidebar = () => {
  return (
    <Sidebar>
      <SidebarHeader>
        <div>
          <Image src="/mercys_delight_logo" height={50} width={50} className="block dark:hidden" alt="logo dark"/>
          <Image src="/mercy's_delight_logo" height={50} width={50} className="hidden dark:block" alt="logo white"/>
          <Button type="button" size="icon" className="md:hidden">
            <IoMdClose/>
          </Button>
        </div>
      </SidebarHeader>
    </Sidebar>
  )
}

export default AppSidebar