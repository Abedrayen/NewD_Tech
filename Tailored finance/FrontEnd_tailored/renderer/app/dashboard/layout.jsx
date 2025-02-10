'use client';

import React from 'react';
import '@/styles/globals.css';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/components/app-sidebar';
import NotificationsSheet from '@/components/components/notificationSheet';
import { Toaster } from '@/components/ui/toaster';


const formatDate = (date) => {
    const options= { day: '2-digit', month: 'long', year: 'numeric' }
    return date.toLocaleDateString('fr-FR', options)
  }
const todayDate=formatDate(new Date())
export default function AuthenticatedLayout({ children }) {
  return (
    <SidebarProvider>
      <div className="flex h-screen w-full">
        <AppSidebar />
        <main className="flex-grow w-full mb-24">
          <SidebarTrigger />  
          <div className="mx-10 mb-8 flex flex-row items-center justify-between">
            <h1 className="text-lg font-bold text-[#1B1F50]">
           {todayDate}
            </h1>
            <NotificationsSheet />
          </div>
          <div>{children}</div>
        </main>
      </div>
      <Toaster />
    </SidebarProvider>
  );
}