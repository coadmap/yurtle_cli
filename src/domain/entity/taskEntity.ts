import { Moment } from "moment";

export interface Task {
  id: string;
  name: string;
  completed: boolean;
  deadline: Moment | null;
}
