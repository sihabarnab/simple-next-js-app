import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen px-6 py-12 bg-gray-50 text-gray-800">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">🏠 Welcome to the Home Page</h1>
        <p className="text-lg text-gray-600 mb-8">
          Discover amazing content and explore new features built with Next.js
          and Tailwind CSS.
        </p>


        <p className="text-base text-gray-700 leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste sint
          doloribus sed molestiae libero minima, nulla nemo incidunt possimus
          dicta consequatur consequuntur? Asperiores quidem quas nemo placeat
          odit. A, sunt!
        </p>
      </div>
    </div>
  );
}
