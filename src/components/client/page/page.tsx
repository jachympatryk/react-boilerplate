import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { IconButton } from "@mui/material";

import { PageProps } from "./page.types";
import { useWindowSize } from "hooks";
import { Footer, PersonalInfo } from "components";

import styles from "./page.module.scss";

export const Page: React.FC<PageProps> = ({ children }) => {
  const { width } = useWindowSize();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isDetailsOpen, setIsDetailsOpen] = useState<boolean>(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);

  const handleDetails = () => {
    setIsNavOpen((prevState) => !prevState);
  };

  const handleNav = () => {
    setIsNavOpen((prevState) => !prevState);
  };

  const isMobile = width < 768;

  return (
    <div className={styles.container}>
      {isMobile && (
        <>
          <div className={styles.header}>
            <IconButton>
              <MenuIcon onClick={handleDetails} className={styles.icon} />
            </IconButton>
            <IconButton>
              <MoreVertIcon onClick={handleNav} className={styles.icon} />
            </IconButton>
          </div>
          <div className={styles.content}>{children}</div>
        </>
      )}
      {!isMobile && (
        <>
          <PersonalInfo />
          <div className={styles.content}>{children}</div>
          <div className={styles.navigation}>nav</div>
        </>
      )}
      <Footer />
    </div>
  );
};
