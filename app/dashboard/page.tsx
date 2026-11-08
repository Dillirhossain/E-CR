'use client';

import StatCard from '../../components/StatCard';
import StatusBadge from '../../components/StatusBadge';

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      {/* Welcome Banner */}
      <div>
        <h1 className="text-2xl font-bold text-slate-900">
          Good Morning, Student! 👋
        </h1>
        <p className="text-sm text-slate-500">
          Here is what is happening in your enrolled classes today.
        </p>
      </div>

      {/* Overview Stat Cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <StatCard title="Enrolled Classes" value={3} subtitle="Active this semester" />
        <StatCard title="Upcoming Deadlines" value={2} subtitle="Due in next 3 days" />
        <StatCard title="Unread Alerts" value={5} subtitle="Notifications pending" />
      </div>

      {/* Recent Activity / Announcements Section */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Active Class Quick View */}
        <div className="lg:col-span-2 space-y-4">
          <h2 className="text-lg font-semibold text-slate-900">Active Classes</h2>
          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-xs space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div>
                <h3 className="font-bold text-slate-800">CSE 221 - Data Structures</h3>
                <p className="text-xs text-slate-500">Section A &bull; 42 Students</p>
              </div>
              <StatusBadge status="approved" />
            </div>

            <div className="space-y-3 text-sm">
              <p className="font-medium text-slate-700">Recent Announcements:</p>
              <div className="rounded-lg bg-slate-50 p-3 text-xs text-slate-600 border border-slate-100">
                📌 <span className="font-semibold text-slate-800">Class Cancelled:</span> Today's 2:00 PM lecture is rescheduled to Thursday.
              </div>
            </div>
          </div>
        </div>

        {/* Quick Action Side Panel */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-slate-900">Quick Actions</h2>
          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-xs space-y-3">
            <button className="w-full rounded-lg bg-blue-600 py-2.5 text-xs font-semibold text-white hover:bg-blue-700 transition">
              + Join New Class
            </button>
            <button className="w-full rounded-lg border border-slate-200 bg-white py-2.5 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition">
              View All Deadlines
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}