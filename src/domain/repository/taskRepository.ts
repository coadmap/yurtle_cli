import { Task } from "../entity/taskEntity";

export interface TaskRepository {
  list(): Promise<Task[]>;
  create(name: Task["name"]): Promise<Task>;
  update(id: Task["id"], name: string): Promise<Task>;
  delete(id: Task["id"]): Promise<Task>;
}
