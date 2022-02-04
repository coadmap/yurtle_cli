import { useCallback, useEffect, useState, VFC } from "react";
import classNames from "classnames";
import styles from "./style.module.scss";
import { Task } from "domain/entity/taskEntity";
import TaskListItem from "components/model/task/TaskListItem";

type TaskListManagerProps = {
  fetchMyTasks: () => Promise<Task[]>;
  updateTask: (id: string, task: Partial<Task>) => Promise<void>;
  deleteTask: (id: string) => Promise<void>;
};

const TaskListManager: VFC<TaskListManagerProps> = ({ fetchMyTasks }) => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const onRemoveTask = useCallback(
    (id: string) => {
      setTasks(tasks.filter((t) => t.id !== id));
    },
    [tasks, setTasks]
  );

  useEffect(() => {
    fetchMyTasks()
      .then((d) => setTasks(d))
      .catch((e) => console.error(e.message));
  }, [fetchMyTasks]);

  return (
    <div className={classNames(styles.list)}>
      {tasks.map((t) => (
        <TaskListItem task={t} onRemove={onRemoveTask} />
      ))}
    </div>
  );
};

export default TaskListManager;
