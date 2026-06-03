import express, { type Response } from "express";
import diagnoseService from "../services/diagnoseService.ts";
import type { DiagnosisEntry } from "../types.ts";

const router = express.Router();

router.get("/", (_req, res: Response<DiagnosisEntry[]>) => {
  res.send(diagnoseService.getEntries());
});

export default router;
