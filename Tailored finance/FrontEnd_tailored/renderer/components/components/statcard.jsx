import React from 'react';
import { Bell, Users, User, Briefcase, ArrowUpRight, ArrowDownLeft } from 'lucide-react'
function StatCard({ value, title, percentage, growth, icon: Icon }) {
  const isPositive = !growth.startsWith('-');
  const growthColor = isPositive ? 'text-green-600' : 'text-red-600';
  const ArrowIcon = isPositive ? ArrowUpRight : ArrowDownLeft;

  return (
    <div className="flex flex-row space-x-6 justify-center  md:p-4 w-1/4">
      <div className="space-y-1">
        <h1 className="text-customGold text-xl font-bold">{value}</h1>
        <h2 className="text-customBLUE text-sm font-semibold">
          {title}
        </h2>
        <div className="md:flex flex-row hidden  items-center">
          <ArrowIcon size={20} className={growthColor} style={{ color: isPositive ? 'green' : 'red' }} />
          <p className={`text-sm font-semibold ${growthColor}`} style={{ color: isPositive ? 'green' : 'red' }}>{percentage}</p>
          <p className={`ml-8 text-sm font-semibold ${growthColor}`} style={{ color: isPositive ? 'green' : 'red' }}>
            {growth} ce mois
          </p>

        </div>
      </div>
      <div className="bg-customBLUE hidden md:flex h-10 w-10 items-center justify-center rounded-lg">
        <Icon size={20} className="text-customGold " />
      </div>
    </div>
  );
}

export default StatCard;
