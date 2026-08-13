// src/App.jsx
import AnalyticsChart from "./charts/AnalyticsChart";
import DataTable from "./components/DataTable";
import KpiCard from "./components/KpiCard";
import { kpiData } from "./data/mockData";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50/50 text-gray-900 p-4 sm:p-8">
      <div className="max-w-7xl mx-auto mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-950">
          Analytics Dashboard
        </h1>
        <p className="text-gray-500 mt-1 text-sm sm:text-base">
          Welcome back! Here is your business overview.
        </p>
      </div>

      <div className="max-w-7xl mx-auto space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {kpiData.map((kpi) => (
            <KpiCard key={kpi.id} {...kpi} />
          ))}
        </div>

        <AnalyticsChart />
        <DataTable />
      </div>
    </div>
  );
}
