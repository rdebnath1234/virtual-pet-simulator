import React from "react";
import catImage from "../assets/cvqx_lkdr_230628.jpg";

const moodClass = (pet) => {
  if (pet.state === "sleeping") return "sleeping";
  if (pet.hunger >= 70) return "hungry";
  if (pet.happiness >= 70) return "happy";
  if (pet.state === "exhausted" || pet.energy <= 20) return "tired";
  return "neutral";
};

const PetView = ({ pet, actionFx }) => {
  const mood = moodClass(pet);

  const moodStyles = {
    hungry: "animate-wobble saturate-75",
    happy: "animate-bouncey saturate-150",
    tired: "opacity-80 grayscale-[40%]",
    sleeping: "animate-snooze opacity-75",
    neutral: "animate-floaty"
  };

  const isPlay = actionFx === "play";
  const isSleep = actionFx === "sleep" || mood === "sleeping";

  return (
    <div className="relative grid min-h-[240px] place-items-center sm:min-h-[320px]">
      <div className="absolute h-44 w-44 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.45),rgba(255,255,255,0))] blur-sm animate-aura sm:h-60 sm:w-60" />
      <div
        className={`relative ${moodStyles[mood]} ${isPlay ? "scale-105" : ""} ${isSleep ? "animate-roll" : ""} transition`}
      >
        <img
          src={catImage}
          alt="Cartoon cat"
          className={`h-40 w-40 rounded-full object-cover filter shadow-[inset_0_-12px_18px_rgba(123,67,26,0.25)] sm:h-52 sm:w-52 ${
            isPlay ? "animate-bouncey" : ""
          }`}
        />
        {isPlay && (
          <div className="pointer-events-none absolute -right-6 -top-4 text-2xl animate-sparkle">✨</div>
        )}
        {isPlay && (
          <div className="pointer-events-none absolute -left-6 top-8 text-xl animate-sparkle">💫</div>
        )}
        {isPlay && (
          <div className="pointer-events-none absolute -right-10 bottom-2 text-3xl animate-toyshake">🧸</div>
        )}
        {isSleep && (
          <div className="pointer-events-none absolute -right-4 -top-10 text-lg font-semibold text-white/80">
            <span className="block animate-zzz">Z</span>
            <span className="block animate-zzz delay-150">Z</span>
            <span className="block animate-zzz delay-300">Z</span>
          </div>
        )}
      </div>
      <div className="mt-3 h-6 w-40 rounded-full bg-[#c97a3d] shadow-[inset_0_6px_0_rgba(255,255,255,0.25)] sm:mt-4 sm:h-7 sm:w-52" />
      <div className="mt-3 flex flex-wrap items-center justify-center gap-2 text-[10px] uppercase tracking-[0.18em] text-[#6d3d17] sm:gap-3 sm:text-xs sm:tracking-[0.2em]">
        <span className="font-semibold">{pet.name}</span>
        <span>{pet.state}</span>
      </div>
    </div>
  );
};

export default PetView;
