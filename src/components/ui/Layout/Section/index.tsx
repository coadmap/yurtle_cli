import { FC } from "react";
import styles from "../style.module.scss";
import classNames from "classnames";

type SectionProps = {
  backgroundColor?: string;
  className?: string;
};

const Section: FC<SectionProps> = ({ className, children }) => {
  return (
    <section className={classNames(styles.section, className)}>
      <div className={styles.sectionInnerWrap}>{children}</div>
    </section>
  );
};

export default Section;
