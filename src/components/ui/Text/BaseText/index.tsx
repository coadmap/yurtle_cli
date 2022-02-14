import React, { FC } from "react";
import classNames from "classnames";
import styles from "./styles.module.scss";

export type TextColor = "black" | "white" | "primary" | "danger" | "warning" | "sub" | "gradation";
export type BaseTextProps = {
  // attributes
  /// FIXME: ThemeColorを修正したらそれを使う
  color?: TextColor;
  size?: number;
  editable?: boolean;
  // deco
  bold?: boolean;
  // other
  block?: boolean;
  inline?: boolean;
  htmlNode?: string;
  className?: string;
  onClick?: (_event: React.MouseEvent<HTMLInputElement>) => void;
};

const BaseText: FC<BaseTextProps> = ({
  bold,
  block,
  inline,
  color = "black",
  size = "md",
  editable,
  htmlNode = "div",
  children,
  onClick,
  className,
}) => {
  const Component = htmlNode as React.ElementType;
  return (
    <Component
      style={{ fontSize: size }}
      className={classNames(styles.base, className, { [styles.pointer]: onClick })}
      data-inline={inline}
      data-block={block}
      data-bold={bold}
      data-color={color}
      onClick={onClick}
      contentEditable={editable}
    >
      {children}
    </Component>
  );
};

export default BaseText;
