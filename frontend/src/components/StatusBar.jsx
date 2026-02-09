import React from "react";

const statusColor = (value) => {
  if (value >= 70) return "bg-green-500";
  if (value >= 40) return "bg-yellow-400";
  return "bg-red-400";
};

const StatusBar = ({ label, value, icon }) => (
  <div className="rounded-2xl bg-white/85 p-4 shadow-card text-left backdrop-blur">
    <div className="flex items-center gap-3">
      <span className="grid h-10 w-10 place-items-center rounded-2xl bg-white/80 text-xl">
        {icon}
      </span>
      <div>
        <div className="text-sm font-semibold text-neutral-500">{label}</div>
        <div className="text-2xl font-bold text-neutral-900">{Math.round(value)}</div>
      </div>
    </div>
    <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/70">
      <div className={`h-full transition-all ${statusColor(value)}`} style={{ width: `${value}%` }} />
    </div>
  </div>
);

export default StatusBar;
