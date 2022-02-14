import { Task } from "../entity/taskEntity";

export interface TaskRepository {
  list(): Promise<{ tasks: Task[] }>;
  create(params: Omit<InputType<Task>, "id">): Promise<Task>;
  update(id: Task["id"], params: Partial<Omit<Task, "id">>): Promise<Task>;
  complete(id: Task["id"]): Promise<Task>;
  delete(id: Task["id"]): Promise<Task>;
}
