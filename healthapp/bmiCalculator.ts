if (process.argv[1] === import.meta.filename) {
  const { value1, value2 } = parseArgumentsForBmiCalculator(process.argv);
  console.log(calculateBmi(value1, value2));
}

function parseArgumentsForBmiCalculator(args: string[]) {
  if (args.length < 4) throw new Error("Not enough arguments");
  if (args.length > 4) throw new Error("Too many arguments");

  if (!isNaN(Number(args[2])) && !isNaN(Number(args[3]))) {
    return { value1: Number(args[2]), value2: Number(args[3]) };
  }

  throw new Error("Provided values were not numbers!");
}

export function calculateBmi(height: number, weight: number): string {
  const bmi = weight / ((height / 100) * (height / 100));
  let message;

  if (bmi >= 40.0) {
    message = "Obese (Class III)";
  } else if (bmi >= 35.0) {
    message = "Obese (Class II)";
  } else if (bmi >= 30.0) {
    message = "Obese (Class I)";
  } else if (bmi >= 25.0) {
    message = "Overweight (Pre-obese)";
  } else if (bmi >= 18.5) {
    message = "Normal range";
  } else if (bmi >= 17.0) {
    message = "Underweight (Mild thinness)";
  } else if (bmi >= 16.0) {
    message = "Underweight (Moderate thinness)";
  } else {
    message = "Underweight (Severe thinness)";
  }

  return message;
}
