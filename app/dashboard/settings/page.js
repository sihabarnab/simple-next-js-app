import Button from "@/app/components/Button";
import React from "react";

console.log("Settings page loaded");

const Page = () => {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12 bg-white rounded-2xl shadow-lg mt-10">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">⚙️ Settings</h1>
      <p className="text-gray-600 leading-relaxed mb-8">
        Manage your preferences, account details, and application settings. You
        can configure notifications, privacy options, and other customization
        here to make your experience better.
      </p>

      <div className="flex justify-end">
        <Button>Go to Analytics Page</Button>
      </div>
    </div>
  );
};

export default Page;
