import React, { FC } from "react";
import Icon from "./BaseIcon";

import { ReactComponent as CheckCircle } from "assets/images/icon/CheckCircle.svg";
import { ReactComponent as Time } from "assets/images/icon/Time.svg";

export type BaseIconProps = {
  onClick?: (event: React.MouseEvent<HTMLInputElement>) => void;
  className?: string;
};

export const CheckCircleIcon: FC<BaseIconProps> = (props) => (
  <Icon component={CheckCircle} {...props} />
);

export const TimeIcon: FC<BaseIconProps> = (props) => <Icon component={Time} {...props} />;
