import React from "react";

const statusColor = (value) => {
  if (value >= 70) return "bg-green-500";
  if (value >= 40) return "bg-yellow-400";
  return "bg-red-400";
};

const StatusBar = ({ label, value, icon }) => (
  <div className="rounded-2xl bg-white/85 p-3 text-left shadow-card backdrop-blur sm:p-4">
    <div className="flex items-center gap-3">
      <span className="grid h-9 w-9 place-items-center rounded-2xl bg-white/80 text-lg sm:h-10 sm:w-10 sm:text-xl">
        {icon}
      </span>
      <div>
        <div className="text-xs font-semibold text-neutral-500 sm:text-sm">{label}</div>
        <div className="text-xl font-bold text-neutral-900 sm:text-2xl">{Math.round(value)}</div>
      </div>
    </div>
    <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/70">
      <div className={`h-full transition-all ${statusColor(value)}`} style={{ width: `${value}%` }} />
    </div>
  </div>
);

export default StatusBar;
