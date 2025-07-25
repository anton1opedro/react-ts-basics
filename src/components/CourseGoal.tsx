import type { FC, ReactNode } from "react";

type CourseGoalProps = {
  id: number;
  title: string;
  description: string;
  onDelete: (id: number) => void;
  children?: ReactNode;
};

//OR
// type CourseGoalProps = React.PropsWithChildren<{
//     title: string;
//     description: string;
//     onDelete?: () => void;
// }>;

function CourseGoal(props: CourseGoalProps) {
  return (
    <article>
      <div>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
        {props.children}
      </div>
      <button onClick={() => props.onDelete(props.id)}>Delete</button>
    </article>
  );
}

const SimilarCourseGoal: FC<CourseGoalProps> = ({
  title,
  description,
  children,
}) => {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
        {children}
      </div>
      <button>Delete</button>
    </article>
  );
};

export { CourseGoal, SimilarCourseGoal };
