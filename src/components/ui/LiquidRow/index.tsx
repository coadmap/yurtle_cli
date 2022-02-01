import React, { FC, ReactElement } from "react";
import styles from "./style.module.scss";
import { warning } from "rc-util/es/warning";
import classNames from "classnames";

// leftかrightのどちらかは必須
type LiquidRowProps = {
  left?: number;
  right?: number;
  gutter?: number;
  verticalAlign?: "top" | "middle" | "bottom";
  className?: string;
  children: [ReactElement, ReactElement];
};

// 片方固定長,片方可変長のRow
const LiquidRow: FC<LiquidRowProps> = ({
  left,
  right,
  gutter = 0,
  verticalAlign = "top",
  className,
  children,
}) => {
  warning(!!((left || right) && !(left && right)), "leftかrightのどちらか1つのみ指定してください");

  return (
    <div className={classNames(styles.wrap, className)}>
      <div
        className={classNames(styles.left, {
          [styles.fix]: left,
          [styles[verticalAlign]]: verticalAlign,
        })}
        style={left ? { width: left } : { width: `calc(100% - ${right}px)`, paddingRight: gutter }}
      >
        {children[0]}
      </div>
      <div
        className={classNames(styles.right, {
          [styles.fix]: right,
          [styles[verticalAlign]]: verticalAlign,
        })}
        style={right ? { width: right } : { width: `calc(100% - ${left}px)`, paddingLeft: gutter }}
      >
        {children[1]}
      </div>
    </div>
  );
};

export default LiquidRow;
