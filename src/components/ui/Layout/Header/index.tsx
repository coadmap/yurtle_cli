import { FC } from "react";
import styles from "../style.module.scss";
import classNames from "classnames";
import { PageTitle } from "components/ui/Text";
import Logo from "components/ui/Logo";

type HeaderProps = {
  pageTitle?: string;
  className?: string;
};

const Header: FC<HeaderProps> = ({ pageTitle, className }) => {
  return (
    <header className={classNames(styles.header, className)}>
      <div
        className={classNames(styles.row, styles.spaceBetween, styles.vCenter, styles.lgHGutter)}
      >
        {pageTitle && <PageTitle>{pageTitle}</PageTitle>}

        <Logo />
      </div>
    </header>
  );
};

export default Header;
