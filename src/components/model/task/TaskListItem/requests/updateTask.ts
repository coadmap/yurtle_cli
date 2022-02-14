import { ApiClient } from "dataAccess/api";
import { TaskRepository } from "domain/repository";

export const updateTask: TaskRepository["update"] = async (id, name) => {
  const res = await ApiClient.patch<AwaitType<TaskRepository["update"]>>(`/tasks/${id}`, { name });
  return res.data;
};
