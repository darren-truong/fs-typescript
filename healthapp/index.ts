import express from "express";
import { calculateBmi } from "./bmiCalculator.ts";
const app = express();

app.get("/hello", (_req, res) => {
  res.send("Hello Full Stack!");
});

app.get("/bmi", (req, res) => {
  const weight = req.query.weight;
  const height = req.query.height;

  if (!Number.isFinite(Number(weight)) || !Number.isFinite(Number(height))) {
    return res.status(400).json({ error: "malformatted parameters" });
  }

  const bmi = calculateBmi(Number(height), Number(weight));

  return res.json({ weight, height, bmi });
});

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
