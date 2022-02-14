import React, { FC } from "react";
import Icon from "@ant-design/icons";
import { IconComponentProps } from "@ant-design/icons/lib/components/Icon";
import classNames from "classnames";
import styles from "./style.module.scss";

const BaseIcon: FC<IconComponentProps> = (props) => {
  return (
    <Icon
      component={props.component}
      className={classNames(styles.icon, props.className)}
      onClick={props.onClick}
    />
  );
};

export default BaseIcon;
