import moment, { Moment } from "moment";
import { useMemo, VFC } from "react";
import { BodyText } from "components/ui/Text";

type DeadlineDisplayProps = {
  date: Moment;
  format?: string;
  onClick?: () => void;
};

const DeadlineDisplay: VFC<DeadlineDisplayProps> = ({
  date,
  format = "YYYY/MM/DD HH:mm",
  onClick,
}) => {
  const info = useMemo(() => {
    const now = moment();
    if (date.isSame(now, "day")) {
      return <BodyText color="warning">今日</BodyText>;
    } else if (date.isSame(now.add(1, "day"), "day")) {
      return <BodyText color="primary">明日</BodyText>;
    } else if (date.isBefore(now)) {
      return <BodyText color="danger">{date.format(format)}</BodyText>;
    } else {
      return <BodyText>{date.format(format)}</BodyText>;
    }
  }, [date]);

  return <span onClick={onClick}>{info}</span>;
};

export default DeadlineDisplay;
