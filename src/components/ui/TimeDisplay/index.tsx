import { Moment } from "moment";
import { VFC } from "react";

export const TIME_SPECIFY_OPTIONS = ["today", "tomorrow", "yesterday", "thisWeekday"] as const;
export type TimeSpecifyOption = typeof TIME_SPECIFY_OPTIONS[number];
type TimeDisplayProps = {
  date: Moment;
  options?: TimeSpecifyOption[];
};

const TimeDisplay: VFC<TimeDisplayProps> = ({ date, options }) => {
  return <span>{date.format("YYYY/MM/DD HH:mm")}</span>;
};
export default TimeDisplay;
