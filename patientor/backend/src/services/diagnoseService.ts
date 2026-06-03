import type { DiagnosisEntry } from "../types.ts";
import diagnosisData from "../../data/diagnoses.ts";

const getEntries = (): DiagnosisEntry[] => {
  return diagnosisData;
};

export default {
  getEntries,
};
