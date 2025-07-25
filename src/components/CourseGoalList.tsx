import type { CourseGoalType } from "../App.tsx";
import { CourseGoal } from "./CourseGoal.tsx";
import InfoBox from "./InfoBox.tsx";
import type { ReactNode } from "react";

type CourseGoalListProps = {
  courseGoals: CourseGoalType[];
  onDelete: (id: number) => void;
};

function CourseGoalList(props: CourseGoalListProps) {
  if (props.courseGoals.length === 0) {
    return (
      <InfoBox mode={"hint"}>
        You have no goals yet. Add a new goal to get started!
      </InfoBox>
    );
  }

  let warningBox: ReactNode;

  if (props.courseGoals.length >= 4) {
    warningBox = (
      <InfoBox mode={"warning"} severity={"medium"}>
        You have a lot of goals! Consider focusing on fewer goals at a time.
      </InfoBox>
    );
  }
  return (
    <>
      {warningBox}
      <ul>
        {props.courseGoals.map((goal) => (
          <li key={goal.id}>
            <CourseGoal
              id={goal.id}
              title={goal.title}
              description={goal.description}
              onDelete={props.onDelete}
            />
          </li>
        ))}
      </ul>
    </>
  );
  // return (
  //   MY SOLUTION
  //   <>
  //     {props.courseGoals.length >= 4 && (
  //       <InfoBox mode={"warning"}>
  //         You have a lot of goals! Consider focusing on fewer goals at a time.
  //       </InfoBox>
  //     )}
  //     <ul>
  //       {props.courseGoals.map((goal) => (
  //         <li key={goal.id}>
  //           <CourseGoal
  //             id={goal.id}
  //             title={goal.title}
  //             description={goal.description}
  //             onDelete={props.onDelete}
  //           />
  //         </li>
  //       ))}
  //     </ul>
  //   </>
  // );
}

export default CourseGoalList;
