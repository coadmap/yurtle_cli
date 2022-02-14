import { Task } from "../entity/taskEntity";

export interface TaskRepository {
  list(): Promise<{ tasks: Task[] }>;
  create(name: Task["name"]): Promise<Task>;
  update(id: Task["id"], name: string): Promise<Task>;
  complete(id: Task["id"]): Promise<Task>;
  delete(id: Task["id"]): Promise<Task>;
}
