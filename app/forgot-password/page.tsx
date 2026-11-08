'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ForgotPasswordPage() {
  const [submitted, setSubmitted] = useState(false);

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
            Reset Your Password
          </h1>
          <p className="text-slate-300">
            Don't worry! Enter your registered email address and we'll send you instructions to reset your password.
          </p>
        </div>

        <p className="text-xs text-slate-400">
          &copy; 2026 E-CR Platform. All rights reserved.
        </p>
      </div>

      {/* Right Panel: Forgot Password Form */}
      <div className="flex items-center justify-center bg-slate-50 px-6 py-12">
        <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
          <div className="text-center">
            <h1 className="text-3xl font-bold tracking-tight text-slate-900">
              Forgot Password?
            </h1>
            <p className="mt-2 text-sm text-slate-500">
              No stress, we'll help you get back into your account
            </p>
          </div>

          {submitted ? (
            <div className="mt-8 space-y-4 text-center">
              <div className="rounded-lg bg-green-50 p-4 border border-green-200 text-green-700 text-sm font-medium">
                If an account exists with that email, a password reset link has been sent.
              </div>
              <Link
                href="/login"
                className="inline-block mt-4 text-sm font-semibold text-blue-600 hover:text-blue-700"
              >
                &larr; Back to Login
              </Link>
            </div>
          ) : (
            <form
              className="mt-8 space-y-5"
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
            >
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-slate-700"
                >
                  Registered Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="enter your email address"
                  className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-2.5 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 text-sm"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-lg bg-blue-600 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 transition"
              >
                Send Reset Link
              </button>

              <div className="text-center mt-6">
                <Link
                  href="/login"
                  className="text-sm font-semibold text-blue-600 hover:text-blue-700"
                >
                  &larr; Back to Login
                </Link>
              </div>
            </form>
          )}
        </div>
      </div>
    </main>
  );
}