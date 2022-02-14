import { FC } from "react";
import styles from "../style.module.scss";

const PageContent: FC = ({ children }) => {
  return <main className={styles.pageContent}>{children}</main>;
};

export default PageContent;
