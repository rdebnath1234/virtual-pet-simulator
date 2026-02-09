import mongoose from "mongoose";

const settingsSchema = new mongoose.Schema(
  {
    actionEffects: {
      feed: {
        hunger: { type: Number, default: -25 },
        happiness: { type: Number, default: 4 },
        energy: { type: Number, default: 0 }
      },
      play: {
        hunger: { type: Number, default: 6 },
        happiness: { type: Number, default: 18 },
        energy: { type: Number, default: -20 }
      },
      sleep: {
        hunger: { type: Number, default: 0 },
        happiness: { type: Number, default: 0 },
        energy: { type: Number, default: 10 }
      }
    },
    decayOverrides: {
      type: Object,
      default: {}
    }
  },
  { timestamps: true }
);

const Settings = mongoose.model("Settings", settingsSchema);

export default Settings;
