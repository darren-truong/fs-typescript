import z from "zod";
import { Gender } from "./types.ts";

const NewPatientEntrySchema = z.object({
  name: z.string(),
  dateOfBirth: z.string(),
  ssn: z.string(),
  gender: z.enum(Gender),
  occupation: z.string(),
});

export default NewPatientEntrySchema;
