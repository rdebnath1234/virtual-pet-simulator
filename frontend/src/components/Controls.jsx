import React from "react";

const Controls = ({ onAction, disabled }) => (
  <div className="grid gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-1">
    <button
      onClick={() => onAction("feed")}
      disabled={disabled}
      className="grid min-h-[108px] gap-1 rounded-3xl bg-gradient-to-br from-accent to-accentDark p-4 text-left font-semibold text-white shadow-card transition hover:-translate-y-1 hover:shadow-xl disabled:opacity-70"
    >
      <span className="text-2xl">🍓</span>
      <span>Feed</span>
      <small className="text-white/80">Reduce hunger</small>
    </button>
    <button
      onClick={() => onAction("play")}
      disabled={disabled}
      className="grid min-h-[108px] gap-1 rounded-3xl bg-gradient-to-br from-accent to-accentDark p-4 text-left font-semibold text-white shadow-card transition hover:-translate-y-1 hover:shadow-xl disabled:opacity-70"
    >
      <span className="text-2xl">🪀</span>
      <span>Play</span>
      <small className="text-white/80">Boost happiness</small>
    </button>
    <button
      onClick={() => onAction("sleep")}
      disabled={disabled}
      className="grid min-h-[108px] gap-1 rounded-3xl bg-gradient-to-br from-accent to-accentDark p-4 text-left font-semibold text-white shadow-card transition hover:-translate-y-1 hover:shadow-xl disabled:opacity-70"
    >
      <span className="text-2xl">🌙</span>
      <span>Sleep</span>
      <small className="text-white/80">Restore energy</small>
    </button>
  </div>
);

export default Controls;
