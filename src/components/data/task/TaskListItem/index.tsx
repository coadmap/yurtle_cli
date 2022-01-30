import {Fragment, useCallback, useRef, useState, VFC} from "react";
import LiquidRow from "components/ui/LiquidRow";
import {CheckCircleIcon} from "components/ui/Icon";
import Task from "data/task/taskEntity";

export type TaskListItemTask = Pick<Task, "id" | "name">;
type TaskListItemProps = {
  task: TaskListItemTask,
  onUpdate?: (newTask: TaskListItemTask) => void;
};

const TaskListItem: VFC<TaskListItemProps> = ({ task }) => {
  const [isEdit, setIsEdit] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const onUpdate = useCallback(() => {

  }, [inputRef]);

  return (
    <div onClick={() => setIsEdit(!isEdit)}>
      <LiquidRow left={16}>
        <Fragment>
          {<CheckCircleIcon />}
        </Fragment>

        <div>
          <input ref={inputRef} type="text" defaultValue={task.name} onKeyPress={async e => {
            e.preventDefault();
            if (e.key === 'Enter') await onUpdate();
          }} />
        </div>
      </LiquidRow>
    </div>
  );
};

export default TaskListItem;