interface Result {
  periodLength: number;
  trainingDays: number;
  success: boolean;
  rating: number;
  ratingDescription: string;
  target: number;
  average: number;
}

function calculateExercises(
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

console.log(calculateExercises([3, 0, 2, 4.5, 0, 3, 1], 2));
