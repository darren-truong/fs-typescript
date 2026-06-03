import express from "express";
import { calculateBmi } from "./bmiCalculator.ts";
import { calculateExercises } from "./exerciseCalculator.ts";
const app = express();

app.use(express.json());

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

  return res.json({ weight: Number(weight), height: Number(height), bmi });
});

app.post("/exercises", (req, res) => {
  const dailyExercises = req.body.daily_exercises;
  const target = req.body.target;

  if (!dailyExercises || !target) {
    return res.status(400).json({ error: "parameters missing" });
  }

  for (const day of dailyExercises) {
    if (!Number.isFinite(Number(day))) {
      return res.status(400).json({ error: "malformatted parameters" });
    }
  }

  if (!Number.isFinite(Number(target))) {
    return res.status(400).json({ error: "malformatted parameters" });
  }

  return res.json(
    calculateExercises(dailyExercises as number[], Number(target)),
  );
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
