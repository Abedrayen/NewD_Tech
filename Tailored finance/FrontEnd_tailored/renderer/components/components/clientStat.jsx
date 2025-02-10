import React from 'react';
import { Users, ArrowUpRight ,ArrowDownLeft } from 'lucide-react'

export default function ClientStat ({ value, title,  growth, icon: Icon }) {
    const isPositive = !growth.startsWith('-');
    const growthColor = isPositive ? 'text-green-600' : 'text-red-600';
    const ArrowIcon = isPositive ? ArrowUpRight : ArrowDownLeft;
    return(
        <div className="flex flex-row space-x-5 items-center justify-center">
        <div className="bg-customBLUE rounded-full flex justify-center items-center w-20 h-20 ">
          <Icon size={35} className="text-customGold  " />
        </div>
        <div className="space-y-1">
          <h2 className="text-customGrey text-sm ">
            {title}
          </h2>
          <h1 className="text-customGold text-3xl font-bold">{value}</h1>

          <div className="md:flex flex-row hidden  items-center">
            <ArrowIcon size={15} className={growthColor} style={{ color: isPositive ? 'green' : 'red' }} />
            <p className={` text-xs font-semibold ${growthColor}`} >
            {growth} % ce mois
            </p>

          </div>
        </div>


      </div>
    )
}