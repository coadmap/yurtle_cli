import { Task } from "domain/entity/taskEntity";
import { useCallback, useEffect, useRef, useState, VFC } from "react";
import classNames from "classnames";
import styles from "./style.module.scss";
import { CheckCircleIcon, TimeIcon } from "components/ui/Icon";
import DayPicker from "react-day-picker";
import DeadlineDisplay from "components/ui/DeadlineDisplay";
import Popover from "react-popover";
import moment from "moment";
import LiquidRow from "components/ui/LiquidRow";
import { deleteTask } from "components/model/task/TaskListItem/requests/deleteTask";
import { completeTask } from "components/model/task/TaskListItem/requests/completeTask";
import { updateTask } from "components/model/task/TaskListItem/requests/updateTask";
import { createTask } from "components/model/task/TaskListItem/requests";

type TaskListItemProps = {
  task?: Task | null;
  isFirst?: boolean;
  isLast?: boolean;
  onAdd?: (task: Task) => void;
  onRemove?: (id: string) => void;
  className?: string;
};

const TaskListItem: VFC<TaskListItemProps> = ({ task, onAdd, onRemove, className }) => {
  const isFirstRender = useRef(true);
  const [isTaskNameEdit, setIsTaskNameEdit] = useState(!task);
  const [value, setValue] = useState(task?.name);
  const [deadline, setDeadline] = useState(task?.deadline ? moment(task.deadline) : undefined);
  const [openDatePick, setOpenDatePick] = useState(false);
  const onCreate = useCallback(async () => {
    if (task || !value) return;

    setIsTaskNameEdit(false);
    const newTask = await createTask({ name: value });
    onAdd?.(newTask);
  }, [task?.id, onAdd, setIsTaskNameEdit]);
  const onUpdateName = useCallback(async () => {
    if (!task || !value) return;

    setIsTaskNameEdit(false);
    await updateTask(task.id, { name: value });
  }, [setIsTaskNameEdit]);
  const onDeleteTask = useCallback(async () => {
    if (!task) return;

    await deleteTask(task.id);
    onRemove?.(task.id);
  }, [onRemove, deleteTask]);
  const onDone = useCallback(async () => {
    if (!task?.id) return;

    await completeTask(task.id);
    console.log("タスク完了");
    onRemove?.(task.id);
  }, []);

  useEffect(() => {
    if (isFirstRender.current) return;

    if (!value) onDeleteTask();
  }, [value, onDeleteTask]);

  return (
    <div className={classNames(styles.item, className)}>
      <LiquidRow right={120} gutter={16}>
        <div className={classNames(styles.rightBorder, styles.smRightPadding)}>
          {isTaskNameEdit ? (
            <input
              type="text"
              name="task.name"
              className={styles.input}
              value={value}
              placeholder="タスクを入力"
              onChange={(e) => setValue(e.currentTarget.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  task ? onUpdateName() : onCreate();
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
        </div>

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
            <DeadlineDisplay
              date={deadline}
              format="YYYY/MM/DD"
              onClick={() => setOpenDatePick(true)}
            />
          ) : (
            <div className={classNames(styles.row, styles.xsHGutter)}>
              <TimeIcon />
              <p>期日</p>
            </div>
          )}
        </Popover>
      </LiquidRow>
    </div>
  );
};

export default TaskListItem;
