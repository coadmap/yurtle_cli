import { ApiClient } from "dataAccess/api";
import { TaskRepository } from "domain/repository";

export const completeTask: TaskRepository["complete"] = async (id) => {
  const res = await ApiClient.post<AwaitType<TaskRepository["complete"]>>(
    `/tasks/${id}/complete`,
    {}
  );
  return res.data;
};
