import { FC } from "react";
import styles from "./style.module.scss";
import DefaultImage from "assets/images/DefaultImage.png";
import classNames from "classnames";

type ImageProps = {
  src?: string | null;
  width?: number | string;
  height?: number | string;
  className?: string;
  autoWidth?: boolean;
  objectFit?: "cover" | "contain";
};

const Image: FC<ImageProps> = ({ src = "", width, height, className, autoWidth }) => (
  <img
    src={src ?? DefaultImage}
    // width, height属性はアスペクト比を計算するもの
    width={width}
    height={height}
    className={classNames(
      styles.img,
      { [styles.size]: !width },
      { [styles.auto]: autoWidth },
      className
    )}
    style={{ width: width, height: height }}
    alt="画像"
  />
);

export default Image;
