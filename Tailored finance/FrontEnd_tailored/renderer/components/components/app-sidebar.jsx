'use client'

import { usePathname, useRouter } from 'next/navigation'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'

import { useState } from 'react'
import {
  FileText,
  Home,
  UserRound,
  ClipboardList,
  Settings,
  Info,
  LogOut,
  UserRoundPlus,
  UserRoundPen,
  Package,
  ChevronDown,
  ChevronUp
} from 'lucide-react'
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
  SidebarFooter
} from '@/components/ui/sidebar'
import Image from 'next/image'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import { setDashboardFirstVisit } from '@/slices/appSlice'

const items = [
  {
    title: 'Home',
    url: '/dashboard/', // Root URL
    icon: Home
  },
  {
    title: 'Clients',
    url: '/dashboard/clients/', // Main Client page
    icon: UserRound
  },
  {
    title: 'Documents',
    url: '/dashboard/documents/', // Example route
    icon: FileText
  },
  {
    title: 'Taches',
    url: '/dashboard/taches/', // Example route
    icon: ClipboardList
  },
  {
    title: 'Modifier Consultant',
    url: '/dashboard/consultant/', // Example route
    icon: UserRoundPen
  },
  {
    title: 'Produits',
    url: '/dashboard/products/', // Example route
    icon: Package
  },
  {
    title: 'Aide',
    url: '/dashboard/aide', // Example route
    icon: Info
  }
]

export function AppSidebar() {
  const pathname = usePathname()
  const router = useRouter()
  const dispatch = useDispatch()
  const { consultant, role } = useSelector(state => state.consultant)
  const handleLogout = () => {
    router.replace('/SignIn')
  }

  const handleFirstVisit = () => {
    dispatch(setDashboardFirstVisit(false))
  }
  return (
    <Sidebar
      variant="floating"
      collapsible="icon">
      <SidebarContent>
        <SidebarGroup>
          <SidebarHeader className="group-data-[collapsible=icon]:hidden">
            <Image
              src="/images/logo.png"
              width={200}
              height={200}
            />
          </SidebarHeader>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map(item => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    onClick={handleFirstVisit}
                    style={{
                      color: pathname === item.url ? '#D5BB5D' : '#1B1F50'
                    }}
                    asChild
                    isActive={pathname === item.url}>
                    <Link href={item.url}>
                      <item.icon />
                      <span className="ml-2">{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="list-none">
        <DropdownMenu className="ml-2 flex flex-row space-x-2">
          <DropdownMenuTrigger className=" flex flex-row items-center space-x-2">
            <Avatar className="h-8 w-8">
              <AvatarImage
                src="/images/Cliendt.png"
                alt="@shadcn"
              />
              <span>CAT</span>
            </Avatar>
            <h1 className="text-left group-data-[collapsible=icon]:hidden">
              <strong>::::</strong>
            </h1>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuItem>
              <Settings />
              <Link href={'/dashboard/profile'}>Paramètres</Link>
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={handleLogout}
              className="flex flex-row">
              <LogOut className="text-red-500" />
              <span className="ml-2 text-red-500">Deconnexion</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* <SidebarMenuButton style={{ color: "red" }} asChild>
          <a href="#">
            <LogOut />
            <span className="ml-2">Deconnexion</span>
          </a>
        </SidebarMenuButton> */}
      </SidebarFooter>
    </Sidebar>
  )
}
