import React, { useEffect, useRef, useState } from "react";
import { fetchPet, actOnPet, fetchPetTypes } from "./api/petApi.js";
import StatusBar from "./components/StatusBar.jsx";
import PetView from "./components/PetView.jsx";
import Controls from "./components/Controls.jsx";

const POLL_INTERVAL_MS = 3000;

const App = () => {
  const [pet, setPet] = useState(null);
  const [petTypes, setPetTypes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState(null);
  const [actionFx, setActionFx] = useState(null);
  const actionTimer = useRef(null);

  useEffect(() => {
    fetchPetTypes()
      .then((data) => setPetTypes(data.types || []))
      .catch(() => setPetTypes([]));
  }, []);

  useEffect(() => {
    let active = true;

    const loadPet = async () => {
      try {
        const data = await fetchPet();
        if (active) setPet(data.pet);
        if (active) setError(null);
      } catch (err) {
        if (active) setError(err.message);
      } finally {
        if (active) setLoading(false);
      }
    };

    loadPet();
    const timer = setInterval(loadPet, POLL_INTERVAL_MS);

    return () => {
      active = false;
      clearInterval(timer);
    };
  }, []);

  const handleAction = async (action) => {
    if (!pet) return;
    setBusy(true);
    setError(null);
    setActionFx(action);
    if (actionTimer.current) clearTimeout(actionTimer.current);
    actionTimer.current = setTimeout(() => setActionFx(null), 1200);

    try {
      const optimistic = { ...pet };
      if (action === "feed") {
        optimistic.hunger = Math.max(0, pet.hunger - 25);
        optimistic.happiness = Math.min(100, pet.happiness + 4);
      }
      if (action === "play") {
        optimistic.happiness = Math.min(100, pet.happiness + 18);
        optimistic.energy = Math.max(0, pet.energy - 20);
        optimistic.hunger = Math.min(100, pet.hunger + 6);
        optimistic.state = "awake";
      }
      if (action === "sleep") {
        optimistic.state = "sleeping";
        optimistic.energy = Math.min(100, pet.energy + 10);
      }

      setPet(optimistic);
      const data = await actOnPet(action);
      setPet(data.pet);
    } catch (err) {
      setError(err.message);
    } finally {
      setBusy(false);
    }
  };

  if (loading) {
    return <div className="grid min-h-screen place-items-center font-body text-lg">Waking up your pet...</div>;
  }

  if (!pet) {
    return <div className="grid min-h-screen place-items-center font-body">Unable to load pet. {error}</div>;
  }

  const typeLabel = petTypes.find((type) => type.key === pet.type)?.label || pet.type;

  return (
    <div className="page page-bg relative">
      <div className="absolute bottom-0 left-0 right-0 h-64 floor" />

      <header className="relative z-10 flex w-full max-w-5xl flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="font-display text-4xl">Virtual Pet Simulator</h1>
          <p className="text-sm text-neutral-800">Keep {pet.name} happy, fed, and energized.</p>
        </div>
        <div className="flex gap-3">
          <span className="rounded-full bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#6d3d17]">
            {typeLabel}
          </span>
          <span className="rounded-full bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#6d3d17]">
            {pet.state}
          </span>
        </div>
      </header>

      <main className="relative z-10 grid w-full max-w-5xl gap-6 lg:grid-cols-[1.05fr_1.4fr_1.05fr]">
        <section className="grid gap-4">
          <StatusBar label="Hunger" value={pet.hunger} icon="🍯" />
          <StatusBar label="Happiness" value={pet.happiness} icon="✨" />
          <StatusBar label="Energy" value={pet.energy} icon="⚡" />
        </section>

        <section className="rounded-3xl bg-white/85 p-6 shadow-card backdrop-blur">
          <PetView pet={pet} actionFx={actionFx} />
        </section>

        <section>
          <Controls onAction={handleAction} disabled={busy} />
        </section>
      </main>

      {error && <div className="relative z-10 mt-4 font-semibold text-red-600">{error}</div>}
    </div>
  );
};

export default App;
