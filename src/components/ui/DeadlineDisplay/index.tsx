import moment, { Moment } from "moment";
import { useMemo, VFC } from "react";
import { BodyText } from "components/ui/Text";

type DeadlineDisplayProps = {
  date: Moment;
  format?: string;
  onClick?: () => void;
  className?: string;
};

const DeadlineDisplay: VFC<DeadlineDisplayProps> = ({
  date,
  format = "YYYY/MM/DD HH:mm",
  onClick,
  className,
}) => {
  const info = useMemo(() => {
    const now = moment(new Date());
    if (date.isSame(now, "day")) {
      return (
        <BodyText color="warning" className={className}>
          今日
        </BodyText>
      );
    } else if (date.isSame(now.add(1, "day"), "day")) {
      return (
        <BodyText color="primary" className={className}>
          明日
        </BodyText>
      );
    } else if (date.isBefore(now)) {
      return (
        <BodyText color="danger" className={className}>
          {date.format(format)}
        </BodyText>
      );
    } else {
      return <BodyText className={className}>{date.format(format)}</BodyText>;
    }
  }, [date]);

  return (
    <span onClick={onClick} className={className}>
      {info}
    </span>
  );
};

export default DeadlineDisplay;
