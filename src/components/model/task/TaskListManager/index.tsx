import { useCallback, useEffect, useRef, useState, VFC } from "react";
import classNames from "classnames";
import styles from "./style.module.scss";
import { Task } from "domain/entity/taskEntity";
import TaskListItem from "components/model/task/TaskListItem";
import { listTasks } from "components/model/task/TaskListManager/requests";

const TaskListManager: VFC = () => {
  const addInputRef = useRef<HTMLInputElement>(null);
  const [selectedTaskId, setSelectedTaskId] = useState<string>();
  const [tasks, setTasks] = useState<Task[]>([]);
  const onAddTask = useCallback(
    (newTask: Task) => {
      setTasks([...tasks, newTask]);
      addInputRef.current?.focus();
    },
    [tasks, setTasks, addInputRef]
  );
  const onRemoveTask = useCallback(
    (id: string) => {
      setTasks(
        tasks.filter((t, idx) => {
          if (t.id === id && idx - 1 >= 0) {
            setSelectedTaskId(tasks[idx - 1].id);
          }
          return t.id !== id;
        })
      );
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
      {tasks
        .filter((t) => !t.completed)
        .map((t, idx) => (
          <TaskListItem
            key={t.id}
            task={t}
            editing={t.id === selectedTaskId}
            onSelect={setSelectedTaskId}
            onAdd={onAddTask}
            onRemove={onRemoveTask}
            isFirst={idx === 0}
            isLast={idx === tasks.length}
          />
        ))}
      <TaskListItem ref={addInputRef} key={tasks.length} onAdd={onAddTask} />
    </div>
  );
};

export default TaskListManager;
