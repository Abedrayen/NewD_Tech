import React from 'react';
import { Users, ArrowUpRight ,ArrowDownLeft } from 'lucide-react'

export function ProductsStat ({ value, title }) {


    return(
        <div className="flex flex-col space-x-5 items-center justify-center p-5 ">
          <h2 className="text-customGrey text-sm ">
            {title}
          </h2>
          <h1 className="text-customGold text-3xl font-bold">{value}</h1>

        </div>


    )
}