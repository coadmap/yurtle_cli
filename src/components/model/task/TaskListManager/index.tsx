import { useCallback, useEffect, useState, VFC } from "react";
import classNames from "classnames";
import styles from "./style.module.scss";
import { Task } from "domain/entity/taskEntity";
import TaskListItem from "components/model/task/TaskListItem";
import { listTasks } from "components/model/task/TaskListManager/requests";

const TaskListManager: VFC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const onRemoveTask = useCallback(
    (id: string) => {
      setTasks(tasks.filter((t) => t.id !== id));
    },
    [tasks, setTasks]
  );

  useEffect(() => {
    listTasks()
      .then((d) => setTasks(d.tasks))
      .catch((e) => console.error(e.message));
  }, [listTasks]);

  return (
    <div className={classNames(styles.list)}>
      {tasks.map((t) => (
        <TaskListItem task={t} onRemove={onRemoveTask} />
      ))}
    </div>
  );
};

export default TaskListManager;
