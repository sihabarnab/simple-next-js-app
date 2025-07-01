import Button from "@/app/components/Button";

export const metadata = {
  title: "Analytics Dashboard",
  description:
    "A simple analytics dashboard built with Next.js and Tailwind CSS",
};

const stats = [
  { title: "Total Users", value: "12,430", change: "+5.2%" },
  { title: "Revenue", value: "$34,500", change: "+8.9%" },
  { title: "New Signups", value: "1,230", change: "+2.3%" },
  { title: "Bounce Rate", value: "24.3%", change: "-1.1%" },
];

const Analytics = () => {
  // throw new Error("Error occured in Alalytics page ");

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">
        📊 Analytics Dashboard
      </h1>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-2xl shadow p-5">
            <h2 className="text-gray-500 text-sm">{stat.title}</h2>
            <p className="text-2xl font-semibold text-gray-800">{stat.value}</p>
            <p
              className={`text-sm ${
                stat.change.startsWith("+") ? "text-green-600" : "text-red-600"
              }`}
            >
              {stat.change} this week
            </p>
          </div>
        ))}
      </div>

      {/* Chart Placeholder */}
      <div className="bg-white rounded-2xl shadow p-6">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">
          User Growth (Last 30 Days)
        </h2>
        <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center text-gray-400">
          📈 Chart will appear here
        </div>
      </div>
    </div>
  );
};

export default Analytics;
