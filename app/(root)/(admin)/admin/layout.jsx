import AppSidebar from "@/components/Application/Admin/AppSidebar";
import ThemeProvider from "@/components/Application/Admin/ThemeProvider";
import Topbar from "@/components/Application/Admin/Topbar";
import { SidebarProvider } from "@/components/ui/sidebar";
import Link from "next/link";
import React from "react";

const Layout = ({ children }) => {
  return (
    <ThemeProvider
    attribute="class"
    defaultTheme="system"
    enableSystem
    disableTransitionOnChange>
    <SidebarProvider>
      <AppSidebar />
      <main className="md:w-[calc(100vw-16rem)]">
        <div className="pt-[70px] px-8 min-h-[calc(100vh-40px)] pb-10">
          <Topbar />
          {children}
        </div>

        <div className="border-t h-[40px] flex justify-center items-center bg-gray-50 dark:bg-background text-sm">
          <span>© {new Date().getFullYear()}</span>
          <Link
            href="https://calebdesigns.vercel.app/"
            className="hover:underline ml-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            Developer Caleb Nyong™
          </Link>
          . All Rights Reserved.
        </div>
      </main>
    </SidebarProvider>
    </ThemeProvider>
  );
};

export default Layout;
