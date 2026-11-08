'use client';

import { useState } from 'react';
import StatusBadge from '@/components/StatusBadge';

export default function JoinRequestsPage() {
  const [requests] = useState([
    {
      id: 1,
      classCode: 'CSE 222',
      className: 'Database Management System and Sessional',
      crName: 'Syeda Dillir Hossain Binti',
      submittedAt: 'Oct 02, 2026',
      status: 'approved',
    },
    {
      id: 2,
      classCode: 'EEE 101',
      className: 'Electrical Circuit Analysis',
      crName: 'Syeda Dillir Hossain Binti',
      submittedAt: 'Oct 07, 2026',
      status: 'pending',
    },
    {
      id: 3,
      classCode: 'MAT 201',
      className: 'Linear Algebra',
      crName: 'Rafiqul Islam',
      submittedAt: 'Sep 25, 2026',
      status: 'rejected',
    },
  ]);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">CR Join Requests</h1>
        <p className="text-sm text-slate-500">
          Track the status of your classroom membership requests sent to Class Representatives.
        </p>
      </div>

      <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-xs">
        <table className="w-full text-left text-sm text-slate-600">
          <thead className="bg-slate-50 text-xs uppercase text-slate-500 border-b border-slate-200">
            <tr>
              <th className="px-6 py-3.5 font-semibold">Class Code & Name</th>
              <th className="px-6 py-3.5 font-semibold">Class CR</th>
              <th className="px-6 py-3.5 font-semibold">Requested Date</th>
              <th className="px-6 py-3.5 font-semibold">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {requests.map((req) => (
              <tr key={req.id} className="hover:bg-slate-50/50">
                <td className="px-6 py-4">
                  <div className="font-semibold text-slate-900">{req.classCode}</div>
                  <div className="text-xs text-slate-500">{req.className}</div>
                </td>
                <td className="px-6 py-4 font-medium text-slate-700">{req.crName}</td>
                <td className="px-6 py-4 text-xs text-slate-500">{req.submittedAt}</td>
                <td className="px-6 py-4">
                  <StatusBadge status={req.status} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}