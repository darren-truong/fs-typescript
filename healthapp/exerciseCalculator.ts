if (process.argv[1] === import.meta.filename) {
  const { dailyExerciseHours, target } = parseArgumentsForExerciseCalculator(
    process.argv,
  );
  console.log(calculateExercises(dailyExerciseHours, target));
}

function parseArgumentsForExerciseCalculator(args: string[]) {
  for (const arg of args.slice(2)) {
    if (!Number.isFinite(Number(arg))) {
      throw new Error("One of the arguments passed is not a number");
    }
  }
  return {
    dailyExerciseHours: args.slice(3).map((day) => Number(day)),
    target: Number(args[2]),
  };
}

interface Result {
  periodLength: number;
  trainingDays: number;
  success: boolean;
  rating: number;
  ratingDescription: string;
  target: number;
  average: number;
}

export function calculateExercises(
  dailyExerciseHours: number[],
  target: number,
): Result {
  const periodLength = dailyExerciseHours.length;

  const trainingDays = dailyExerciseHours.reduce(
    (prev, curr) => (curr > 0 ? prev + 1 : prev),
    0,
  );

  const average =
    dailyExerciseHours.reduce((prev, curr) => curr + prev, 0) /
    dailyExerciseHours.length;

  const success = average >= target;

  const rating = average / target > 1 ? 3 : average / target === 1 ? 2 : 1;

  const ratingDescription =
    rating === 3
      ? "exceeded target"
      : rating === 2
        ? "satisfied target"
        : "did not hit target";

  return {
    periodLength,
    trainingDays,
    success,
    rating,
    ratingDescription,
    target,
    average,
  };
}
