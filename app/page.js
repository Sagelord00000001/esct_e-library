'use client';

import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs';
import { LoginLink, RegisterLink } from '@kinde-oss/kinde-auth-nextjs';

export default function Home() {
  const { user, isLoading } = useKindeBrowserClient();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-500">
        <p className="text-lg font-semibold text-white">Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-blue-100 flex flex-col items-center justify-center p-4">
      <div className="max-w-4xl text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-blue-900 mb-6">
          Welcome to the ESCT e-Library
        </h1>
        <p className="text-lg sm:text-xl text-gray-700 mb-8">
          Your gateway to limitless learning! Explore a vast collection of resources, books, and research materials tailored for students and faculty members.
        </p>

        {!user ? (
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <LoginLink
              postLoginRedirectURL="/dashboard"
              className="bg-blue-700 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition duration-300"
            >
              Sign In
            </LoginLink>
            <RegisterLink
              className="bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-800 transition duration-300"
            >
              Sign Up
            </RegisterLink>
          </div>
        ) : (
          <p className="text-lg text-gray-700">
            You are already signed in. Go to your{' '}
            <a href="/dashboard" className="text-blue-700 underline hover:text-blue-800">
              Dashboard
            </a>
            .
          </p>
        )}
      </div>
    </div>
  );
}