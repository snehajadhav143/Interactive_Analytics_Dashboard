// src/components/KpiCard.jsx

export default function KpiCard({ title, value, change, isPositive }) {
  return (
    <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100">
      <p className="text-sm font-medium text-gray-500">{title}</p>
      <div className="flex items-baseline justify-between mt-2">
        <h3 className="text-2xl font-bold text-gray-950">{value}</h3>
        <span
          className={`text-xs font-semibold px-2 py-1 rounded-full ${
            isPositive ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"
          }`}
        >
          {change}
        </span>
      </div>
    </div>
  );
}
