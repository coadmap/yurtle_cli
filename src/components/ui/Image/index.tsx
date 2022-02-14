import { FC } from "react";
import styles from "./style.module.scss";
import DefaultImage from "assets/images/DefaultImage.png";
import classNames from "classnames";

type ImageProps = {
  src?: string | null;
  width?: number | string;
  height?: number | string;
  className?: string;
};

const Image: FC<ImageProps> = ({ src, width, height, className }) => (
  <img
    src={src ?? DefaultImage}
    width={width}
    height={height}
    className={classNames(styles.img, className)}
    style={{ width: width, height: height }}
    alt="画像"
  />
);

export default Image;
