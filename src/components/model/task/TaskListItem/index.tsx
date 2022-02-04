import { Task } from "domain/entity/taskEntity";
import { useCallback, useState, VFC } from "react";
import classNames from "classnames";
import styles from "./style.module.scss";
import { CheckCircleIcon, TimeIcon } from "components/ui/Icon";
import DayPicker from "react-day-picker";
import TimeDisplay from "components/ui/TimeDisplay";
import Popover from "react-popover";
import moment from "moment";

type TaskListItemProps = {
  task?: Task | null;
  onRemove?: () => void;
  className?: string;
};

const TaskListItem: VFC<TaskListItemProps> = ({ task, onRemove, className }) => {
  const [isTaskNameEdit, setIsTaskNameEdit] = useState(!task);
  const [value, setValue] = useState(task?.name);
  const [deadline, setDeadline] = useState(task?.deadline);
  const [openDatePick, setOpenDatePick] = useState(false);
  const onUpdateName = useCallback(() => {
    // TODO: 実装
    console.log(value);
    setIsTaskNameEdit(false);
  }, [setIsTaskNameEdit]);
  const onDone = useCallback(() => {
    console.log("タスク完了");
    onRemove?.();
  }, [onRemove]);

  return (
    <div className={classNames(styles.item, className)}>
      {isTaskNameEdit ? (
        <input
          type="text"
          name="task.name"
          className={styles.input}
          value={value}
          onChange={(e) => setValue(e.currentTarget.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              onUpdateName();
            }
          }}
          onBlur={onUpdateName}
        />
      ) : (
        <div className={classNames(styles.row, styles.vCenter, styles.xsHGutter)}>
          <CheckCircleIcon onClick={onDone} />
          <div className={styles.hFillContainer} onClick={() => setIsTaskNameEdit(true)}>
            {value}
          </div>
        </div>
      )}

      <div className={styles.verticalLine} />

      <Popover
        isOpen={openDatePick}
        onOuterAction={() => setOpenDatePick(false)}
        body={
          <div className={styles.popover}>
            <DayPicker onDayClick={(day) => setDeadline(moment(day))} />
          </div>
        }
      >
        {deadline ? (
          <TimeDisplay date={deadline} onClick={() => setOpenDatePick(true)} />
        ) : (
          <div className={classNames(styles.row, styles.xsHGutter)}>
            <TimeIcon />
            <p>期日</p>
          </div>
        )}
      </Popover>
    </div>
  );
};

export default TaskListItem;
