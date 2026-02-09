export const PET_TYPES = {
  sprout: {
    label: "Sprout",
    base: { hunger: 25, happiness: 75, energy: 80 },
    decay: {
      hungerPerMin: 1.1,
      happinessPerMin: 0.7,
      energyPerMinAwake: 0.9,
      energyPerMinSleeping: -2.2,
      hungerPerMinSleeping: 0.4
    }
  },
  comet: {
    label: "Comet",
    base: { hunger: 35, happiness: 65, energy: 90 },
    decay: {
      hungerPerMin: 1.4,
      happinessPerMin: 0.9,
      energyPerMinAwake: 1.2,
      energyPerMinSleeping: -2.0,
      hungerPerMinSleeping: 0.6
    }
  },
  ember: {
    label: "Ember",
    base: { hunger: 30, happiness: 70, energy: 75 },
    decay: {
      hungerPerMin: 1.0,
      happinessPerMin: 0.8,
      energyPerMinAwake: 1.1,
      energyPerMinSleeping: -2.5,
      hungerPerMinSleeping: 0.5
    }
  }
};

export const getPetType = (typeKey) => PET_TYPES[typeKey] || PET_TYPES.sprout;

export const petTypeList = Object.entries(PET_TYPES).map(([key, value]) => ({
  key,
  label: value.label
}));
