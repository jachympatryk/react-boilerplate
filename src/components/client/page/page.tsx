import React from "react";

import { PageProps } from "./page.types";

import styles from "./page.module.scss";

export const Page: React.FC<PageProps> = ({ children }) => {
  /* include header/footer if necessary */

  return <div className={styles.container}>{children}</div>;
};
