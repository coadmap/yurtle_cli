import { FC } from "react";
import styles from "./style.module.scss";
import classNames from "classnames";

type LayoutProps = {
  className?: string;
};

const Layout: FC<LayoutProps> = ({ className, children }) => {
  return <div className={classNames(styles.layout, className)}>{children}</div>;
};

export default Layout;
