import type z from "zod";
import type NewPatientEntrySchema from "./utils.ts";

export type DiagnosisEntry = {
  code: string;
  name: string;
  latin?: string;
};

export const Gender = {
  Male: "male",
  Female: "female",
  Other: "other",
} as const;

export type Gender = (typeof Gender)[keyof typeof Gender];

export type NewPatientEntry = z.infer<typeof NewPatientEntrySchema>;
export type NonSensitivePatientEntry = Omit<NewPatientEntry, "ssn">;
export interface PatientEntry extends NewPatientEntry {
  id: string;
}
