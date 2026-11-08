'use client';

export default function ProfilePage() {
  const user = {
    name: 'Student User',
    email: 'student@university.edu',
    studentId: '2026-1-60-001',
    department: 'Computer Science & Engineering',
    role: 'Student',
  };

  return (
    <div className="max-w-3xl space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">User Profile</h1>
        <p className="text-sm text-slate-500">
          Manage your personal information and application account settings.
        </p>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs space-y-6">
        <div className="flex items-center gap-4 border-b border-slate-100 pb-6">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-2xl font-bold text-white shadow-md">
            S
          </div>
          <div>
            <h2 className="text-xl font-bold text-slate-900">{user.name}</h2>
            <p className="text-xs text-slate-500">{user.department}</p>
            <span className="mt-2 inline-block rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-semibold text-blue-800 border border-blue-200">
              Role: {user.role}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 text-sm">
          <div className="rounded-xl bg-slate-50 p-4 border border-slate-100">
            <p className="text-xs font-medium text-slate-400">Full Name</p>
            <p className="mt-1 font-semibold text-slate-800">{user.name}</p>
          </div>
          <div className="rounded-xl bg-slate-50 p-4 border border-slate-100">
            <p className="text-xs font-medium text-slate-400">Email Address</p>
            <p className="mt-1 font-semibold text-slate-800">{user.email}</p>
          </div>
          <div className="rounded-xl bg-slate-50 p-4 border border-slate-100">
            <p className="text-xs font-medium text-slate-400">Student ID</p>
            <p className="mt-1 font-semibold text-slate-800">{user.studentId}</p>
          </div>
          <div className="rounded-xl bg-slate-50 p-4 border border-slate-100">
            <p className="text-xs font-medium text-slate-400">Department</p>
            <p className="mt-1 font-semibold text-slate-800">{user.department}</p>
          </div>
        </div>
      </div>
    </div>
  );
}