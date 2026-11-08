'use client';

import { useState } from 'react';
import Link from 'next/link';
import StatusBadge from '@/components/StatusBadge';

export default function ClassDetailPage() {
  const [activeTab, setActiveTab] = useState<'announcements' | 'routine' | 'members'>('announcements');

  const classDetails = {
    code: 'CSE 222',
    title: 'Database Management Systems Sessional',
    section: 'Section A',
    instructor: 'Jahid Karim Fahim',
    crName: 'Syeda Dillir Hossain Binti (CR)',
  };

  const announcements = [
    {
      id: 1,
      author: 'Syeda Dillir Hossain Binti (CR)',
      date: 'Oct 8, 2026',
      title: 'Lab Quiz 2 Rescheduled',
      content: 'Please note that Lab Quiz 2 has been postponed to next Tuesday due to the department seminar.',
      tag: 'Urgent',
    },
    {
      id: 2,
      author: 'Jahid Karim Fahim',
      date: 'Oct 5, 2026',
      title: 'Assignment 1 Submission Portal Open',
      content: 'The portal is open now. Please submit your solution ZIP files before October 12 midnight.',
      tag: 'Assignment',
    },
  ];

  const routine = [
    { day: 'Sunday', time: '10:00 AM - 11:30 AM', room: 'Room 402', subject: 'Theory' },
    { day: 'Tuesday', time: '10:00 AM - 11:30 AM', room: 'Room 402', subject: 'Theory' },
    { day: 'Thursday', time: '02:00 PM - 04:30 PM', room: 'Lab 3 (3rd Floor)', subject: 'Lab Session' },
  ];

  return (
    <div className="space-y-6">
      {/* Back button & Breadcrumb */}
      <div>
        <Link
          href="/dashboard/classes"
          className="inline-flex items-center text-xs font-semibold text-blue-600 hover:text-blue-700"
        >
          &larr; Back to Enrolled Classes
        </Link>
      </div>

      {/* Class Banner Header */}
      <div className="rounded-2xl bg-[#0A192F] p-6 text-white shadow-sm sm:p-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <span className="inline-block rounded-md bg-blue-600 px-2.5 py-1 text-xs font-bold tracking-wider">
              {classDetails.code}
            </span>
            <h1 className="mt-2 text-2xl font-bold sm:text-3xl">{classDetails.title}</h1>
            <p className="mt-1 text-sm text-slate-300">
              {classDetails.section} &bull; Instructor: {classDetails.instructor}
            </p>
          </div>
          <div className="rounded-xl bg-slate-800/80 p-4 border border-slate-700 text-xs space-y-1">
            <p className="text-slate-400">Class Representative:</p>
            <p className="font-semibold text-blue-400">{classDetails.crName}</p>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="border-b border-slate-200">
        <nav className="flex gap-6">
          <button
            onClick={() => setActiveTab('announcements')}
            className={`pb-3 text-sm font-semibold transition border-b-2 ${
              activeTab === 'announcements'
                ? 'border-blue-600 text-blue-600'
                : 'border-transparent text-slate-500 hover:text-slate-700'
            }`}
          >
            Announcements & Notices
          </button>
          <button
            onClick={() => setActiveTab('routine')}
            className={`pb-3 text-sm font-semibold transition border-b-2 ${
              activeTab === 'routine'
                ? 'border-blue-600 text-blue-600'
                : 'border-transparent text-slate-500 hover:text-slate-700'
            }`}
          >
            Class Routine
          </button>
        </nav>
      </div>

      {/* Tab Contents */}
      {activeTab === 'announcements' && (
        <div className="space-y-4">
          {announcements.map((item) => (
            <div key={item.id} className="rounded-xl border border-slate-200 bg-white p-5 shadow-xs">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-slate-800 text-sm">{item.author}</span>
                  <span className="text-xs text-slate-400">&bull; {item.date}</span>
                </div>
                <span className="rounded-full bg-blue-50 px-2.5 py-0.5 text-xs font-semibold text-blue-700 border border-blue-100">
                  {item.tag}
                </span>
              </div>
              <h3 className="mt-3 font-bold text-slate-900">{item.title}</h3>
              <p className="mt-1 text-sm text-slate-600">{item.content}</p>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'routine' && (
        <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-xs">
          <table className="w-full text-left text-sm text-slate-600">
            <thead className="bg-slate-50 text-xs uppercase text-slate-500 border-b border-slate-200">
              <tr>
                <th className="px-6 py-3 font-semibold">Day</th>
                <th className="px-6 py-3 font-semibold">Time</th>
                <th className="px-6 py-3 font-semibold">Room</th>
                <th className="px-6 py-3 font-semibold">Type</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {routine.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-50/50">
                  <td className="px-6 py-4 font-semibold text-slate-800">{row.day}</td>
                  <td className="px-6 py-4">{row.time}</td>
                  <td className="px-6 py-4">{row.room}</td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center rounded-md bg-slate-100 px-2 py-1 text-xs font-medium text-slate-700">
                      {row.subject}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}