import { ApiClient } from "dataAccess/api";
import { Task } from "domain/entity/taskEntity";

type CompleteTaskInput = {
  id: string;
};
const COMPLETE_TASK_REQUEST = ApiClient.post("/tasks/:id/complete");
export default function useCompleteTask(): ApiRequestResult<CompleteTaskInput, Task>;
