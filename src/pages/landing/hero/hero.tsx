import React from "react";
import { Button, Typography } from "@mui/material";

import styles from "./hero.module.scss";

export const Hero = () => {
  return (
    <div className={styles.container}>
      <Typography className={styles.text}>Front-end</Typography>
      <Typography className={styles.text}>developer</Typography>
      <Button className={styles.button}>Hire me</Button>
    </div>
  );
};
