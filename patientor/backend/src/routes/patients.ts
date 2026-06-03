import express, { type Response } from "express";
import patientService from "../services/patientService.ts";
import type { NewPatientEntry, NonSensitivePatientEntry } from "../types.ts";

const router = express.Router();

router.get("/", (_req, res: Response<NonSensitivePatientEntry[]>) => {
  return res.json(patientService.getNonSensitiveEntries());
});

router.post("/", (req, res) => {
  const addedEntry = patientService.addPatient(req.body as NewPatientEntry);
  res.json(addedEntry);
});

export default router;
