import { Moment } from "moment";
import { VFC } from "react";

export const TIME_SPECIFY_OPTIONS = ["today", "tomorrow", "yesterday", "thisWeekday"] as const;
export type TimeSpecifyOption = typeof TIME_SPECIFY_OPTIONS[number];
type TimeDisplayProps = {
  date: Moment;
  options?: TimeSpecifyOption[];
  onClick?: () => void;
};

const TimeDisplay: VFC<TimeDisplayProps> = ({ date, options, onClick }) => {
  return <span onClick={onClick}>{date.format("YYYY/MM/DD HH:mm")}</span>;
};
export default TimeDisplay;
