import { VFC } from "react";
import Image from "components/ui/Image";
import LOGO from "assets/images/Logo.png";
import styles from "./style.module.scss";
import classNames from "classnames";

type LogoProps = {
  size?: SizeType;
  className?: string;
};

const Logo: VFC<LogoProps> = ({ size, className }) => {
  return <Image src={LOGO} className={classNames(styles.logo, className)} />;
};

export default Logo;
