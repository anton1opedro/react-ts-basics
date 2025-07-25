import type { CourseGoalType } from "../App.tsx";
import { CourseGoal } from "./CourseGoal.tsx";

type CourseGoalListProps = {
  courseGoals: CourseGoalType[];
  onDelete: (id: number) => void;
};

function CourseGoalList(props: CourseGoalListProps) {
  return (
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
  );
}

export default CourseGoalList;
