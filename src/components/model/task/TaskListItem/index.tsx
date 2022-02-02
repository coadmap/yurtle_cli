import { Task } from "domain/entity/taskEntity";
import { useCallback, useState, VFC } from "react";
import classNames from "classnames";
import styles from "./style.module.scss";
import { CheckCircleIcon } from "components/ui/Icon";
import DayPicker from "react-day-picker";
import TimeDisplay from "components/ui/TimeDisplay";

type TaskListItemProps = {
  task?: Task | null;
  onRemove?: () => void;
  className?: string;
};

enum DisplayingMode {
  VIEWING,
  EDITING,
}

const TaskListItem: VFC<TaskListItemProps> = ({ task, className }) => {
  const [isTaskNameEdit, setIsTaskNameEdit] = useState(!task);
  const [isDeadlineEdit, setIsDeadlineEdit] = useState(!task);
  const [value, setValue] = useState<string | undefined>(task?.name);
  const onEdit = useCallback(() => {
    // TODO: 実装
  }, []);
  const onDone = useCallback(() => {}, []);

  return (
    <div className={classNames(styles.item, className)}>
      {isTaskNameEdit ? (
        <div
          className={classNames(styles.row, styles.vCenter, styles.xsHGutter)}
          onClick={() => setIsTaskNameEdit(true)}
        >
          <CheckCircleIcon onClick={onDone} />
          <div>{value}</div>
        </div>
      ) : (
        <input
          type="text"
          name="task.name"
          className={styles.input}
          value={value}
          onChange={(e) => setValue(e.currentTarget.value)}
        />
      )}

      <div className={styles.verticalLine} />

      {isDeadlineEdit ? (
        <DayPicker  />
      ) : (
        <TimeDisplay date={task.} />
      )}
    </div>
  );
};

export default TaskListItem;
