import { Suspense } from "react";
import Posts from "../components/Posts";

export default function Heavy() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <h1 className="text-4xl font-bold mb-6 text-gray-800">🧠 Heavy Page</h1>

      <Suspense
        fallback={
          <div className="flex flex-col items-center justify-center h-40 text-gray-600">
            <svg
              className="animate-spin h-8 w-8 text-blue-500 mb-2"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v8H4z"
              />
            </svg>
            <p className="text-lg">Loading posts...</p>
          </div>
        }
      >
        <Posts />
      </Suspense>
    </div>
  );
}
