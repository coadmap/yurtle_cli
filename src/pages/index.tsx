import {VFC} from "react";
import TaskListItem from "components/model/task/TaskListItem";

const Home: VFC = () => {
  return (
    <div>
      タスク
      <TaskListItem task={{
        id: "fda",
        name: "fsdfsa",
      }} />
    </div>
  )
}

export default Home;