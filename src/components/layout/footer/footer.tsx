import React from "react";
import { Typography } from "@mui/material";

import styles from "./footer.module.scss";

export const Footer = () => {
  return (
    <div className={styles.container}>
      <Typography variant="h4">Patryk Jachym</Typography>
    </div>
  );
};
