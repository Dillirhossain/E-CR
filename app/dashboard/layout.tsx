'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { name: 'Dashboard', href: '/dashboard' },
  { name: 'Classes', href: '/dashboard/classes' },
  { name: 'CR Join Requests', href: '/dashboard/join-requests' },
  { name: 'Alerts', href: '/dashboard/alerts' },
  { name: 'Profile', href: '/dashboard/profile' },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-slate-50 md:flex">
      {/* Desktop Sidebar (Navy Theme) */}
      <aside className="hidden w-64 flex-col justify-between bg-[#0A192F] p-6 text-white md:flex min-h-screen">
        <div className="space-y-8">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600 font-bold text-lg">
              E
            </div>
            <span className="text-xl font-bold tracking-wider">E-CR</span>
          </div>

          {/* Navigation */}
          <nav className="space-y-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center rounded-lg px-4 py-2.5 text-sm font-medium transition ${
                    isActive
                      ? 'bg-blue-600 text-white'
                      : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* User Info / Logout Footer */}
        <div className="border-t border-slate-800 pt-4">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center font-semibold text-xs border border-blue-400/30">
              U
            </div>
            <div>
              <p className="text-xs font-semibold text-white">Student User</p>
              <Link href="/login" className="text-[11px] text-slate-400 hover:text-rose-400">
                Sign Out
              </Link>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-h-screen pb-16 md:pb-0">
        {/* Top Header */}
        <header className="sticky top-0 z-10 flex h-16 items-center justify-between border-b border-slate-200 bg-white px-6 shadow-xs">
          <h2 className="text-lg font-bold text-slate-800">
            Smart Digital Classroom
          </h2>
          <div className="flex items-center gap-4">
            <Link
              href="/dashboard/alerts"
              className="relative p-2 text-slate-500 hover:text-slate-700"
            >
              🔔
              <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-rose-500"></span>
            </Link>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-6">{children}</main>
      </div>

      {/* Mobile Bottom Navigation Bar */}
      <nav className="fixed bottom-0 left-0 right-0 z-20 flex items-center justify-around border-t border-slate-200 bg-white py-2 md:hidden">
        {navItems.slice(0, 4).map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center text-xs font-medium ${
                isActive ? 'text-blue-600' : 'text-slate-500'
              }`}
            >
              <span>{item.name}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}