'use client';

import { useState } from 'react';
import Link from 'next/link';
import StatusBadge from '@/components/StatusBadge';

export default function ClassesPage() {
  const [showJoinModal, setShowJoinModal] = useState(false);
  const [classCode, setClassCode] = useState('');

  const enrolledClasses = [
    {
      id: 'cse-221',
      code: 'CSE 222',
      name: 'Database Management System Sessional',
      section: 'Section A',
      instructor: 'Jahid Karim Fahim',
      status: 'approved',
      members: 42,
    },
    {
      id: 'eee-101',
      code: 'EEE 101',
      name: 'Electrical Circuit Analysis',
      section: 'Section B',
      instructor: 'Prof. Tanvir Hasan',
      status: 'pending',
      members: 38,
    },
  ];

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Enrolled Classes</h1>
          <p className="text-sm text-slate-500">
            View and manage all your active classroom spaces.
          </p>
        </div>
        <button
          onClick={() => setShowJoinModal(true)}
          className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-blue-700 transition"
        >
          + Join New Class
        </button>
      </div>

      {/* Class Cards Grid */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {enrolledClasses.map((cls) => (
          <div
            key={cls.id}
            className="flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-6 shadow-xs hover:border-blue-300 transition"
          >
            <div>
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-xs font-bold text-blue-600">{cls.code}</span>
                  <h3 className="text-lg font-bold text-slate-900">{cls.name}</h3>
                </div>
                <StatusBadge status={cls.status} />
              </div>

              <div className="mt-4 space-y-1 text-sm text-slate-600">
                <p><span className="font-medium text-slate-700">Section:</span> {cls.section}</p>
                <p><span className="font-medium text-slate-700">Instructor:</span> {cls.instructor}</p>
                <p><span className="font-medium text-slate-700">Members:</span> {cls.members} Students</p>
              </div>
            </div>

            <div className="mt-6 border-t border-slate-100 pt-4 flex items-center justify-end">
              <Link
                href={`/dashboard/classes/${cls.id}`}
                className="text-sm font-semibold text-blue-600 hover:text-blue-700"
              >
                Enter Classroom &rarr;
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Join Class Modal */}
      {showJoinModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 p-4">
          <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl space-y-5">
            <h3 className="text-lg font-bold text-slate-900">Join a Classroom</h3>
            <p className="text-xs text-slate-500">
              Enter the unique Class Code provided by your Class Representative (CR).
            </p>

            <div>
              <label htmlFor="code" className="block text-sm font-medium text-slate-700">
                Class Code / Invite Code
              </label>
              <input
                id="code"
                type="text"
                placeholder="e.g. CSE221-SEC-A"
                value={classCode}
                onChange={(e) => setClassCode(e.target.value)}
                className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-2.5 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 text-sm"
              />
            </div>

            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                onClick={() => setShowJoinModal(false)}
                className="rounded-lg border border-slate-300 px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-50"
              >
                Cancel
              </button>
              <button
                onClick={() => setShowJoinModal(false)}
                className="rounded-lg bg-blue-600 px-4 py-2 text-xs font-semibold text-white hover:bg-blue-700"
              >
                Send Request
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}