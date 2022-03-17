import { Task } from "domain/entity/taskEntity";
import { forwardRef, useCallback, useEffect, useRef, useState } from "react";
import classNames from "classnames";
import styles from "./style.module.scss";
import { CheckCircleIcon, TimeIcon } from "components/ui/Icon";
import DayPicker from "react-day-picker";
import DeadlineDisplay from "components/ui/DeadlineDisplay";
import Popover from "react-popover";
import moment, { Moment } from "moment";
import LiquidRow from "components/ui/LiquidRow";
import { deleteTask } from "components/model/task/TaskListItem/requests/deleteTask";
import { completeTask } from "components/model/task/TaskListItem/requests/completeTask";
import { updateTask } from "components/model/task/TaskListItem/requests/updateTask";
import { createTask } from "components/model/task/TaskListItem/requests";
import { BodyText } from "components/ui/Text";

type TaskListItemProps = {
  task?: Task | null;
  editing?: boolean;
  isFirst?: boolean;
  isLast?: boolean;
  onSelect?: (id: string) => void;
  onAdd?: (task: Task) => void;
  onRemove?: (id: string) => void;
  className?: string;
};

const TaskListItem = forwardRef<HTMLInputElement, TaskListItemProps>(
  ({ task, editing, onSelect, onAdd, onRemove, className }, ref) => {
    const inputRef = ref ?? useRef<HTMLInputElement>(null);
    const isFirstRender = useRef(true);
    const [isTaskNameEdit, setIsTaskNameEdit] = useState(!task);
    const [value, setValue] = useState(task?.name);
    const [deadline, setDeadline] = useState(task?.deadline ? moment(task.deadline) : undefined);
    const [openDatePick, setOpenDatePick] = useState(false);
    const onCreate = useCallback(async () => {
      if (task?.id || !value) return;

      setIsTaskNameEdit(false);
      const newTask = await createTask({ name: value, deadline: deadline?.toISOString() });
      onAdd?.(newTask);
    }, [task?.id, value, onAdd, setIsTaskNameEdit]);
    const onUpdateName = useCallback(async () => {
      if (!task || !value) return;

      setIsTaskNameEdit(false);
      await updateTask(task.id, { name: value });
    }, [task?.id, value, setIsTaskNameEdit]);
    const onUpdateDeadline = useCallback(
      async (date: Moment) => {
        setOpenDatePick(false);
        setDeadline(date);
        if (task) {
          await updateTask(task.id, { deadline: date.toISOString() });
        }
      },
      [task?.id]
    );
    const onDeleteTask = useCallback(async () => {
      if (!task) return;

      await deleteTask(task.id);
      onRemove?.(task.id);
    }, [task?.id, onRemove]);
    const onDone = useCallback(async () => {
      if (!task?.id) return;

      await completeTask(task.id);
      onRemove?.(task.id);
      // TODO: ページ内通知を出したい
    }, [task?.id, onRemove]);

    useEffect(() => {
      if (isFirstRender.current) {
        isFirstRender.current = false;
        return;
      }

      if (!value) onDeleteTask();
    }, [value, onDeleteTask]);
    useEffect(() => {
      if (editing) {
        setIsTaskNameEdit(true);
      }
    }, [editing]);

    return (
      <div className={classNames(styles.item, className)}>
        <LiquidRow right={120} gutter={16}>
          <div className={classNames(styles.rightBorder, styles.smRightPadding)}>
            {isTaskNameEdit ? (
              <input
                ref={inputRef}
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
                autoFocus={editing}
                onBlur={onUpdateName}
              />
            ) : (
              <div className={classNames(styles.row, styles.vCenter, styles.xsHGutter)}>
                <CheckCircleIcon onClick={onDone} />
                <div
                  className={styles.hFillContainer}
                  onClick={() => {
                    setIsTaskNameEdit(true);
                    task && onSelect?.(task.id);
                  }}
                >
                  {value}
                </div>
              </div>
            )}
          </div>

          <div>
            <Popover
              isOpen={openDatePick}
              onOuterAction={() => setOpenDatePick(false)}
              body={
                <div className={styles.popover}>
                  <DayPicker onDayClick={(day) => onUpdateDeadline(moment(day))} />
                </div>
              }
            >
              <div className={styles.clickable} onClick={() => setOpenDatePick(true)}>
                {deadline ? (
                  <DeadlineDisplay date={deadline} format="YYYY/MM/DD" />
                ) : (
                  <div className={classNames(styles.row, styles.xsHGutter)}>
                    <TimeIcon color="sub" />
                    <BodyText color="sub">期日</BodyText>
                  </div>
                )}
              </div>
            </Popover>
          </div>
        </LiquidRow>
      </div>
    );
  }
);

export default TaskListItem;
