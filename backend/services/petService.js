import { getPetType } from "./petTypes.js";

const clamp = (value, min = 0, max = 100) => Math.max(min, Math.min(max, value));

const mergeDecay = (petType, decayOverrides = {}) => {
  const override = decayOverrides?.[petType] || {};
  return { ...getPetType(petType).decay, ...override };
};

export const applyTimeDecay = (pet, settings, now = new Date()) => {
  const last = pet.lastUpdatedAt ? new Date(pet.lastUpdatedAt) : now;
  const diffMs = Math.max(0, now - last);
  const diffMin = diffMs / 60000;
  if (diffMin <= 0) return { changed: false, pet };

  let hunger = pet.hunger;
  let happiness = pet.happiness;
  let energy = pet.energy;
  let state = pet.state;
  const decay = mergeDecay(pet.type, settings?.decayOverrides);

  if (state === "sleeping") {
    hunger += decay.hungerPerMinSleeping * diffMin;
    happiness -= decay.happinessPerMin * 0.2 * diffMin;
    energy -= decay.energyPerMinSleeping * diffMin;
  } else {
    hunger += decay.hungerPerMin * diffMin;
    happiness -= decay.happinessPerMin * diffMin;
    energy -= decay.energyPerMinAwake * diffMin;
  }

  hunger = clamp(hunger);
  happiness = clamp(happiness);
  energy = clamp(energy);

  if (energy <= 10 && state !== "sleeping") state = "exhausted";
  if (energy > 20 && state === "exhausted") state = "awake";
  if (state === "sleeping" && energy >= 90) state = "awake";

  pet.hunger = hunger;
  pet.happiness = happiness;
  pet.energy = energy;
  pet.state = state;
  pet.lastUpdatedAt = now;

  return { changed: true, pet };
};

export const applyAction = (pet, action, settings) => {
  const effects = settings?.actionEffects || {
    feed: { hunger: -25, happiness: 4, energy: 0 },
    play: { hunger: 6, happiness: 18, energy: -20 },
    sleep: { hunger: 0, happiness: 0, energy: 10 }
  };

  let { hunger, happiness, energy } = pet;
  let state = pet.state;

  if (action !== "sleep") {
    state = "awake";
  }

  if (action === "feed") {
    hunger = clamp(hunger + effects.feed.hunger);
    happiness = clamp(happiness + effects.feed.happiness);
    energy = clamp(energy + effects.feed.energy);
  }

  if (action === "play") {
    hunger = clamp(hunger + effects.play.hunger);
    happiness = clamp(happiness + effects.play.happiness);
    energy = clamp(energy + effects.play.energy);
  }

  if (action === "sleep") {
    state = "sleeping";
    hunger = clamp(hunger + effects.sleep.hunger);
    happiness = clamp(happiness + effects.sleep.happiness);
    energy = clamp(energy + effects.sleep.energy);
  }

  if (energy <= 10 && state !== "sleeping") state = "exhausted";
  if (energy > 20 && state === "exhausted") state = "awake";

  pet.hunger = hunger;
  pet.happiness = happiness;
  pet.energy = energy;
  pet.state = state;
  pet.lastUpdatedAt = new Date();

  return pet;
};
