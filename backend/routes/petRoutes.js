import express from "express";
import { getPet, updatePet, actOnPet, listPetTypes } from "../controllers/petController.js";

const router = express.Router();

router.get("/types", listPetTypes);
router.get("/", getPet);
router.patch("/", updatePet);
router.post("/feed", actOnPet("feed"));
router.post("/play", actOnPet("play"));
router.post("/sleep", actOnPet("sleep"));

export default router;
