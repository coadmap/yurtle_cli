import {Task} from "domain/entity/taskEntity";
import { useCallback, useState, VFC } from "react";
import classNames from "classnames";
import styles from "./style.module.scss";

type TaskListItemProps = {
  task: Task,
  className?: string;
}

enum DisplayingMode {
  VIEWING,
  EDITING,
}

const TaskListItem: VFC<TaskListItemProps> = ({ task, className}) => {
  const [mode, setMode] = useState<DisplayingMode>(DisplayingMode.VIEWING);
  const [value, setValue] = useState<string>(task.name);
  const onEdit = useCallback(() => {
    // TODO: 実装
  }, []);
  const onRemove = useCallback(() => {
    // TODO: 実装
  }, []);

  if (mode === DisplayingMode.VIEWING) {
    return <div className={classNames(styles.item, className)}>{value}</div>
  } else if (mode === DisplayingMode.EDITING) {
    return (
      <div className={classNames(styles.item, className, styles.edit)}>
        <form onSubmit={onEdit}>
          <input type="text" name="task.name" value={value} onChange={e => setValue(e.currentTarget.value)} />;
        </form>
      </div>
    )
  } else {
    throw new Error("存在せん");
  }
}

export default TaskListItem;