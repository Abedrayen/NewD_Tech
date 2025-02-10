'use client';

import React, { useState } from 'react';
import '@/styles/globals.css';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Bell } from 'lucide-react';
import Notif from '@/components/components/notifications'

const notifications = [
  { id: 1, description: 'This is the first notification.', date: '10/11/2024', read: false },
  { id: 2, description: 'This is the second notification.', date: '11/11/2024', read: false },
  { id: 3, description: 'This is the third notification.', date: '12/11/2024', read: false },
  { id: 4, description: 'This is the fourth notification.', date: '13/11/2024', read: false },
];

export default function NotificationsSheet() {
  const [notificationList, setNotificationList] = useState(notifications);

  const markAllAsRead = () => {
    setNotificationList((prev) =>
      prev.map((notification) => ({ ...notification, read: true }))
    );
  };

  return (
    <div>
      <Sheet>
        <SheetTrigger>
        <Notif />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle className="mb-4 text-customGrey">Notifications</SheetTitle>
            <button
              className="text-sm text-blue-500 hover:underline"
              onClick={markAllAsRead}
            >
              Mark all as read
            </button>
            <SheetDescription>
              <ul className="space-y-4">
                {notificationList.map((notification) => (
                  <li
                    key={notification.id}
                    className={`text-sm p-4 rounded-lg ${
                      notification.read ? 'bg-white' : 'bg-blue-100'
                    }`}
                  >
                    <div className="flex flex-row space-x-5 justify-between items-center">
                      <p>{notification.description}</p>
                      <p className="text-customBLUE font-semibold">
                        {notification.date}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
}
