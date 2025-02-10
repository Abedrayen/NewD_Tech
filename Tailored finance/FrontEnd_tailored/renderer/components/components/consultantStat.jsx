import React from 'react';
import { Users, ArrowUpRight ,ArrowDownLeft } from 'lucide-react'

export default function ConsultantStat ({ value, title,  icon: Icon }) {


    return(
        <div className="flex flex-row space-x-5 items-center justify-center p-5 ">
        <div className="bg-customBLUE rounded-full flex justify-center items-center w-20 h-20 ">
          <Icon size={35} className="text-customGold  " />
        </div>
        <div className="space-y-1">
          <h2 className="text-customGrey text-sm ">
            {title}
          </h2>
          <h1 className="text-customGold text-3xl font-bold">{value}</h1>

        </div>


      </div>
    )
}