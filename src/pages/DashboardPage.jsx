import { useContext } from "react";
import { InstalledAppsContext } from "../context/InstalledAppContext";
import { Cell, Legend, Pie, PieChart, Tooltip } from "recharts";

const DashboardPage = () => {
  const { installedApps } = useContext(InstalledAppsContext);
  const chartData = installedApps.map((app) => ({
    name: app.title,
    value: app.ratingAvg,
  }));
  const colors = ["#8b5cf6", "#06b6d4", "#f97316", "#22c55e", "#eab308"];

  return (
    <div className="container mx-auto flex flex-col justify-center items-center pt-15">
      <h2 className="text-4xl font-bold">Installed Apps ratings:</h2>
      {installedApps.length === 0 ? (
        <p className="mt-10 text-xl font-semibold text-gray-500">
          কোনো ইনস্টল করা অ্যাপ নেই
        </p>
      ) : (
        <PieChart
          style={{
            width: "100%",
            maxWidth: "500px",
            maxHeight: "80vh",
            aspectRatio: 1,
          }}
          responsive
        >
          <Pie
            data={chartData}
            dataKey="value"
            nameKey="name"
            innerRadius="55%"
            outerRadius="85%"
            paddingAngle={4}
            isAnimationActive
          >
            {chartData.map((app, index) => (
              <Cell key={app.name} fill={colors[index % colors.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      )}
    </div>
  );
};

export default DashboardPage;
