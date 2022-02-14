import { ApiClient } from "dataAccess/api";
import { TaskRepository } from "domain/repository";

export const listTasks: TaskRepository["list"] = async () => {
  const res = await ApiClient.get<AwaitType<TaskRepository["list"]>>(`/tasks`);
  return res.data;
};
