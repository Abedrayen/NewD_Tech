"use client"

import React, { useEffect } from 'react'
import { Bell, Users, User, Briefcase, ArrowUpRight, ArrowDownLeft, CircleDollarSign, CircleCheckBig, LogIn } from 'lucide-react'
import StatCard from '@/components/components/statcard'
import { Separator } from '@/components/ui/separator'
import '@/styles/globals.css'
import SimpleChart from '@/components/charts/simpleChart'
import ChartCircle from '@/components/charts/pieChart'
import PaginatedTable from '@/components/charts/table'
import { useDispatch, useSelector } from 'react-redux'
import { getAllConsultantAPI } from '@/Apis/ConsultantApi'
import { setAllConsultants } from '@/slices/adminSlice'


function IndexPage() {
  
  const {consultant,role}=useSelector(state=>state.consultant);
  const {totalClients}=useSelector(state=>state.clients);
  const {dashboardFirstVisit}=useSelector(state=>state.app)




  return (
    <div className="flex flex-col  mb-28   px-12 ">
{dashboardFirstVisit&&<><h2 className="text-md text-[#1B1F50]">
  Welcome Back {role === "Admin" && "Admin"}
</h2>
<h1 className="text-md font-bold text-[#1B1F50]">
  {`${consultant?.firstName || ''} ${consultant?.lastName || ''}`}
</h1>
</>}

      <div className="border-customBLUE mt-6  flex-col flex md:flex-row items-center justify-center rounded-lg border-2">
        <StatCard
          value={totalClients}
          title="Total Clients"
          percentage="12.5"
          growth="+1.01%"
          icon={Users}
          
        />
        <Separator
          className="bg-customBLUE h-20 hidden md:block"
          orientation="vertical"
        />
        <Separator
          className="bg-customBLUE w-3/4  md:hidden block"
          orientation="horizontal"
        />
        <StatCard
          value="24.33"
          title="Total Earnings"
          percentage="12.3"
          growth="-0.85%"
          icon={CircleDollarSign}
        
        />

        <Separator
         className="bg-customBLUE h-20 hidden md:block"
          orientation="vertical"
        />
         <Separator
          className="bg-customBLUE w-3/4  md:hidden block"
          orientation="horizontal"
        />
        <StatCard
          value="12.14"
          title="Volume d'affaires global"
          percentage="5.2"
          growth="+0.95%"
          icon={CircleCheckBig}
      
        />
          <Separator
          className="bg-customBLUE h-20 hidden md:block"
          orientation="vertical"
        />
         <Separator
          className="bg-customBLUE w-3/4  md:hidden block"
          orientation="horizontal"
        />
             <StatCard
          value="12.14"
          title="Projects"
          percentage="5.2"
          growth="+0.95%"
          icon={Briefcase}
          
        />
      </div>
      <div className='md:max-h-[380px] flex md:flex-row flex-col justify-center md:space-x-5'>
      <div className='md:w-3/5 mt-10  border-customBLUE p-1 md:p-4 justify-center  rounded-lg border-2' >
        <h2 className='font-bold text-customBLUE text-sm md:text-xl '>Nombre Total des Clients</h2>
        <h1 className='block md:hidden text-customGrey mt-4 md:mt-0'>A grandir la fenetre pour voir la courbe</h1>
      <SimpleChart />
      </div>
      <div className='md:w-2/5 mt-10 border-2 border-customBLUE p-1 md:p-4 justify-center rounded-lg  '>
      <h2 className='font-bold text-customBLUE text-sm md:text-xl '>Nombre Total des Clients</h2>
      <h1 className='block md:hidden text-customGrey mt-4 md:mt-0'>A grandir la fenetre pour voir la courbe</h1>
      <ChartCircle />
      </div>
      </div>
      <div className='mt-10 border-2 border-customBLUE rounded-lg p-4'>
      <h2 className='font-bold text-customBLUE text-xl mb-8 '>Liste des Clients</h2>
        <PaginatedTable nbre={2} />
      </div>
    </div>
  )
}

export default IndexPage
