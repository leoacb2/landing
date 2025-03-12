"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white">
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="mb-4 text-6xl font-bold text-[#4F3890]">Oops!</h1>
        <h2 className="mb-8 text-3xl font-medium">Something went wrong</h2>
        <p className="mb-8 text-lg text-gray-600">
          We apologize for the inconvenience. Please try again later.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={reset}
            className="inline-flex items-center px-6 py-3 text-base font-semibold bg-gradient-to-r from-[#4F3890] via-[#8760F6] to-[#4CD6E9] text-white rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Try again
          </button>
          <Link
            href="/"
            className="inline-flex items-center px-6 py-3 text-base font-semibold bg-white border border-[#4F3890] text-[#4F3890] rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Go back home
          </Link>
        </div>
      </div>
    </div>
  );
}
