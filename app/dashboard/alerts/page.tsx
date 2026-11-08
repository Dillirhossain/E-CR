'use client';

import { useState } from 'react';

export default function AlertsPage() {
  const [alerts] = useState([
    {
      id: 1,
      title: 'Database Management System Sessional - Lab Quiz Rescheduled',
      time: '2 hours ago',
      type: 'Urgent',
      course: 'CSE 312',
      sender: 'Syeda Dillir Hossain Binti (CR)',
      read: false,
    },
    {
      id: 2,
      title: 'Assignment 1 Submission Portal Open',
      time: '1 day ago',
      type: 'Assignment',
      course: 'CSE 312',
      sender: 'Jahid Karim Fahim',
      read: true,
    },
    {
      id: 3,
      title: 'Class Cancelled for Circuit Analysis on Thursday',
      time: '3 days ago',
      type: 'Notice',
      course: 'EEE 101',
      sender: 'Prof. Tanvir Hasan',
      read: true,
    },
  ]);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Notifications & Alerts</h1>
        <p className="text-sm text-slate-500">
          Stay updated with important notices, deadlines, and schedule changes.
        </p>
      </div>

      <div className="space-y-3">
        {alerts.map((item) => (
          <div
            key={item.id}
            className={`flex flex-col sm:flex-row sm:items-center justify-between rounded-xl border p-5 transition ${
              item.read ? 'border-slate-200 bg-white' : 'border-blue-200 bg-blue-50/40'
            }`}
          >
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-blue-600">{item.course}</span>
                <span className="text-xs text-slate-400">&bull; {item.time}</span>
                {!item.read && (
                  <span className="rounded-full bg-blue-600 px-2 py-0.5 text-[10px] font-semibold text-white">
                    New
                  </span>
                )}
              </div>
              <h3 className="font-bold text-slate-900 text-sm sm:text-base">{item.title}</h3>
              <p className="text-xs text-slate-500">Posted by {item.sender}</p>
            </div>

            <div className="mt-3 sm:mt-0">
              <span className="inline-block rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                {item.type}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}