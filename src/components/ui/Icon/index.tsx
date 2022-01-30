import React, { FC } from "react";
import Icon from "./BaseIcon";

import { ReactComponent as CheckCircle } from "assets/images/icon/CheckCircle.svg";

export type BaseIconProps = {
  innerRef?: ((ref: HTMLElement | null) => void) | null;
  onClick?: (event: React.MouseEvent<HTMLInputElement>) => void;
  className?: string;
};

export const CheckCircleIcon: FC<BaseIconProps> = (props) => (
  <Icon component={CheckCircle} className={props.className} onClick={props.onClick} />
);
