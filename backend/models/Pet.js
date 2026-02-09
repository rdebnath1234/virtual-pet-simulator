import mongoose from "mongoose";

const petSchema = new mongoose.Schema(
  {
    name: { type: String, default: "Mochi" },
    type: { type: String, default: "sprout" },
    hunger: { type: Number, min: 0, max: 100, default: 30 },
    happiness: { type: Number, min: 0, max: 100, default: 70 },
    energy: { type: Number, min: 0, max: 100, default: 80 },
    state: {
      type: String,
      enum: ["awake", "sleeping", "exhausted"],
      default: "awake"
    },
    lastUpdatedAt: { type: Date, default: Date.now }
  },
  { timestamps: true }
);

const Pet = mongoose.model("Pet", petSchema);

export default Pet;
