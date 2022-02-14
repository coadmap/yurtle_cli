import { useCallback, useEffect, useState, VFC } from "react";
import classNames from "classnames";
import styles from "./style.module.scss";
import { Task } from "domain/entity/taskEntity";
import TaskListItem from "components/model/task/TaskListItem";
import { listTasks } from "components/model/task/TaskListManager/requests";

const TaskListManager: VFC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const onCreateTask = useCallback(
    (newTask: Task) => {
      setTasks([...tasks, newTask]);
    },
    [tasks, setTasks]
  );
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
      {tasks.map((t, idx) => (
        <TaskListItem
          key={t.id}
          task={t}
          onRemove={onRemoveTask}
          isFirst={idx === 0}
          isLast={idx === tasks.length}
        />
      ))}
      <TaskListItem key={tasks.length} />
    </div>
  );
};

export default TaskListManager;
