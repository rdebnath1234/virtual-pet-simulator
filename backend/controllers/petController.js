import Pet from "../models/Pet.js";
import { applyTimeDecay, applyAction } from "../services/petService.js";
import { petTypeList, getPetType } from "../services/petTypes.js";
import { getSettings } from "../services/settingsService.js";

const clamp = (value, min = 0, max = 100) => Math.max(min, Math.min(max, value));

const getOrCreatePet = async () => {
  let pet = await Pet.findOne();
  if (!pet) {
    const petConfig = getPetType("sprout");
    pet = await Pet.create({
      name: "Mochi",
      type: "sprout",
      hunger: petConfig.base.hunger,
      happiness: petConfig.base.happiness,
      energy: petConfig.base.energy
    });
  }
  return pet;
};

export const listPetTypes = (req, res) => {
  res.json({ types: petTypeList });
};

export const getPet = async (req, res, next) => {
  try {
    const pet = await getOrCreatePet();
    const settings = await getSettings();
    const { changed } = applyTimeDecay(pet, settings);
    if (changed) await pet.save();
    res.json({ pet });
  } catch (error) {
    next(error);
  }
};

export const updatePet = async (req, res, next) => {
  try {
    const pet = await getOrCreatePet();
    const { hunger, happiness, energy, state, name, type } = req.body || {};

    if (typeof hunger === "number") pet.hunger = clamp(hunger);
    if (typeof happiness === "number") pet.happiness = clamp(happiness);
    if (typeof energy === "number") pet.energy = clamp(energy);
    if (typeof state === "string") pet.state = state;
    if (typeof name === "string") pet.name = name;
    if (typeof type === "string") pet.type = type;

    pet.lastUpdatedAt = new Date();
    await pet.save();
    res.json({ pet });
  } catch (error) {
    next(error);
  }
};

export const actOnPet = (action) => async (req, res, next) => {
  try {
    const pet = await getOrCreatePet();
    const settings = await getSettings();
    applyTimeDecay(pet, settings);
    applyAction(pet, action, settings);
    await pet.save();
    res.json({ pet });
  } catch (error) {
    next(error);
  }
};
