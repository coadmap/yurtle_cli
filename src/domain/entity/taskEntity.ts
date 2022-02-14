import { Moment } from "moment";

export interface Task {
  id: string;
  name: string;
  deadline: Moment | null;
}
