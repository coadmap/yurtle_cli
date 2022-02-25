import { ApiClient } from "dataAccess/api";
import { TaskRepository } from "domain/repository";

export const updateTask: TaskRepository["update"] = async (id, params) => {
  const res = await ApiClient.patch<AwaitType<TaskRepository["update"]>>(`/tasks/${id}`, params);
  return res.data;
};
