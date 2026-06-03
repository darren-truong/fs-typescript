import type { CoursePart } from "../App";

const assertNever = (value: never): never => {
  throw new Error(
    `Unhandled discriminated union member: ${JSON.stringify(value)}`,
  );
};

type PartProps = {
  coursePart: CoursePart;
};

const Part = ({ coursePart }: PartProps) => {
  switch (coursePart.kind) {
    case "basic":
      return (
        <>
          <h2>
            {coursePart.name} {coursePart.exerciseCount}
          </h2>
          <i>{coursePart.description}</i>
        </>
      );
    case "group":
      return (
        <>
          <h2>
            {coursePart.name} {coursePart.exerciseCount}
          </h2>
          <p>project exercises {coursePart.groupProjectCount}</p>
        </>
      );
    case "background":
      return (
        <>
          <h2>
            {coursePart.name} {coursePart.exerciseCount}
          </h2>
          <i>{coursePart.description}</i>
          <p>submit to {coursePart.backgroundMaterial}</p>
        </>
      );
    case "special":
      return (
        <>
          <h2>
            {coursePart.name} {coursePart.exerciseCount}
          </h2>
          <i>{coursePart.description}</i>
          <p>required skills: {coursePart.requirements.join(", ")}</p>
        </>
      );
    default:
      assertNever(coursePart);
  }
};

export default Part;
