import React, { FC } from "react";
import BaseText, { BaseTextProps } from "./BaseText";
import moment from "moment";

/**
 * Title系
 * **/

export const PageTitle: FC<BaseTextProps> = (props) => {
  return <BaseText size={32} bold htmlNode={"h1"} {...props} />;
};

export const SectionTitle: FC<BaseTextProps> = (props) => {
  return <BaseText size={21} bold htmlNode={"h2"} {...props} />;
};

export const GroupTitle: FC<BaseTextProps> = (props) => {
  return <BaseText size={18} bold htmlNode={"h3"} {...props} />;
};

export const ContentTitle: FC<BaseTextProps> = (props) => {
  return <BaseText size={14} bold block htmlNode={"b"} {...props} />;
};

/**
 * Label系
 * **/
// FIXME: 消す。ボタンのテキストはボタンのコンポーネントのスタイルで決める
export const ButtonLabel: FC<BaseTextProps> = (props) => {
  return <BaseText size={14} bold htmlNode={"span"} {...props} />;
};

export const Label: FC<BaseTextProps> = (props) => {
  return <BaseText size={12} bold htmlNode={"span"} {...props} />;
};

/**
 * Normal
 */
export const BodyText: FC<BaseTextProps> = (props) => {
  return <BaseText size={14} htmlNode={"p"} {...props} />;
};

export const SubInfoText: FC<BaseTextProps> = ({ htmlNode = "p", ...props }) => {
  return <BaseText color="sub" size={10} htmlNode={htmlNode} {...props} />;
};

/**
 * 特殊ケース
 * **/
export const TimeStampText: FC<
  BaseTextProps & { iso8601: string; format?: string; showFromNow?: boolean; children?: never }
> = ({ iso8601, format, showFromNow, ...props }) => {
  return (
    <SubInfoText inline {...props}>
      {showFromNow
        ? moment(iso8601).fromNow()
        : moment(iso8601).format(format ?? "YYYY年MM月DD日 HH時mm分")}
    </SubInfoText>
  );
};

const Text = BaseText;
export default Text;
