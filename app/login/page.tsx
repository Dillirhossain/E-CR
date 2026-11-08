'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <main className="grid min-h-screen grid-cols-1 md:grid-cols-2">
      {/* Left Panel: Branding (Navy Blue) */}
      <div className="hidden flex-col justify-between bg-[#0A192F] p-12 text-white md:flex">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600 font-bold text-xl">
            E
          </div>
          <span className="text-2xl font-bold tracking-wider">E-CR</span>
        </div>

        <div className="space-y-4">
          <h1 className="text-4xl font-bold leading-tight">
            Connect Communicate Coordinate
          </h1>
          <p className="text-slate-300">
            Better Communication, Stronger Academics. E-CR Class Representative Management Platform.
          </p>
        </div>

        <p className="text-xs text-slate-400">
          &copy; 2026 E-CR Platform. All rights reserved.
        </p>
      </div>

      {/* Right Panel: Login Form */}
      <div className="flex items-center justify-center bg-slate-50 px-6 py-12">
        <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
          <div className="text-center">
            <h1 className="text-3xl font-bold tracking-tight text-slate-900">
              Welcome Back!
            </h1>
            <p className="mt-2 text-sm text-slate-500">
              Sign in to continue to your account
            </p>
          </div>

          <form className="mt-8 space-y-5" onSubmit={(e) => e.preventDefault()}>
            {/* Email or Student ID Input */}
            <div>
              <label
                htmlFor="identifier"
                className="block text-sm font-medium text-slate-700"
              >
                Email or Student ID
              </label>
              <input
                id="identifier"
                type="text"
                placeholder="Enter email or student ID"
                className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-2.5 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 text-sm"
              />
            </div>

            {/* Password Input with Show/Hide Toggle */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-slate-700"
              >
                Password
              </label>
              <div className="relative mt-2">
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter your password"
                  className="w-full rounded-lg border border-slate-300 px-4 py-2.5 pr-12 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 text-sm"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-semibold text-slate-500 hover:text-slate-700"
                >
                  {showPassword ? 'HIDE' : 'SHOW'}
                </button>
              </div>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                />
                <span className="text-slate-600">Remember me</span>
              </label>
              <Link
                href="/forgot-password"
                className="font-medium text-blue-600 hover:text-blue-700"
              >
                Forgot Password?
              </Link>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full rounded-lg bg-blue-600 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 transition"
            >
              Sign In
            </button>
          </form>

          {/* Sign Up Redirect */}
          <p className="mt-8 text-center text-sm text-slate-600">
            Don't have an account?{' '}
            <Link
              href="/register"
              className="font-semibold text-blue-600 hover:text-blue-700"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}