"use client"; // Error boundaries must be Client Components

import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error("App Error:", error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-6 py-10 text-center bg-gray-50 text-gray-800">
      <svg
        className="w-20 h-20 text-red-500 mb-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 9v2m0 4h.01M12 3C7.029 3 3 7.029 3 12s4.029 9 9 9 9-4.029 9-9-4.029-9-9-9z"
        />
      </svg>
      <h2 className="text-2xl font-semibold mb-4">
        Oops! Something went wrong.
      </h2>
      <p className="mb-6 text-gray-600">
        An unexpected error occurred. Please try again.
      </p>
      <button
        onClick={reset}
        className="px-5 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-all"
      >
        Try Again
      </button>
    </div>
  );
}
