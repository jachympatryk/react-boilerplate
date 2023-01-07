import React from "react";
import { Typography } from "@mui/material";

import styles from "./about-me.module.scss";

export const AboutMe = () => {
  return (
    <div className={styles.container}>
      <Typography variant="h2">Patryk Jachym</Typography>
      <Typography variant="h4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, ea.</Typography>
    </div>
  );
};
