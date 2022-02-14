import { ApiClient } from "dataAccess/api";
import { TaskRepository } from "domain/repository";

export const deleteTask: TaskRepository["delete"] = async (id) => {
  const res = await ApiClient.delete<AwaitType<TaskRepository["delete"]>>(`/tasks/${id}`);
  return res.data;
};
