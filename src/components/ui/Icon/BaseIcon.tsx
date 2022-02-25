import React, { FC } from "react";
import Icon from "@ant-design/icons";
import { IconComponentProps } from "@ant-design/icons/lib/components/Icon";
import classNames from "classnames";
import styles from "./style.module.scss";

type IconProps = IconComponentProps & {
  color?: Color;
};
const BaseIcon: FC<IconProps> = ({ color, ...props }) => {
  return (
    <Icon
      component={props.component}
      className={classNames(styles.icon, props.className)}
      data-color={color}
      onClick={props.onClick}
    />
  );
};

export default BaseIcon;
