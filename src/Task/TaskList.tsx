import {TaskChangeAndDelete} from "./TaskChangeAndDelete";

interface Props {
  tasks: { id: number; text: string; done: boolean }[];
  onChangeTask: Function;
  onDeleteTask: Function;
}

export const TaskList: React.FC<Props> = ({
  tasks,
  onChangeTask,
  onDeleteTask,
}) => {
  return (
    <ul className="allApp__taskList">
      {tasks.map((task) => (
        <li className="li" key={task.id}>
          <TaskChangeAndDelete
            task={task}
            onChange={onChangeTask}
            onDelete={onDeleteTask}
          />
        </li>
      ))}
    </ul>
  );
};
