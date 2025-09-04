'use client'
import React from 'react'
import ThemeSwitch from "./ThemeSwitch"
import UserDropdown from "./UserDropdown"
// Menu bar icon.
import { RiMenu4Fill } from "react-icons/ri";
import { Button } from "@/components/ui/button";
import { useSidebar } from "@/components/ui/sidebar";

const Topbar = () => {
  const {toggleSidebar} = useSidebar()
  return (
    <div className="fixed border h-16 w-full top-0 left-0 z-30 flex items-center bg-white dark:bg-card">

      {/* Left spacer = sidebar (16rem) + page padding (2rem) */}
      <div className="hidden md:block md:w-[calc(16rem+2rem)]"></div>

      {/* Middle = search + right icons */}
      <div className="flex flex-1 items-center justify-between px-5 md:px-0 md:pe-8">
        
        {/* Search stays clean */}
        <div>
          search component
        </div>

        {/* Right side */}
        <div className="flex items-center gap-2 md:pr-4">
          <ThemeSwitch />
          <UserDropdown />
          <Button onClick={toggleSidebar} type="button" size="icon" className="ms-2 md:hidden">
            <RiMenu4Fill />
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Topbar
