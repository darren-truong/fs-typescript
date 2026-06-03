import type { NonSensitivePatientEntry } from "../types.ts";
import patientData from "../../data/patients.ts";

const getNonSensitiveEntries = (): NonSensitivePatientEntry[] => {
  return patientData.map((patient) => ({
    id: patient.id,
    name: patient.name,
    dateOfBirth: patient.dateOfBirth,
    gender: patient.gender,
    occupation: patient.occupation,
  }));
};

export default {
  getNonSensitiveEntries,
};
