import React from "react";
import { Typography } from "@mui/material";

import { skillsData } from "./skills.constants";

import styles from "./skills.module.scss";
import stylesMain from "../landing.module.scss";

export const Skills = () => {
  return (
    <div className={styles.container}>
      <Typography className={stylesMain.itemTitle}>My skills</Typography>
      <Typography className={stylesMain.itemSubTitle}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci aperiam aut debitis delectus
        dolorem eligendi maxime, qui quidem rem!
      </Typography>

      <div className={styles.content}>
        {skillsData.map(({ description, name, icon }) => (
          <div className={styles.itemWrapper}>
            <img src={icon} alt="skill" />
            <Typography variant="h2">{name}</Typography>
            <Typography variant="h3">{description}</Typography>
          </div>
        ))}
      </div>
    </div>
  );
};
