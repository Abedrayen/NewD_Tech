'use client'
import {React,useState} from 'react' ;
import { Bell } from 'lucide-react' ;

export default function Notif () {
    const [hasNotification, setHasNotification] = useState(true);


  const toggleNotification = () => {
    setHasNotification(!hasNotification);
  };
    return(
        <div className="relative">
        <Bell
          className="text-[#1B1F50] cursor-pointer"
          onClick={toggleNotification} 
        />
        
        {hasNotification && (
          <span className="absolute top-0 right-0 block w-2.5 h-2.5 bg-red-500 rounded-full"></span>
        )}
      </div>
    );
}