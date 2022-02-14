import { ApiClient } from "dataAccess/api";
import { TaskRepository } from "domain/repository";

export const createTask: TaskRepository["create"] = async (params) => {
  const res = await ApiClient.post<AwaitType<TaskRepository["create"]>>(`/tasks`, params);
  return res.data;
};
